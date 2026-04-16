import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

// Key helpers
const monthKey = () => {
  const now = new Date();
  return `vibe:${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
};
const monthLabel = () => {
  const now = new Date();
  return now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};
const visitorKey = "visitor:count";

// GET — return current stats (no side effects)
export async function GET() {
  const [visitorCount, monthSum, monthCount] = await Promise.all([
    redis.get<number>(visitorKey),
    redis.get<number>(`${monthKey()}:sum`),
    redis.get<number>(`${monthKey()}:count`),
  ]);

  const avgVibe =
    monthCount && monthSum ? Math.round((monthSum / monthCount) * 100) / 100 : null;

  return NextResponse.json({
    visitorCount: visitorCount ?? 0,
    avgVibe,
    monthLabel: monthLabel(),
    monthCount: monthCount ?? 0,
  });
}

// POST — submit a vibe (0–100) and get back your visitor number
export async function POST(req: Request) {
  const body = await req.json();
  const vibe = Number(body.vibe);

  if (isNaN(vibe) || vibe < 0 || vibe > 100) {
    return NextResponse.json({ error: "Invalid vibe value" }, { status: 400 });
  }

  const [newVisitorCount] = await Promise.all([
    redis.incr(visitorKey),
    redis.incrbyfloat(`${monthKey()}:sum`, vibe),
    redis.incr(`${monthKey()}:count`),
  ]);

  // Recalculate avg after the new submission
  const [monthSum, monthCount] = await Promise.all([
    redis.get<number>(`${monthKey()}:sum`),
    redis.get<number>(`${monthKey()}:count`),
  ]);

  const avgVibe =
    monthCount && monthSum ? Math.round((monthSum / monthCount) * 100) / 100 : vibe;

  return NextResponse.json({
    visitorNumber: newVisitorCount,
    avgVibe,
    monthLabel: monthLabel(),
    monthCount: monthCount ?? 1,
  });
}
