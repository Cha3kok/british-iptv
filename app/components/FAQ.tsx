"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What devices does British IPTV work on?",
    a: "Our service works on virtually any device: Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Android phones, iPhones, iPads, MAG boxes, and any IPTV player like TiviMate, IPTV Smarters, or Perfect Player.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a free 3-hour trial so you can test our service before subscribing. No credit card required. Contact us via WhatsApp or live chat to get your trial activated.",
  },
  {
    q: "Is there any buffering or freezing?",
    a: "We invest heavily in our server infrastructure and CDN to ensure a smooth experience. The vast majority of our customers report zero buffering. A stable internet connection of at least 10Mbps is recommended for HD, and 25Mbps for 4K.",
  },
  {
    q: "How many devices can I use at the same time?",
    a: "This depends on your plan. The 1-Month plan supports 2 simultaneous connections, 3 Months supports 3, and the 12-Month plan supports up to 5 connections. Each connection can be on a different device.",
  },
  {
    q: "Can I watch UK channels from abroad?",
    a: "Yes. Our service works worldwide. You can watch all UK channels no matter where you are in the world — no VPN required.",
  },
  {
    q: "How do I set up the service?",
    a: "Setup is simple. Once you subscribe, you receive your M3U link or Xtream Codes login within minutes. Enter these into any compatible IPTV app and you're live. We provide step-by-step guides and can assist you via chat.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, PayPal, and cryptocurrency. All payments are secure and encrypted.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-amber-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-zinc-400 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Common questions
          </h2>
          <p className="text-zinc-400 text-lg">
            Can&apos;t find the answer? Chat with us 24/7 on WhatsApp.
          </p>
        </div>

        <div className="bg-[#111111] border border-white/5 rounded-2xl px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
