import { ArrowRight, Play, ShieldCheck, Sparkles, Zap } from "lucide-react";
import CountUp from "./CountUp";

const TRIAL_URL = "https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial";

const stats = [
  { to: 50000, suffix: "+", label: "Live channels" },
  { to: 200000, suffix: "+", label: "Movies & series" },
  { to: 99.9, decimals: 1, suffix: "%", label: "Uptime" },
  { to: 4.9, decimals: 1, suffix: "/5", label: "Customer rating" },
];

const guide = [
  { ch: "101", name: "Sports 1 HD", show: "Live Football", live: true },
  { ch: "102", name: "Movies Premiere", show: "Blockbuster Night" },
  { ch: "103", name: "UK Entertainment", show: "Saturday Night Show" },
  { ch: "104", name: "News 24", show: "Breaking Coverage" },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function TvMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float">
      {/* Glow behind */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/40 via-sky-400/20 to-accent-500/30 blur-3xl" />

      <div className="glow-border rounded-[1.6rem]">
        <div className="relative rounded-[1.5rem] bg-ink-900 p-3">
          {/* Screen */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-ink-800 to-ink-950">
            {/* Pitch scene */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(34,197,94,0.35),transparent_60%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-[repeating-linear-gradient(90deg,rgba(34,197,94,0.10)_0_40px,rgba(34,197,94,0.04)_40px_80px)] [transform:perspective(400px)_rotateX(55deg)]" />
            <div className="absolute bottom-[18%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-white/20 [transform:perspective(400px)_rotateX(55deg)]" />

            {/* Scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent animate-scan" />

            {/* Top HUD */}
            <div className="absolute left-3 top-3 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-md bg-accent-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Live
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                4K UHD
              </span>
            </div>
            <div className="absolute right-3 top-3 flex h-4 items-end gap-0.5">
              {[0, 150, 300, 450, 600].map((d) => (
                <span
                  key={d}
                  className="h-full w-1 origin-bottom rounded-sm bg-brand-300 animate-eq"
                  style={{ animationDelay: `${d}ms` }}
                />
              ))}
            </div>

            {/* Scoreboard */}
            <div className="glass absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-xl px-3 py-1.5 text-white sm:gap-3 sm:px-4 sm:py-2">
              <span className="text-xs font-semibold text-zinc-300">HOME</span>
              <span className="font-mono text-base font-bold sm:text-lg">2 – 1</span>
              <span className="text-xs font-semibold text-zinc-300">AWAY</span>
              <span className="ml-1 rounded bg-brand-500/30 px-1.5 text-[10px] font-semibold text-brand-200">78&apos;</span>
            </div>

            {/* Progress bar */}
            <div className="absolute inset-x-3 bottom-3">
              <div className="h-1 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-400 to-accent-500" />
              </div>
            </div>
          </div>

          {/* Mini guide */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {guide.map((g) => (
              <div
                key={g.ch}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-left ${
                  g.live ? "bg-brand-500/15 ring-1 ring-brand-500/40" : "bg-white/[0.03]"
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-500">{g.ch}</span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-white">{g.name}</p>
                  <p className="truncate text-[10px] text-zinc-400">{g.show}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="glass absolute -left-8 top-1/3 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-float [animation-delay:-2s] sm:flex">
        <Zap size={14} className="text-brand-300" />
        <span className="text-xs font-semibold text-white">0 buffering</span>
      </div>
      <div className="glass absolute -right-4 bottom-24 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-float [animation-delay:-4s] sm:flex">
        <ShieldCheck size={14} className="text-emerald-400" />
        <span className="text-xs font-semibold text-white">Built-in VPN</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 sm:pt-44">
      {/* Animated aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[-10%] h-[520px] w-[620px] rounded-full bg-brand-600/30 blur-[120px] animate-aurora" />
        <div className="absolute right-[-10%] top-20 h-[460px] w-[520px] rounded-full bg-accent-600/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[420px] w-[520px] rounded-full bg-sky-500/15 blur-[120px] animate-aurora [animation-delay:-12s]" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="hero-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live streams available now
            <Sparkles size={12} className="text-brand-300" />
          </div>

          <h1
            className="hero-in mt-7 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={delay(80)}
          >
            The Best <span className="text-gradient">IPTV UK</span> Experience
          </h1>

          <p
            className="hero-in mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl lg:mx-0"
            style={delay(160)}
          >
            The UK IPTV subscription built for British viewers. Stream 50,000+ live channels and 200,000+
            movies and series in crystal-clear 4K on any device — no dish, no contract, no buffering.
          </p>

          <div
            className="hero-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={delay(240)}
          >
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(76,111,255,0.8)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Start Free Trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-zinc-200 backdrop-blur transition-colors hover:border-white/30 hover:text-white sm:w-auto"
            >
              <Play size={16} className="fill-current" />
              See Features
            </a>
          </div>

          <p className="hero-in mt-5 text-sm text-zinc-500" style={delay(320)}>
            Free 3-hour trial · No credit card · Activated in minutes
          </p>
        </div>

        {/* Visual */}
        <div className="hero-in" style={delay(200)}>
          <TvMockup />
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/90 px-6 py-6 text-center backdrop-blur">
              <p className="font-display text-3xl font-bold text-white">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
