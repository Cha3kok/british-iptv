import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Tv, Users, Globe, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "About British IPTV — Premium UK IPTV Service Provider",
  description:
    "Discover British IPTV: trusted by 25,000+ subscribers. We deliver 50,000+ live channels, 4K streaming, and 99.9% uptime. Learn our mission and why UK families choose us.",
  alternates: { canonical: "https://iptv-british.com/about" },
  openGraph: {
    title: "About British IPTV — Premium UK IPTV Service",
    description: "25,000+ subscribers trust us for 50,000+ live channels, 4K streaming, and exceptional support.",
    url: "https://iptv-british.com/about",
  },
};

const stats = [
  { icon: Users, value: "25,000+", label: "Active Subscribers" },
  { icon: Tv, value: "50,000+", label: "Live Channels" },
  { icon: Globe, value: "Worldwide", label: "Available In" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About British IPTV",
  url: "https://iptv-british.com/about",
  description:
    "British IPTV is a premium IPTV provider offering 50,000+ live channels in 4K quality.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={aboutSchema} />
      <Navbar />

      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Britain&apos;s most trusted IPTV provider
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            We started British IPTV to give UK viewers a better, more affordable alternative to expensive satellite TV — and we&apos;ve been growing ever since.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-center">
              <Icon size={22} className="text-amber-400 mx-auto mb-3" />
              <p className="text-white font-bold text-2xl mb-1">{value}</p>
              <p className="text-zinc-400 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Our Story</h2>
          <p className="text-zinc-300 leading-8">
            British IPTV was founded with a simple mission: make great TV accessible and affordable for everyone. We watched as satellite TV prices climbed year after year while the value offered to viewers stayed flat. Long contracts, expensive hardware, and a limited channel selection — that wasn&apos;t good enough.
          </p>
          <p className="text-zinc-300 leading-8">
            We built a service from the ground up with a focus on reliability, picture quality, and value. Starting with a small base of UK viewers, we&apos;ve grown to serve over 25,000 active subscribers across the UK and worldwide.
          </p>
          <p className="text-zinc-300 leading-8">
            Our infrastructure spans multiple data centres with automatic failover, ensuring you get a smooth, uninterrupted experience. We continuously add new channels, improve our apps support, and expand our VOD library based on customer feedback.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-zinc-300 leading-8">
            To give every household in the UK access to world-class television at a fair price — with no contracts, no hidden fees, and no compromise on quality. We believe great TV should be for everyone, not just those who can afford a premium satellite package.
          </p>
        </div>

        {/* Why us */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Why Customers Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Reliability First", "Our 99.9% uptime target isn't a marketing claim — it's a commitment backed by redundant server infrastructure."],
              ["24/7 Real Support", "Every support message is answered by a real person. No bots, no ticket queues. We're available on WhatsApp around the clock."],
              ["No Long Contracts", "Monthly, quarterly, or annual — your choice. Cancel anytime without penalty."],
              ["Constant Improvement", "We release updates, add channels, and improve performance every month based on what our customers tell us."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#111111] border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold mb-2">{title}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-amber-950/40 to-zinc-900 border border-amber-900/30 rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Ready to join us?</h3>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto">
            Try the service free for 3 hours — no credit card required. See exactly why 25,000+ customers chose us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Start Free Trial
            </a>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
