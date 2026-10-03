import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ClientClones from "./ClientClones";

const reviews = [
  {
    name: "James T.",
    location: "Manchester, UK",
    avatar: "JT",
    rating: 5,
    title: "Finally switched from satellite — best decision ever",
    body: "Paying £70/month for satellite TV was painful. I switched to British IPTV and I get more channels, better picture quality, and it costs me less than a tenner a month. Zero buffering in 6 months of use.",
    plan: "12-Month Plan",
  },
  {
    name: "Sarah M.",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    title: "Setup was dead easy, works great on my Firestick",
    body: "I was worried it'd be complicated but the setup guide was clear and I was watching within 10 minutes. The sports channels are incredible — got every sports channel I wanted.",
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
    JT: "from-brand-500 to-brand-700",
    SM: "from-accent-400 to-accent-600",
    DK: "from-violet-500 to-violet-700",
    LR: "from-emerald-500 to-emerald-700",
    AH: "from-sky-400 to-sky-600",
    CW: "from-teal-500 to-teal-700",
  };
  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[initials] ?? "from-brand-500 to-brand-700"} ring-2 ring-white/10 flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="spotlight relative w-[340px] shrink-0 rounded-3xl border border-white/[0.07] bg-ink-900/90 p-6 transition-colors hover:border-brand-500/30 sm:w-[380px]">
      <Quote size={36} className="absolute right-5 top-5 text-white/[0.05]" />
      <div className="mb-4 flex items-center gap-3">
        <Avatar initials={r.avatar} />
        <div>
          <p className="text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-zinc-500">{r.location}</p>
        </div>
        <span className="ml-auto whitespace-nowrap rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-300">
          {r.plan}
        </span>
      </div>
      <Stars count={r.rating} />
      <h3 className="mb-2 mt-3 text-sm font-semibold text-white">{r.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{r.body}</p>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, half), reviews.slice(half)];

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title={
            <>
              What <span className="text-gradient">UK viewers</span> say
            </>
          }
          className="mb-10!"
        />

        <p className="reveal -mt-4 mb-14 text-center text-zinc-400">
          Don&apos;t take their word for it —{" "}
          <a href="#pricing" className="text-brand-300 underline underline-offset-4 hover:text-brand-200">
            try it free for 3 hours
          </a>
          .
        </p>
      </div>

      <div className="reveal flex flex-col gap-5">
        {rows.map((row, idx) => (
          <div key={idx} className="mask-x pause-on-hover flex overflow-hidden">
            <div
              className={`flex shrink-0 gap-5 pr-5 ${idx % 2 ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:60s]`}
            >
              {row.map((r) => (
                <ReviewCard key={r.name} r={r} />
              ))}
              <ClientClones count={3}>
                {row.map((r) => (
                  <ReviewCard key={r.name} r={r} />
                ))}
              </ClientClones>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
