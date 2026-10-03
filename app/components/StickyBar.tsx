"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-900/85 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Live dot */}
          <span className="hidden sm:flex items-center gap-1.5 text-green-400 text-xs font-medium flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Now
          </span>
          <p className="text-zinc-300 text-sm truncate">
            <span className="text-white font-semibold">50,000+ channels</span> · 4K Ultra HD · Free 3-hour trial
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
          >
            Start Free Trial
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
