import { Play, Shield, Zap } from "lucide-react";

const badges = [
  { icon: Zap, label: "50,000+ Channels" },
  { icon: Shield, label: "99.9% Uptime" },
  { icon: Play, label: "4K Ultra HD" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Live Streams Available Now
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          The Best British{" "}
          <span className="text-amber-400">IPTV</span>{" "}
          Experience
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stream 50,000+ live channels, movies, and series in crystal-clear 4K. UK, US, sports,
          entertainment — all in one place with no buffering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors w-full sm:w-auto"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 text-zinc-300 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-base transition-colors w-full sm:w-auto justify-center"
          >
            <Play size={16} className="fill-current" />
            See Features
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-zinc-400 text-sm">
              <Icon size={16} className="text-amber-400" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* TV mockup */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[60px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
