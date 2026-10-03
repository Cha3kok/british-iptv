"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { homeFaqs } from "../lib/faqs";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`reveal rounded-2xl border transition-colors duration-300 ${
        open ? "border-brand-500/40 bg-ink-800" : "border-white/[0.07] bg-ink-900/70 hover:border-white/15"
      }`}
      style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-medium text-white sm:text-base">{q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-180 bg-brand-500 text-white" : "bg-white/5 text-brand-300"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              IPTV UK <span className="text-gradient">questions</span>, answered
            </>
          }
          subtitle="Can't find the answer? Chat with us 24/7 on WhatsApp."
        />

        <div className="flex flex-col gap-3">
          {homeFaqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
