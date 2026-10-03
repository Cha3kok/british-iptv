"use client";

import { useState } from "react";
import { X } from "lucide-react";

const TRIAL_URL = "https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial";

// Promotional strip above the navbar (home page only). Every claim here must be
// a standing fact of the offer — no countdowns or invented deadlines.
export default function OfferBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 text-white">
      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-[sweep_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto flex h-[42px] max-w-7xl items-center justify-center gap-2 px-8 text-center sm:gap-3 sm:px-10">
        <span className="hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-black uppercase tracking-widest text-brand-700 md:inline-flex">
          Free Trial
        </span>

        <p className="whitespace-nowrap text-xs font-bold sm:text-sm">
          <span className="hidden sm:inline">📺 Try IPTV UK free for 3 hours — no credit card · Plans from £5/month</span>
          <span className="sm:hidden">📺 3-hour free trial · No card</span>
        </p>

        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 transition-transform hover:scale-105 sm:px-4 sm:py-1.5"
        >
          Start Free Trial
        </a>

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
