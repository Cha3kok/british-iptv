"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const deviceOptions = [1, 2, 3, 4];

const plans = [
  {
    name: "1 Month",
    basePrice: 15,
    devicePrices: { 1: 15, 2: 20, 3: 25, 4: 30 },
    period: "one-off",
    description: "Perfect for getting started",
    highlight: false,
  },
  {
    name: "3 Months",
    basePrice: 35,
    devicePrices: { 1: 35, 2: 45, 3: 55, 4: 65 },
    period: "every 3 months",
    description: "Great value for regular viewers",
    highlight: false,
  },
  {
    name: "6 Months",
    basePrice: 45,
    devicePrices: { 1: 45, 2: 60, 3: 75, 4: 90 },
    period: "every 6 months",
    badge: "Popular",
    description: "Best balance of price and flexibility",
    highlight: true,
  },
  {
    name: "12 Months",
    basePrice: 60,
    devicePrices: { 1: 60, 2: 80, 3: 100, 4: 120 },
    period: "per year",
    description: "Serious savings for committed viewers",
    highlight: false,
  },
  {
    name: "24 Months",
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
  { icon: "↩️", label: "7-Day Refund" },
  { icon: "🎧", label: "24/7 Free Support" },
  { icon: "🔒", label: "Privacy Protection & Built-in VPN" },
];

export default function Pricing() {
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Free 3-hour trial available.
          </p>
        </div>

        {/* Device selector */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-zinc-400 text-sm mb-4">
            How many devices do you need?
          </p>
          <div className="inline-flex bg-[#111111] border border-white/10 rounded-full p-1 gap-1">
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3 | 4)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  devices === d
                    ? "bg-amber-500 text-white shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start mb-10">
          {plans.map((plan) => {
            const price = plan.devicePrices[devices as keyof typeof plan.devicePrices];
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border flex flex-col transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 shadow-2xl shadow-amber-900/40 scale-105"
                    : "bg-[#111111] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-amber-500 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <p className={`font-bold text-base mb-0.5 ${plan.highlight ? "text-white" : "text-white"}`}>
                  {plan.name}
                </p>
                <p className={`text-xs mb-4 ${plan.highlight ? "text-amber-100" : "text-zinc-500"}`}>
                  {plan.description}
                </p>

                <div className="mb-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-white"}`}>
                    £{price}
                  </span>
                </div>
                <p className={`text-xs mb-5 ${plan.highlight ? "text-amber-100" : "text-zinc-500"}`}>
                  {plan.period} · {devices} {devices === 1 ? "connection" : "connections"}
                </p>

                <a
                  href={`https://wa.me/212707711512?text=${encodeURIComponent(`iptv-british.com - ${plan.name} / ${devices} ${devices === 1 ? "Device" : "Devices"} - £${price}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block text-center font-semibold py-2.5 rounded-full text-sm transition-colors ${
                    plan.highlight
                      ? "bg-white text-amber-500 hover:bg-amber-50"
                      : "bg-amber-500 text-white hover:bg-amber-400"
                  }`}
                >
                  Subscribe Now
                </a>
              </div>
            );
          })}
        </div>

        {/* Features included in all plans */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-7">
          <p className="text-zinc-400 text-xs uppercase tracking-wider font-medium mb-5">
            Everything included in every plan
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                <Check size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 bg-[#111111] border border-white/5 rounded-xl px-4 py-3"
            >
              <span className="text-xl flex-shrink-0">{h.icon}</span>
              <span className="text-zinc-300 text-xs font-medium leading-snug">{h.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          All plans include a free 3-hour trial. Contact us on WhatsApp to activate it — no credit card required.
        </p>
      </div>
    </section>
  );
}
