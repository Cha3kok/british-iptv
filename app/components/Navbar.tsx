"use client";

import { useState } from "react";
import { Menu, X, Tv } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Channels", href: "#channels" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Setup", href: "/setup" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur border-b border-amber-500/20 mt-[42px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
          <Tv className="text-amber-400" size={22} />
          British<span className="text-amber-400">IPTV</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="#pricing"
            className="bg-amber-500 hover:bg-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full text-center transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
