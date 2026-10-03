"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const OFFER_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const STORAGE_KEY = "iptv_offer_end";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getEndTime(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_DURATION_MS;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + OFFER_DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const end = getEndTime();

    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        setDismissed(true);
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      setTimeLeft({ h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted || dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 text-white">
      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-[sweep_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto flex h-[42px] max-w-7xl items-center justify-center gap-2 px-8 text-center sm:gap-3 sm:px-10">
        <span className="hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-black uppercase tracking-widest text-brand-700 md:inline-flex">
          Limited Offer
        </span>

        <p className="whitespace-nowrap text-xs font-bold sm:text-sm">
          <span className="hidden sm:inline">🔥 -20% OFF all plans — offer ends in:</span>
          <span className="sm:hidden">🔥 -20% OFF ends in</span>
        </p>

        <div className="flex items-center gap-1 font-mono">
          {[
            { value: timeLeft.h, label: "H" },
            { value: timeLeft.m, label: "M" },
            { value: timeLeft.s, label: "S" },
          ].map(({ value, label }, i) => (
            <span key={label} className="flex items-center gap-1">
              {i > 0 && <span className="-mt-0.5 font-black text-white/60">:</span>}
              <span className="rounded bg-black/25 px-1.5 py-0.5 text-center text-xs font-black tabular-nums sm:text-sm">
                {pad(value)}
                <span className="ml-0.5 text-[9px] font-bold opacity-70">{label}</span>
              </span>
            </span>
          ))}
        </div>

        <Link
          href="/#pricing"
          className="hidden whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 sm:inline-block sm:px-4 sm:py-1.5 transition-transform hover:scale-105"
        >
          Claim Now
        </Link>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
          aria-label="Dismiss"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
