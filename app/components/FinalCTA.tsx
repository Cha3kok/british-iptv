import { ArrowRight } from "lucide-react";

const TRIAL_URL = "https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial";

export default function FinalCTA() {
  return (
    <section className="relative bg-ink-950 px-4 pb-28 sm:px-6 lg:px-8">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-sky-400/30 blur-[100px] animate-aurora" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-accent-500/30 blur-[100px] animate-aurora [animation-delay:-6s]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Ready to cut the cord? Try it free for 3 hours.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100/80">
            Message us on WhatsApp and you&apos;ll be watching in minutes. No credit card, no commitment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-2xl shadow-black/30 transition-transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
