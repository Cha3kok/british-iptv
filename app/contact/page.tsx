import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Mail, MessageCircle, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Contact British IPTV Support — 24/7 WhatsApp & Email",
  description:
    "Get instant help from British IPTV support. Available 24/7 via WhatsApp or email for setup, billing, and technical issues. Typical response: under 5 minutes.",
  alternates: { canonical: "https://iptv-british.com/contact" },
  openGraph: {
    title: "Contact British IPTV — 24/7 Support",
    description: "Reach our support team instantly via WhatsApp or email.",
    url: "https://iptv-british.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact British IPTV",
  url: "https://iptv-british.com/contact",
  description: "Contact British IPTV support via WhatsApp or email.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "The fastest way to reach us. Get a response within minutes, day or night.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/212707711512?text=Hi%2C%20I%27d%20like%20some%20help%20with%20British%20IPTV",
    highlight: true,
    detail: "+212 707 711 512",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For billing questions, refund requests, or detailed technical issues.",
    action: "Send an Email",
    href: "mailto:goldengateiptv@gmail.com",
    highlight: false,
    detail: "goldengateiptv@gmail.com",
  },
];

const faqs = [
  { q: "How do I get my free trial?", a: "Message us on WhatsApp — we'll activate your trial in minutes." },
  { q: "I forgot my login details.", a: "Contact us via WhatsApp or email and we'll retrieve your credentials." },
  { q: "My streams are buffering.", a: "Check our setup guide, then contact support if the issue persists." },
  { q: "How do I renew my subscription?", a: "Contact us before your subscription expires and we'll sort the renewal." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={contactSchema} />
      <Navbar />

      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">We&apos;re here to help</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Real support from real people — available 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Availability banner */}
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-3.5">
          <Clock size={16} className="text-green-400 flex-shrink-0" />
          <p className="text-green-300 text-sm">
            <span className="font-semibold">Support is currently available.</span>{" "}
            Average response time: under 5 minutes on WhatsApp.
          </p>
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((ch) => (
            <div
              key={ch.title}
              className={`rounded-2xl p-7 border flex flex-col gap-4 ${
                ch.highlight
                  ? "bg-[#25D366]/10 border-[#25D366]/30"
                  : "bg-[#111111] border-white/5"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${ch.highlight ? "bg-[#25D366]/20" : "bg-[#1a1a1a]"}`}>
                <ch.icon size={20} className={ch.highlight ? "text-[#25D366]" : "text-amber-400"} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg mb-1">{ch.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-1">{ch.description}</p>
                <p className="text-zinc-500 text-xs">{ch.detail}</p>
              </div>
              <a
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-auto self-start font-semibold text-sm px-5 py-2.5 rounded-full transition-colors ${
                  ch.highlight
                    ? "bg-[#25D366] hover:bg-[#20bd5a] text-white"
                    : "bg-amber-500 hover:bg-amber-400 text-white"
                }`}
              >
                {ch.action}
              </a>
            </div>
          ))}
        </div>

        {/* Common questions */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Quick Answers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#111111] border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-5">
            More questions?{" "}
            <Link href="/#faq" className="text-amber-400 hover:text-amber-300 transition-colors">
              See our full FAQ
            </Link>
            {" "}or{" "}
            <Link href="/setup" className="text-amber-400 hover:text-amber-300 transition-colors">
              visit our setup guide
            </Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
