"use client";
import { useState, useEffect } from "react";

type Stats = {
  visitorCount: number;
  avgVibe: number | null;
  monthLabel: string;
  monthCount: number;
};

type Result = {
  visitorNumber: number;
  avgVibe: number;
  monthLabel: string;
  monthCount: number;
};

const vibeLabel = (v: number) => {
  if (v <= 15) return { emoji: "😴", label: "Dead tired" };
  if (v <= 30) return { emoji: "😐", label: "Meh" };
  if (v <= 45) return { emoji: "🙂", label: "Doing okay" };
  if (v <= 60) return { emoji: "😊", label: "Pretty good" };
  if (v <= 75) return { emoji: "😄", label: "Feeling great" };
  if (v <= 90) return { emoji: "⚡", label: "Energized" };
  return { emoji: "🚀", label: "On fire" };
};

// e.g. "April" → "April's"
const possessive = (monthLabel: string) => {
  const month = monthLabel.split(" ")[0];
  return `${month}'s`;
};

const storageKey = () => {
  const now = new Date();
  return `vibeCheck:${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
};

export default function VibeCheck() {
  const [vibe, setVibe] = useState(50);
  const [stats, setStats] = useState<Stats | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already submitted this month
    try {
      if (localStorage.getItem(storageKey())) {
        setSubmitted(true);
      }
    } catch {}

    // Fetch current stats
    fetch("/api/vibe")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  const handleSubmit = async () => {
    // Guard against double-submit
    try {
      if (localStorage.getItem(storageKey())) {
        setSubmitted(true);
        return;
      }
    } catch {}

    setLoading(true);
    try {
      const res = await fetch("/api/vibe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vibe }),
      });
      const data = await res.json();
      setResult(data);
      setSubmitted(true);
      // Mark as voted for this month
      try {
        localStorage.setItem(storageKey(), "true");
      } catch {}
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  };

  const current = vibeLabel(vibe);

  // Determine what to show post-submit
  const displayResult = result ?? (stats?.avgVibe != null ? {
    visitorNumber: stats.visitorCount,
    avgVibe: stats.avgVibe,
    monthLabel: stats.monthLabel,
    monthCount: stats.monthCount,
  } : null);

  const avgVibeDisplay = displayResult ? vibeLabel(Math.round(displayResult.avgVibe)) : null;

  return (
    <section className="bg-gradient-to-br from-royal-50 via-white to-slate-50 border-t border-slate-100 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-extrabold text-slate-900 mb-10">
          What's your vibe right now?
        </h2>

        {!submitted ? (
          <div className="space-y-8">
            {/* Emoji + label */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-6xl transition-all duration-150">{current.emoji}</span>
              <span className="text-slate-600 font-medium text-lg">{current.label}</span>
            </div>

            {/* Slider */}
            <div className="px-4">
              <div className="relative">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={vibe}
                  onChange={(e) => setVibe(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer accent-royal-600"
                  style={{
                    background: `linear-gradient(to right, #93c5fd, #3b82f6, #1d4ed8)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-3">
                <span>😴 Dead tired</span>
                <span>← drag →</span>
                <span>🚀 On fire</span>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 bg-royal-600 text-white font-semibold rounded-full shadow-md hover:bg-royal-700 transition-all disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit my vibe"}
            </button>
          </div>
        ) : (
          /* Post-submit result */
          <div className="space-y-4">
            <div className="text-6xl">{result ? current.emoji : (avgVibeDisplay?.emoji ?? "😊")}</div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              {/* Collective vibe — hero */}
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">
                {displayResult ? possessive(displayResult.monthLabel) : ""} Collective Vibe Check
              </p>
              <p className="text-3xl font-bold text-slate-800 mb-1">
                {avgVibeDisplay?.emoji} {avgVibeDisplay?.label}
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Based on {displayResult?.monthCount.toLocaleString()} {displayResult?.monthCount === 1 ? "check-in" : "check-ins"} this month
              </p>

              {/* Visitor count — secondary */}
              <div className="border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-400">
                  You're site visitor{" "}
                  <span className="text-royal-600 font-semibold">
                    #{displayResult?.visitorNumber.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
