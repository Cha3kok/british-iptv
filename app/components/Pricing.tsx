"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const deviceOptions = [1, 2, 3, 4];

const plans = [
  {
    name: "1 Month",
    months: 1,
    basePrice: 15,
    devicePrices: { 1: 15, 2: 20, 3: 25, 4: 30 },
    period: "one-off",
    description: "Perfect for getting started",
    highlight: false,
  },
  {
    name: "3 Months",
    months: 3,
    basePrice: 35,
    devicePrices: { 1: 35, 2: 45, 3: 55, 4: 65 },
    period: "every 3 months",
    description: "Great value for regular viewers",
    highlight: false,
  },
  {
    name: "6 Months",
    months: 6,
    basePrice: 45,
    devicePrices: { 1: 45, 2: 60, 3: 75, 4: 90 },
    period: "every 6 months",
    badge: "Popular",
    description: "Best balance of price and flexibility",
    highlight: true,
  },
  {
    name: "12 Months",
    months: 12,
    basePrice: 60,
    devicePrices: { 1: 60, 2: 80, 3: 100, 4: 120 },
    period: "per year",
    description: "Serious savings for committed viewers",
    highlight: false,
  },
  {
    name: "24 Months",
    months: 24,
    basePrice: 110,
    devicePrices: { 1: 110, 2: 145, 3: 180, 4: 215 },
    period: "every 2 years",
    badge: "Best Value",
    description: "Maximum savings, set it and forget it",
    highlight: false,
  },
];

const features = [
  "50,000+ Live Channels",
  "4K Ultra HD Quality",
  "7-Day Catch-Up TV",
  "VOD Library (200,000+ titles)",
  "24/7 Priority Support",
  "Free Setup Assistance",
];

const highlights = [
  { icon: "📱", label: "Watch on any device" },
  { icon: "❄️", label: "Anti-Freeze™ 9.8 Technology" },
  { icon: "🎬", label: "+200K Movies & Series (VOD)" },
  { icon: "📺", label: "+50,000 Live Premium Channels" },
  { icon: "🎥", label: "4K / HD / FHD / UHD Quality" },
  { icon: "🔄", label: "Free & Auto Updates" },
  { icon: "📅", label: "Available EPG" },
  { icon: "↩️", label: "48-Hour Refund" },
  { icon: "🎧", label: "24/7 Free Support" },
  { icon: "🔒", label: "Privacy Protection & Built-in VPN" },
];

export default function Pricing() {
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-accent-600/15 blur-[120px] animate-aurora [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Simple, <span className="text-gradient">honest</span> pricing
            </>
          }
          subtitle="No hidden fees. No contracts. Cancel anytime. Free 3-hour trial available."
          className="mb-12!"
        />

        {/* Device selector */}
        <div className="reveal mb-14 flex flex-col items-center">
          <p className="mb-4 text-sm text-zinc-400">How many devices do you need?</p>
          <div className="relative inline-grid grid-cols-4 rounded-full border border-white/10 bg-ink-800 p-1">
            {/* Sliding pill */}
            <span
              className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 shadow-lg shadow-brand-600/40 transition-transform duration-300 ease-out"
              style={{ width: "calc((100% - 0.5rem) / 4)", transform: `translateX(${(devices - 1) * 100}%)` }}
            />
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3 | 4)}
                className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  devices === d ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="mb-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan, i) => {
            const price = plan.devicePrices[devices as keyof typeof plan.devicePrices];
            const href = `https://wa.me/212707711512?text=${encodeURIComponent(`iptv-british.com - ${plan.name} / ${devices} ${devices === 1 ? "Device" : "Devices"} - £${price}`)}`;

            const body = (
              <div
                className={`relative flex h-full flex-col rounded-[1.2rem] p-6 ${
                  plan.highlight ? "bg-gradient-to-b from-ink-700 to-ink-900" : ""
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold ${
                      plan.highlight
                        ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-600/40"
                        : "bg-white text-brand-700"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <p className="mb-0.5 text-base font-bold text-white">{plan.name}</p>
                <p className="mb-5 text-xs text-zinc-500">{plan.description}</p>

                <div className="mb-1 flex items-start gap-1">
                  <span className="mt-1.5 text-lg font-semibold text-zinc-400">£</span>
                  <span key={price} className="font-display text-5xl font-bold text-white animate-[pop_0.4s_ease-out]">
                    {price}
                  </span>
                </div>
                <p className="mb-6 text-xs text-zinc-500">
                  {plan.period} · {devices} {devices === 1 ? "connection" : "connections"}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-auto flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/40 hover:shadow-brand-500/60"
                      : "border border-white/15 bg-white/5 text-white hover:border-brand-500/60 hover:bg-brand-500/15"
                  }`}
                >
                  Subscribe Now
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href={`/product/${plan.months}-month-british-iptv`}
                  className="mt-3 text-center text-xs text-zinc-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {plan.name} plan details
                </Link>
              </div>
            );

            return (
              <div
                key={plan.name}
                className="reveal"
                style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
              >
                {plan.highlight ? (
                  <div className="glow-border h-full lg:-my-4 lg:scale-105">{body}</div>
                ) : (
                  <div className="spotlight h-full rounded-[1.25rem] border border-white/10 bg-ink-800/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    {body}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features included in all plans */}
        <div className="reveal glass rounded-2xl p-7">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Everything included in every plan
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                  <Check size={11} className="text-brand-300" />
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="reveal flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-800/60 px-4 py-3 transition-colors hover:border-brand-500/30"
              style={{ "--delay": `${(i % 5) * 50}ms` } as React.CSSProperties}
            >
              <span className="flex-shrink-0 text-xl">{h.icon}</span>
              <span className="text-xs font-medium leading-snug text-zinc-300">{h.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          All plans include a free 3-hour trial. Contact us on WhatsApp to activate it — no credit card required.
        </p>
      </div>
    </section>
  );
}
