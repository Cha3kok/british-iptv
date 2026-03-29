import { CreditCard, Download, Tv2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Choose Your Plan",
    description:
      "Pick a subscription that suits you — monthly, quarterly, or annual. All plans include a free 3-hour trial. No credit card needed for the trial.",
    detail: "Instant activation after payment",
  },
  {
    number: "02",
    icon: Download,
    title: "Install an IPTV App",
    description:
      "Download any free IPTV player on your device — TiviMate, IPTV Smarters, or GSE IPTV. We support all major apps across all platforms.",
    detail: "Step-by-step guides provided for each device",
  },
  {
    number: "03",
    icon: Tv2,
    title: "Start Watching",
    description:
      "Enter your M3U URL or Xtream Codes login into the app. Your 50,000+ channels load instantly. Enjoy live TV, catch-up, and VOD.",
    detail: "Live in under 5 minutes",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Easy Setup
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Up and running in 3 simple steps
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            No technical knowledge needed. If you can download an app, you can set this up.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map(({ number, icon: Icon, title, description, detail }) => (
              <div key={number} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/40">
                    <Icon size={26} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#1a1a1a] border border-white/10 text-zinc-400 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {number.slice(1)}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-xs">{description}</p>
                <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Need help getting started?</p>
            <p className="text-zinc-400 text-sm">Our support team will set everything up for you — for free.</p>
          </div>
          <a
            href="https://wa.me/212707711512?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20IPTV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            Get Free Setup Help
          </a>
        </div>
      </div>
    </section>
  );
}
