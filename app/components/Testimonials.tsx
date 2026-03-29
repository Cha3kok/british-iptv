import { Star } from "lucide-react";

const reviews = [
  {
    name: "James T.",
    location: "Manchester, UK",
    avatar: "JT",
    rating: 5,
    title: "Finally switched from Sky — best decision ever",
    body: "Paying £70/month for Sky was painful. I switched to BritishIPTV and I get more channels, better picture quality, and it costs me less than a tenner a month. Zero buffering in 6 months of use.",
    plan: "12-Month Plan",
  },
  {
    name: "Sarah M.",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    title: "Setup was dead easy, works great on my Firestick",
    body: "I was worried it'd be complicated but the setup guide was clear and I was watching within 10 minutes. The sports channels are incredible — got every Sky Sports and BT Sport channel.",
    plan: "3-Month Plan",
  },
  {
    name: "David K.",
    location: "Birmingham, UK",
    avatar: "DK",
    rating: 5,
    title: "Been with them 2 years, never looked back",
    body: "I've tried a few IPTV services over the years and this is by far the most reliable. Customer support actually responds quickly. The catch-up TV feature alone is worth the price.",
    plan: "12-Month Plan",
  },
  {
    name: "Lisa R.",
    location: "Leeds, UK",
    avatar: "LR",
    rating: 5,
    title: "Perfect for the whole family",
    body: "5 connections means everyone in the house can watch something different at the same time. Kids have their channels, husband has sports, I have my soaps. Brilliant service.",
    plan: "12-Month Plan",
  },
  {
    name: "Ahmed H.",
    location: "Bradford, UK",
    avatar: "AH",
    rating: 5,
    title: "International channels are excellent",
    body: "I watch a lot of Arabic and Asian channels alongside UK ones. The international selection is massive. Picture quality is consistently sharp even on the foreign channels.",
    plan: "3-Month Plan",
  },
  {
    name: "Caroline W.",
    location: "Bristol, UK",
    avatar: "CW",
    rating: 4,
    title: "Great service, WhatsApp support is a huge plus",
    body: "Contacted them via WhatsApp at 11pm with a setup question and got a reply within minutes. That level of support is rare. The service itself has been rock solid for 4 months.",
    plan: "1-Month Plan",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  const colors: Record<string, string> = {
    JT: "bg-blue-600",
    SM: "bg-pink-600",
    DK: "bg-purple-600",
    LR: "bg-emerald-600",
    AH: "bg-orange-600",
    CW: "bg-teal-600",
  };
  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[initials] ?? "bg-amber-500"} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const totalReviews = 2847;
  const avgRating = 4.9;

  return (
    <section id="reviews" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by thousands across the UK
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center gap-2 bg-[#111111] border border-white/10 rounded-2xl px-8 py-5">
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-white">{avgRating}</span>
              <span className="text-zinc-400 text-sm mb-2">/ 5.0</span>
            </div>
            <Stars count={5} />
            <p className="text-zinc-400 text-sm mt-1">
              Based on <span className="text-white font-medium">{totalReviews.toLocaleString()}</span> verified reviews
            </p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="break-inside-avoid bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={r.avatar} />
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-zinc-500 text-xs">{r.location}</p>
                </div>
                <span className="ml-auto bg-amber-500/15 text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium">
                  {r.plan}
                </span>
              </div>
              <Stars count={r.rating} />
              <h4 className="text-white font-semibold text-sm mt-3 mb-2">{r.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
