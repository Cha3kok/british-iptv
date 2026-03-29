import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Tv2,
    title: "50,000+ Live Channels",
    description:
      "British, American, sports, news, kids — massive channel library covering every genre and region.",
  },
  {
    icon: MonitorPlay,
    title: "4K Ultra HD Streaming",
    description:
      "Crystal-clear picture quality with Dolby Audio support. Watch like you're in the studio.",
  },
  {
    icon: Wifi,
    title: "Zero Buffering",
    description:
      "Our optimised CDN network ensures smooth, uninterrupted streaming even during peak hours.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with Smart TV, Firestick, Android, iOS, MAG, and any IPTV player. Any device, any time.",
  },
  {
    icon: Clock,
    title: "7-Day Catch-Up TV",
    description:
      "Missed your favourite show? Replay anything from the last 7 days across supported channels.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via live chat and WhatsApp. We're always here when you need us.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Built for British viewers who demand the best. No contracts, no hidden fees.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[#111111] hover:bg-[#1a1a1a] border border-white/5 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/25 transition-colors">
                <Icon size={22} className="text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
