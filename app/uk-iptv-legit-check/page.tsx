import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

// Six yes/no checks applied to the UK IPTV providers on Google UK page one, from each provider's own site
// (read 7 November 2026). Disclosed: this site and IPTV United Kingdom (iptvunitedkingdom.co) are run by the same team.

const URL = `${SITE_URL}/uk-iptv-legit-check`;
const CHECKED = "7 November 2026";
const title = "Is It Legit? 6 Checks on UK IPTV Providers (2026)";
const description =
  "IPTV Kingdom, BritCast, GB IPTV, BenTV Pro, Televo IPTV and IPTV United Kingdom put through six checks: refund window, trial, payment protection, consistent terms, connections, renewal.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: URL },
  openGraph: { title, description, url: URL, type: "article" },
};

type Answer = { v: "Yes" | "No" | "Unclear"; note: string };
type Row = { name: string; site: string; href?: string; checks: Answer[] };

const CHECKS = [
  "Written refund window",
  "Free trial clearly offered",
  "Card or PayPal accepted",
  "Same terms on every page",
  "Connections per plan stated",
  "Auto-renewal stated",
];

const ROWS: Row[] = [
  {
    name: "IPTV Kingdom",
    site: "iptvkingdom.net",
    href: "https://iptvunitedkingdom.co/best-iptv-uk/compare/iptv-kingdom",
    checks: [
      { v: "Yes", note: "3 days, first-time subscriptions only; not if you used the free trial first" },
      { v: "Yes", note: "24 hours on WhatsApp" },
      { v: "Yes", note: "Card, plus bank transfer and crypto" },
      { v: "No", note: "A homepage testimonial mentions a 30-day guarantee; the refund policy says 3 days" },
      { v: "No", note: "Not stated" },
      { v: "Yes", note: "No automatic renewal" },
    ],
  },
  {
    name: "BritCast",
    site: "britcast.co.uk",
    href: "https://iptvunitedkingdom.co/best-iptv-uk/compare/britcast",
    checks: [
      { v: "Yes", note: "7 days, for faults it cannot fix" },
      { v: "Unclear", note: "Named on the refund page only, with no length or steps" },
      { v: "Yes", note: "Card, PayPal, bank transfer" },
      { v: "No", note: "Refund page gives 48 hours to fix a fault in one section, 24 in another" },
      { v: "Yes", note: "1 at a time on Standard" },
      { v: "Yes", note: "Manual renewal" },
    ],
  },
  {
    name: "GB IPTV",
    site: "gbiptv.uk",
    href: "https://iptvunitedkingdom.co/best-iptv-uk/compare/gb-iptv",
    checks: [
      { v: "Unclear", note: "Homepage: 24-hour money-back. Refund page: activation failures only" },
      { v: "Yes", note: "24 hours" },
      { v: "Yes", note: "PayPal, Visa, Mastercard" },
      { v: "No", note: "Refund terms differ between homepage and refund page" },
      { v: "Yes", note: "1, or 2 on a £98 yearly plan" },
      { v: "No", note: "Not stated" },
    ],
  },
  {
    name: "BenTV Pro",
    site: "bentvpro.uk",
    href: "https://iptvunitedkingdom.co/best-iptv-uk/compare/bentv-pro",
    checks: [
      { v: "Yes", note: "Full refund within 72 hours; refunds take 20 to 90 working days" },
      { v: "Yes", note: "4 hours" },
      { v: "Yes", note: "PayPal (cards through PayPal)" },
      { v: "No", note: "Three price lists for the same plans (12 months £58, £96 or £140)" },
      { v: "No", note: "Device tabs with no prices" },
      { v: "No", note: "Not stated" },
    ],
  },
  {
    name: "Televo IPTV",
    site: "keviniptv.me",
    href: "https://iptvunitedkingdom.co/best-iptv-uk/compare/televo-iptv",
    checks: [
      { v: "No", note: "Refunds \"reviewed individually\", no number of days" },
      { v: "Yes", note: "72 hours, no card" },
      { v: "Yes", note: "Card, PayPal, crypto" },
      { v: "Yes", note: "No contradictions on the pages we read" },
      { v: "No", note: "Not stated; more screens on request" },
      { v: "Yes", note: "No automatic renewal" },
    ],
  },
  {
    name: "IPTV United Kingdom (our sister site)",
    site: "iptvunitedkingdom.co",
    checks: [
      { v: "Yes", note: "7 days if it does not work on your device and support cannot fix it" },
      { v: "Yes", note: "24 hours on WhatsApp" },
      { v: "Yes", note: "Visa, Mastercard, plus bank transfer and crypto" },
      { v: "Yes", note: "7 days on every page we checked" },
      { v: "Yes", note: "1 per plan" },
      { v: "Yes", note: "No automatic renewal" },
    ],
  },
];

