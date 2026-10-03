import SectionHeader from "./SectionHeader";
import ClientClones from "./ClientClones";

const categories = [
  { emoji: "🇬🇧", name: "UK Channels", count: "800+" },
  { emoji: "🏆", name: "Sports", count: "300+" },
  { emoji: "🎬", name: "Movies & Series", count: "200,000+" },
  { emoji: "📰", name: "News", count: "200+" },
  { emoji: "👶", name: "Kids", count: "150+" },
  { emoji: "🌍", name: "International", count: "5,000+" },
  { emoji: "🎵", name: "Music", count: "100+" },
  { emoji: "🕹️", name: "Gaming & eSports", count: "80+" },
];

const rowA = [
  "Live Football", "European Football", "Motorsport", "Boxing", "Cricket", "Rugby Union",
  "American Football", "Basketball", "Golf", "Tennis", "Darts", "MMA",
];
const rowB = [
  "UK Entertainment", "Movies 4K", "Documentaries", "Kids & Family", "News 24/7", "Music Hits",
  "Reality TV", "Comedy", "Drama", "Nature", "History", "Arabic & Asian",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-brand-500/50 hover:text-white">
      {children}
    </span>
  );
}

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-x pause-on-hover flex overflow-hidden">
      <div className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
        <ClientClones>
          {items.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </ClientClones>
      </div>
    </div>
  );
}

export default function Channels() {
  return (
    <section id="channels" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Channel Lineup"
          title={
            <>
              <span className="text-gradient">50,000+</span> channels at your fingertips
            </>
          }
          subtitle="Every major British channel plus thousands of international options."
        />
      </div>

      <div className="reveal relative mb-16 flex flex-col gap-3">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className="reveal spotlight group rounded-2xl border border-white/[0.07] bg-ink-900/80 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
          >
            <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-125">{cat.emoji}</div>
            <div className="mb-1 text-sm font-semibold text-white">{cat.name}</div>
            <div className="font-display text-lg font-bold text-brand-300">{cat.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
