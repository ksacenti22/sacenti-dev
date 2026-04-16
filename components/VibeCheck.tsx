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

export default function VibeCheck() {
  const [vibe, setVibe] = useState(50);
  const [stats, setStats] = useState<Stats | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/vibe")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  const handleSubmit = async () => {
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
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  };

  const current = vibeLabel(vibe);
  const avgVibeDisplay = submitted && result ? vibeLabel(Math.round(result.avgVibe)) : stats?.avgVibe ? vibeLabel(Math.round(stats.avgVibe)) : null;

  return (
    <section className="bg-gradient-to-br from-royal-50 via-white to-slate-50 border-t border-slate-100 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-royal-500 font-semibold text-sm tracking-widest uppercase mb-3">
          Leave Your Mark
        </p>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
          What's your vibe right now?
        </h2>
        <p className="text-slate-500 mb-10">
          Drag the slider and submit — no account needed.
        </p>

        {!submitted ? (
          <div className="space-y-8">
            {/* Emoji + label */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-6xl transition-all duration-150">{current.emoji}</span>
              <span className="text-slate-600 font-medium text-lg">{current.label}</span>
            </div>

            {/* Slider */}
            <div className="px-4">
              <input
                type="range"
                min={0}
                max={100}
                value={vibe}
                onChange={(e) => setVibe(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-royal-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>😴 Dead tired</span>
                <span>🚀 On fire</span>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 bg-royal-600 text-white font-semibold rounded-full shadow hover:bg-royal-700 transition-all disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit my vibe"}
            </button>

            {/* Live stats teaser */}
            {stats && stats.avgVibe !== null && stats.monthCount > 0 && (
              <p className="text-slate-400 text-sm">
                {stats.monthCount.toLocaleString()} {stats.monthCount === 1 ? "person has" : "people have"} checked in this {stats.monthLabel}.
              </p>
            )}
          </div>
        ) : (
          /* Post-submit result */
          <div className="space-y-6 animate-fade-in">
            <div className="text-6xl">{current.emoji}</div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-4">
              <p className="text-2xl font-bold text-slate-900">
                You're visitor{" "}
                <span className="text-royal-600">#{result?.visitorNumber.toLocaleString()}</span>
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-1">
                  {result?.monthLabel} Collective Vibe
                </p>
                <p className="text-3xl font-bold text-slate-800">
                  {avgVibeDisplay?.emoji} {avgVibeDisplay?.label}
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  Based on {result?.monthCount.toLocaleString()} {result?.monthCount === 1 ? "check-in" : "check-ins"} this month
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Thanks for leaving your mark ✌️</p>
          </div>
        )}
      </div>
    </section>
  );
}