const faq = [
  {
    q: "How can I tell if a UK IPTV provider is legit?",
    a: "Look for a written refund window, a free trial you can take without losing the refund, a payment method you can dispute (card or PayPal), and terms that say the same thing on every page. Then test it on your own TV on a busy evening.",
  },
  {
    q: "Why are there no star ratings?",
    a: "We have not used the other services, and we run IPTV United Kingdom ourselves, so any score from us would not be independent. These checks only record what each provider publishes.",
  },
  {
    q: "Which provider passed the most checks?",
    a: "Count the Yes answers in the table for yourself. A provider with an Unclear or No is not automatically bad: it means you should ask that question before you pay and keep the answer in writing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": `${URL}#webpage`,
      url: URL,
      name: title,
      description,
      inLanguage: "en-GB",
      datePublished: "2026-11-07",
      dateModified: "2026-11-07",
      mentions: ROWS.map((r) => ({ "@type": "Organization", name: r.name.replace(" (our sister site)", ""), url: `https://${r.site}/` })),
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "UK IPTV legit check", item: URL },
      ],
    },
  ],
};

const badge = (v: Answer["v"]) =>
  v === "Yes" ? "bg-emerald-500/15 text-emerald-300" : v === "No" ? "bg-rose-500/15 text-rose-300" : "bg-amber-500/15 text-amber-300";

export default function LegitCheckPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={schema} />
      <Navbar />

      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Before you pay</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Is it legit? Six checks on UK IPTV providers</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Six questions anyone can answer from a provider&apos;s own website before paying. We answered them for the providers on the first page
            of Google UK, from their sites on {CHECKED}.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <p className="rounded-2xl border border-brand-400/30 bg-ink-800 p-5 text-zinc-300 leading-7">
          <strong className="text-white">Who wrote this:</strong> British IPTV and{" "}
          <a href="https://iptvunitedkingdom.co/best-iptv-uk" className="text-brand-300 underline">IPTV United Kingdom</a> are run by the same team,
          so read its row as the seller describing itself. We have not used the other services and give no ratings. Every answer is what the
          provider publishes.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The six checks</h2>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-300 leading-7">
            <li><strong className="text-white">Written refund window:</strong> a number of days, not &quot;case by case&quot;.</li>
            <li><strong className="text-white">Free trial clearly offered:</strong> how long it is and how to get it, on the plans page.</li>
            <li><strong className="text-white">Card or PayPal accepted:</strong> a payment you can dispute if the service never works.</li>
            <li><strong className="text-white">Same terms on every page:</strong> the homepage, plans and refund policy agree.</li>
            <li><strong className="text-white">Connections per plan stated:</strong> you know how many screens you are paying for.</li>
            <li><strong className="text-white">Auto-renewal stated:</strong> you know whether you will be charged again.</li>
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Results by provider</h2>
          {ROWS.map((r) => (
            <div key={r.site} className="rounded-2xl border border-white/5 bg-ink-800 p-5 sm:p-6">
              <h3 className="text-xl font-bold">
                {r.name} <span className="text-zinc-500 text-sm font-normal">({r.site})</span>
              </h3>
              <ul className="mt-4 space-y-3">
                {r.checks.map((c, i) => (
                  <li key={CHECKS[i]} className="flex gap-3 text-sm leading-6">
                    <span className={`shrink-0 h-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge(c.v)}`}>{c.v}</span>
                    <span className="text-zinc-300">
                      <strong className="text-white">{CHECKS[i]}:</strong> {c.note}
                    </span>
                  </li>
                ))}
              </ul>
              {r.href ? (
                <p className="mt-4 text-sm">
                  <a href={r.href} className="text-brand-300 underline">
                    {r.name} vs IPTV United Kingdom: full side-by-side
                  </a>
                </p>
              ) : (
                <p className="mt-4 text-sm">
                  <a href="https://iptvunitedkingdom.co/best-iptv-uk/iptv-subscription-12-months-uk" className="text-brand-300 underline">
                    IPTV United Kingdom 12-month plan (£49)
                  </a>
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What to do with an Unclear or No</h2>
          <p className="text-zinc-300 leading-7">
            Message the provider and ask the exact question, for example &quot;Is the refund window 24 hours or only for activation failures?&quot;
            Keep the reply as a screenshot. If they will not answer in writing, that is your answer. The full tables, prices and source pages for
            each provider are on the{" "}
            <a href="https://iptvunitedkingdom.co/best-iptv-uk/compare" className="text-brand-300 underline">UK IPTV comparison pages</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Questions</h2>
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="text-zinc-300 leading-7 mt-1">{f.a}</p>
            </div>
          ))}
        </section>

        <p className="text-zinc-500 text-sm leading-6">
          Sources, read on {CHECKED}: iptvkingdom.net, britcast.co.uk, gbiptv.uk, bentvpro.uk and keviniptv.me (plans, free trial and refund
          policy pages). Terms change, so check the provider&apos;s own site before you order.
        </p>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
