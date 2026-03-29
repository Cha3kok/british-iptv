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

export default function Channels() {
  return (
    <section id="channels" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Channel Lineup
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            50,000+ channels at your fingertips
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every major British channel plus thousands of international options.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-center hover:border-amber-500/30 transition-colors"
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <div className="text-white font-semibold text-sm mb-1">{cat.name}</div>
              <div className="text-amber-400 text-xs font-bold">{cat.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
