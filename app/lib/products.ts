export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-month-british-iptv",
    name: "1 Month British IPTV",
    price: 15,
    period: "one-off payment",
    highlight: false,
    metaTitle: "1 Month British IPTV — £15 | 50,000+ Channels, 4K HD | BritishIPTV",
    metaDescription:
      "Get 1 month of British IPTV for just £15. 50,000+ live channels, 4K Ultra HD, 7-day catch-up, zero buffering. No contract. Instant activation. Free 3-hour trial available.",
    h1: "1 Month British IPTV — £15 One-Off Payment",
    heroSubtitle:
      "The perfect way to try British IPTV risk-free. Full access to 50,000+ live channels, 4K streaming, and 7-day catch-up TV for just £15. No contracts, no recurring charges.",
    whatsappMessage: "iptv-british.com - I'd like to subscribe to the 1 Month British IPTV plan (£15)",
    whoIsItFor: [
      {
        title: "First-Time IPTV Users",
        description:
          "Not sure if IPTV is right for you? The 1-month plan gives you a full month to explore all 50,000+ channels, test the 4K streams, and discover how IPTV compares to your current TV setup — completely commitment-free.",
      },
      {
        title: "Short-Stay Visitors to the UK",
        description:
          "Visiting the UK for a few weeks? Get full access to British TV including BBC, ITV, Channel 4, and all major sports channels for the duration of your stay. No need to sign up for a costly cable package.",
      },
      {
        title: "Seasonal or Event Viewers",
        description:
          "Want access for a specific event — a sports tournament, a TV season finale, or the festive Christmas TV lineup? A single month of British IPTV covers you perfectly without locking you into a longer commitment.",
      },
    ],
    faq: [
      {
        q: "Is the 1-month plan really no contract?",
        a: "Yes, completely. You pay £15 once and get access for exactly 30 days. There is no automatic renewal, no recurring charge, and no cancellation needed. When your month expires, it simply stops — you choose whether to renew.",
      },
      {
        q: "Can I upgrade to a longer plan after my month ends?",
        a: "Absolutely. Once your 1-month period ends, you can subscribe to any of our longer plans — 3, 6, 12, or 24 months. Just message us on WhatsApp and we'll get you set up on the plan of your choice.",
      },
      {
        q: "Does the 1-month plan include all the same channels as longer plans?",
        a: "Yes — all plans include the full channel lineup. You get 50,000+ live channels, 200,000+ VODs, 4K quality, 7-day catch-up, and all features. The only difference between plans is the duration and price per month.",
      },
      {
        q: "How quickly will I get access after payment?",
        a: "Activation is instant. Once your payment is confirmed, we send your M3U credentials and setup guide via WhatsApp within minutes — typically under 10 minutes, 24 hours a day.",
      },
      {
        q: "Is there a refund if I'm not satisfied?",
        a: "Yes. We offer a 7-day refund guarantee on all plans. If you're not happy for any reason within the first 7 days, contact us on WhatsApp and we'll refund you without question.",
      },
    ],
    testimonials: [
      {
        name: "James T.",
        city: "Manchester",
        rating: 5,
        text: "I just wanted to test IPTV before committing and the 1-month plan was perfect. The picture quality on Sky Sports was genuinely better than my old satellite. I've since upgraded to the 6-month plan.",
      },
      {
        name: "Priya S.",
        city: "Birmingham",
        rating: 5,
        text: "Signed up for one month while visiting family in the UK. Got set up in about 5 minutes and had hundreds of channels to watch. Brilliant value for £15 — I'll definitely subscribe again next visit.",
      },
      {
        name: "Daniel H.",
        city: "Leeds",
        rating: 5,
        text: "Used the 1-month plan to watch the Champions League knockout stages. Zero buffering on any game, even the late-night European ones. Support was fast when I had a question on day one.",
      },
    ],
  },
  {
    slug: "3-month-british-iptv",
    name: "3 Months British IPTV",
    price: 35,
    period: "one-off payment",
    highlight: false,
    metaTitle: "3 Months British IPTV — £35 | Save vs Monthly | BritishIPTV",
    metaDescription:
      "3 months of British IPTV for £35 — that's under £12/month. 50,000+ channels, 4K Ultra HD, 7-day catch-up. No contract, instant activation. Try free for 3 hours.",
    h1: "3 Months British IPTV — £35 One-Off Payment",
    heroSubtitle:
      "Three months of premium British IPTV for just £35 — saving you £10 vs rolling monthly. Ideal for casual viewers who want reliable access without the cost of a long-term subscription.",
    whatsappMessage: "iptv-british.com - I'd like to subscribe to the 3 Month British IPTV plan (£35)",
    whoIsItFor: [
      {
        title: "Casual TV Viewers",
        description:
          "You don't watch TV every single day, but when you do, you want quality. The 3-month plan gives you full access to 50,000+ channels and 200,000+ VODs at a per-month cost that beats rolling monthly plans, without committing to half a year or more.",
      },
      {
        title: "Students & University Life",
        description:
          "A university term lasts roughly three months — and so does this plan. Cover your entire term with live sports, entertainment channels, and VOD content. Perfect for shared student houses where you all want proper TV without a cable subscription.",
      },
      {
        title: "Working Professionals Abroad",
        description:
          "Posted abroad for a quarter? This plan keeps you connected to British TV — BBC, ITV, Channel 4, Sky Sports — wherever you are in the world. Our service works globally without a VPN.",
      },
    ],
    faq: [
      {
        q: "How much does the 3-month plan save me vs monthly?",
        a: "At £35 for 3 months, you're paying just under £11.67 per month. Compare that to the 1-month plan at £15 per month — you save £10 over the same period. It's the entry point for real savings.",
      },
      {
        q: "Can multiple people in my house use the same subscription?",
        a: "Yes. Our plans support 1 to 4 simultaneous connections. You can watch on your TV, your partner on a tablet, and kids on a phone — all at the same time, all from the same subscription.",
      },
      {
        q: "Will I lose access at the end of the 3 months or get auto-charged?",
        a: "There are no automatic renewals. When your 3 months are up, your access simply expires. We may send you a renewal reminder, but you'll never be charged without your explicit request.",
      },
      {
        q: "What happens if I have technical issues during my 3 months?",
        a: "Our 24/7 WhatsApp support is available throughout your entire subscription. Most issues are resolved within minutes. We also offer a 7-day refund guarantee if you're unhappy for any reason.",
      },
    ],
    testimonials: [
      {
        name: "Sophie R.",
        city: "Bristol",
        rating: 5,
        text: "The 3-month plan was exactly what I needed — I'm a student and wanted TV for the term. Loads of channels, brilliant sports coverage, and the setup guide was really clear. Worth every penny.",
      },
      {
        name: "Ahmed K.",
        city: "London",
        rating: 5,
        text: "I was sceptical but the trial convinced me. Signed up for 3 months and I've had no issues at all. BBC, ITV, all the Sky Sports channels — all working perfectly. Will probably go for 6 months next time.",
      },
      {
        name: "Claire W.",
        city: "Edinburgh",
        rating: 4,
        text: "Good value for 3 months. The catch-up TV feature is really useful — I work shifts so I can never watch things live. Being able to go back 7 days is a game changer. Solid service.",
      },
    ],
  },
  {
    slug: "6-month-british-iptv",
    name: "6 Months British IPTV",
    price: 45,
    period: "one-off payment",
    badge: "Most Popular",
    highlight: true,
    metaTitle: "6 Months British IPTV — £45 | Most Popular Plan | BritishIPTV",
    metaDescription:
      "6 months of British IPTV for just £45 — only £7.50/month. Most popular plan. 50,000+ channels, 4K Ultra HD, 7-day catch-up, anti-freeze technology. Instant setup.",
    h1: "6 Months British IPTV — £45 One-Off Payment",
    heroSubtitle:
      "Our most popular plan for good reason. Six months of premium British IPTV for just £45 — that's £7.50 per month. The perfect balance of savings and flexibility for regular viewers.",
    whatsappMessage: "iptv-british.com - I'd like to subscribe to the 6 Month British IPTV plan (£45)",
    whoIsItFor: [
      {
        title: "Regular TV Watchers",
        description:
          "You watch TV most evenings and weekends. You want reliable access to live sports, drama, documentaries, and news without paying Sky prices. At £7.50/month, the 6-month plan is the sweet spot — great savings, still flexible enough to reassess in six months.",
      },
      {
        title: "Sports Season Followers",
        description:
          "A Premier League season runs from August to May — roughly nine months. The 6-month plan covers the crucial mid-season period including the January transfer window, Champions League knockout stages, and the championship run-in. Add a second 6-month plan to cover the rest.",
      },
      {
        title: "Families Replacing Cable TV",
        description:
          "For families thinking about ditching their Sky or Virgin subscription, 6 months is the ideal trial period. It's long enough to properly evaluate whether IPTV meets all your household's needs — kids' channels, sports, soaps, news — before making a longer commitment.",
      },
    ],
    faq: [
      {
        q: "Why is the 6-month plan the most popular?",
        a: "It offers the best balance of savings and flexibility. At £7.50 per month you're saving 50% vs the monthly plan, but you're not committing to a full year upfront. Most customers who try it either renew for another 6 months or upgrade to the 12-month plan.",
      },
      {
        q: "Does the 6-month plan support 4K streaming?",
        a: "Yes — all plans include our full quality tier. Where channels broadcast in 4K UHD, you'll receive 4K. Where they broadcast in FHD or HD, you'll receive those. Quality is never artificially limited on any plan.",
      },
      {
        q: "Can I use the service in another country for part of the 6 months?",
        a: "Absolutely. Our service works globally — UK expats in Dubai, Spain, Australia, Canada — wherever you are, your British channels travel with you. No VPN required.",
      },
      {
        q: "How does the 7-day catch-up work on this plan?",
        a: "Catch-up TV lets you replay any programme from the last 7 days on supported channels. Browse the EPG guide, find what you missed, and play it back on demand. It works on all devices — TV, phone, tablet, or laptop.",
      },
      {
        q: "What if I want to add a second device connection?",
        a: "All plans include multi-device support (1-4 connections). If you want to connect additional devices simultaneously, just let us know when you subscribe. We'll configure your subscription for the number of screens you need.",
      },
    ],
    testimonials: [
      {
        name: "Mark B.",
        city: "Liverpool",
        rating: 5,
        text: "Been on the 6-month plan for over a year now — keep renewing it every time. Sky Sports in 4K with zero buffering. My mates can't believe how much I'm saving. Should have switched years ago.",
      },
      {
        name: "Emma F.",
        city: "Cardiff",
        rating: 5,
        text: "Switched from Sky after 8 years and genuinely haven't missed it. Everything I was watching on Sky is here, plus loads more. The whole family uses it — different devices, different rooms, no issues.",
      },
      {
        name: "Tariq M.",
        city: "London",
        rating: 5,
        text: "Set up in under 10 minutes on my Firestick. The Arabic channels are incredible — far more selection than I had on satellite. The 6-month price is unbeatable. Customer service replied within minutes on WhatsApp.",
      },
    ],
  },
  {
    slug: "12-month-british-iptv",
    name: "12 Months British IPTV",
    price: 60,
    period: "one-off payment",
    highlight: false,
    metaTitle: "12 Months British IPTV — £60 | Only £5/Month | BritishIPTV",
    metaDescription:
      "12 months of British IPTV for just £60 — that's £5 per month. Full year of 50,000+ channels, 4K streaming, 7-day catch-up. Best value for committed viewers. Instant setup.",
    h1: "12 Months British IPTV — £60 One-Off Payment",
    heroSubtitle:
      "A full year of premium British IPTV for just £60. At £5 per month, this is the plan for viewers who know they love IPTV and want guaranteed access across every sports season and TV schedule for the year ahead.",
    whatsappMessage: "iptv-british.com - I'd like to subscribe to the 12 Month British IPTV plan (£60)",
    whoIsItFor: [
      {
        title: "Committed TV Households",
        description:
          "You and your family watch TV every day. You've already tried IPTV and know it works for you. The 12-month plan gives you an entire year of uninterrupted access for just £60 — less than two months of a Sky subscription — with zero admin for 12 months.",
      },
      {
        title: "Sports Superfans",
        description:
          "A full year covers every Premier League game, the World Cup, Olympics, Wimbledon, Tour de France, F1 season, Six Nations, and every boxing night. You'll never have to think about renewing mid-season — just subscribe once and you're set for the year.",
      },
      {
        title: "Families Wanting the Best Value",
        description:
          "For families with children, a year-round subscription at £5 per month is far cheaper than any cable or satellite alternative. Kids' channels, educational content, family movies, and live sports — all covered for every member of the family throughout the year.",
      },
    ],
    faq: [
      {
        q: "Is £5/month really the total cost with no hidden fees?",
        a: "Yes. £60 is the complete cost — you pay once and get 365 days of access. No setup fee, no hardware cost, no installation charge, no hidden extras. What you see is what you pay.",
      },
      {
        q: "What happens when my 12 months expire?",
        a: "Your subscription simply ends. There is no auto-renewal and no surprise charges. Around the time your subscription is ending, we'll send a reminder so you can renew if you wish — on whichever plan suits you at that point.",
      },
      {
        q: "Does the 12-month plan cover all sports seasons?",
        a: "Yes. A 12-month subscription runs from your activation date, covering all sporting events in that period. Football, Formula 1, cricket, tennis, golf, boxing, rugby — if it's broadcast on the channels in our lineup, you'll have access.",
      },
      {
        q: "Can I share my 12-month subscription with family?",
        a: "Yes — our plans support up to 4 simultaneous connections. Your whole household can watch on different devices at the same time. One subscription, multiple screens.",
      },
      {
        q: "What internet speed do I need for reliable 12-month access?",
        a: "We recommend 10Mbps minimum for HD and 25Mbps for 4K. Most UK home broadband easily exceeds this. If you're in a rural area with slower speeds, SD streams work at just 5Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Gareth P.",
        city: "Swansea",
        rating: 5,
        text: "Been on the 12-month plan for two years running. At £5 a month I can't justify going back to Sky. The whole football season covered, all the boxing, F1 — everything. Genuinely the best TV decision I've made.",
      },
      {
        name: "Naomi A.",
        city: "Nottingham",
        rating: 5,
        text: "Signed up as a family and we've never looked back. The kids love the cartoon channels, my husband watches football, and I catch up on dramas. All on different devices at the same time. Amazing at this price.",
      },
      {
        name: "Robert C.",
        city: "Glasgow",
        rating: 5,
        text: "I was spending £85/month on Sky. Now I pay £60 once a year. Same channels, better picture on 4K, and I actually get more content. The setup guide was brilliant — had it running on my Samsung TV in minutes.",
      },
    ],
  },
  {
    slug: "24-month-british-iptv",
    name: "24 Months British IPTV",
    price: 110,
    period: "one-off payment",
    badge: "Best Value",
    highlight: false,
    metaTitle: "24 Months British IPTV — £110 | Best Value | Only £4.58/Month | BritishIPTV",
    metaDescription:
      "24 months of British IPTV for £110 — just £4.58/month. Best value plan. 50,000+ channels, 4K streaming, 7-day catch-up. Two full years with one payment. Instant setup.",
    h1: "24 Months British IPTV — £110 One-Off Payment",
    heroSubtitle:
      "The best value IPTV subscription available. Two full years of premium British IPTV for £110 — just £4.58 per month. One payment, two years of 50,000+ channels, 4K streaming, and zero hassle.",
    whatsappMessage: "iptv-british.com - I'd like to subscribe to the 24 Month British IPTV plan (£110)",
    whoIsItFor: [
      {
        title: "Long-Term IPTV Users",
        description:
          "You've been using IPTV for a while — maybe you're already on a 6 or 12-month plan — and you know it's your permanent TV solution. The 24-month plan is the logical next step: pay once, forget about renewals for two years, and enjoy the lowest per-month cost we offer.",
      },
      {
        title: "Large Households and Extended Families",
        description:
          "Multi-device households with grandparents, parents, and kids all watching different things benefit most from the 24-month plan. You're maximising the value of every device connection over two years, making the already-low monthly cost even more impressive per viewer.",
      },
      {
        title: "Budget-Conscious Streamers",
        description:
          "If your priority is absolute lowest cost without sacrificing quality, 24 months is the plan. At £4.58/month you're getting the same 4K channels, the same 7-day catch-up, the same 24/7 support — for less than the cost of a weekly coffee. Nothing else comes close.",
      },
    ],
    faq: [
      {
        q: "What makes the 24-month plan the best value?",
        a: "At £4.58 per month, it's our lowest per-month price. Compared to the 1-month plan at £15, you save £254.80 over the same two-year period. You also have the convenience of not renewing for two full years — pay once and you're done.",
      },
      {
        q: "Is the service guaranteed to work for the full 24 months?",
        a: "Yes. We have been operating for years with 99.9% uptime. Your subscription is fully supported for the entire 24-month period. If any technical issue arises, our 24/7 support team will resolve it — we have every incentive to keep you happy for the long term.",
      },
      {
        q: "Do I get access to new channels added during my 24 months?",
        a: "Yes. Our channel lineup is continuously updated with new channels and content at no extra cost. When we add new channels or improve the service, existing subscribers benefit automatically — no upgrade needed.",
      },
      {
        q: "What devices will I be able to use over 24 months?",
        a: "Our service uses standard M3U/Xtream Codes format that works with all major IPTV players. As new devices and apps are released over your 24 months, you'll be able to use them. Your login credentials remain valid regardless of which device or app you use.",
      },
      {
        q: "Can I gift the 24-month plan to someone else?",
        a: "Yes. The 24-month plan makes an excellent gift for family members — particularly elderly relatives who want UK TV access. We can configure the subscription and provide a simple setup guide tailored to their specific device.",
      },
    ],
    testimonials: [
      {
        name: "Kevin O.",
        city: "Dublin",
        rating: 5,
        text: "I'm an Irish lad who loves British TV — Premier League, Bake Off, the lot. The 24-month plan means I don't think about renewing for two years. At £4.58 a month it's a no-brainer. Best purchase I've made.",
      },
      {
        name: "Linda M.",
        city: "Newcastle",
        rating: 5,
        text: "I got this for my mum who was paying £70/month for Sky. We set it up on her Smart TV and she hasn't noticed any difference in quality — except she can now watch MORE channels. She's saving over £1,500 over two years.",
      },
      {
        name: "Hassan B.",
        city: "Leicester",
        rating: 5,
        text: "Third time on the 24-month plan. Every time it expires I just renew immediately — it's that good. The Arabic and Asian channel selection is unmatched. My whole family watches together. Never had a single outage.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
