import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

type Section = { heading: string; body: string | string[] };

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalPage({ badge, title, subtitle, lastUpdated, sections }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {badge}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-zinc-400">{subtitle}</p>
          <p className="text-zinc-600 text-xs mt-3">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-lg font-bold text-white mb-3">{s.heading}</h2>
            {Array.isArray(s.body) ? (
              <ul className="space-y-2">
                {s.body.map((item, i) => (
                  <li key={i} className="flex gap-2 text-zinc-300 text-sm leading-7">
                    <span className="text-amber-400 mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-300 text-sm leading-7">{s.body}</p>
            )}
          </div>
        ))}

        <div className="pt-6 border-t border-white/5">
          <p className="text-zinc-500 text-sm">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:goldengateiptv@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
              goldengateiptv@gmail.com
            </a>
          </p>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
