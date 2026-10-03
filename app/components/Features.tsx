import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Tv2,
    title: "50,000+ Live Channels",
    description:
      "British, American, sports, news, kids — massive channel library covering every genre and region.",
    span: "lg:col-span-2",
    tint: "from-brand-500/25",
  },
  {
    icon: MonitorPlay,
    title: "4K Ultra HD Streaming",
    description:
      "Crystal-clear picture quality with Dolby Audio support. Watch like you're in the studio.",
    tint: "from-accent-500/20",
  },
  {
    icon: Wifi,
    title: "Zero Buffering",
    description:
      "Our optimised CDN network ensures smooth, uninterrupted streaming even during peak hours.",
    tint: "from-sky-500/20",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with Smart TV, Firestick, Android, iOS, MAG, and any IPTV player. Any device, any time.",
    tint: "from-brand-500/20",
  },
  {
    icon: Clock,
    title: "7-Day Catch-Up TV",
    description:
      "Missed your favourite show? Replay anything from the last 7 days across supported channels.",
    tint: "from-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via live chat and WhatsApp. We're always here when you need us.",
    span: "lg:col-span-3",
    tint: "from-emerald-500/15",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={
            <>
              Everything you need, <span className="text-gradient">nothing you don&apos;t</span>
            </>
          }
          subtitle="Built for British viewers who demand the best. No contracts, no hidden fees."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, span, tint }, i) => (
            <div
              key={title}
              className={`reveal spotlight group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 ${span ?? ""}`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${tint} to-transparent blur-2xl transition-transform duration-700 group-hover:scale-150`} />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-brand-700/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon size={22} className="text-brand-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-zinc-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
