import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { products } from "../lib/products";

export const metadata: Metadata = {
  title: "British IPTV Plans & Pricing — From £15 | British IPTV",
  description:
    "Compare all British IPTV subscription plans from £15. 50,000+ channels, 4K Ultra HD, 7-day catch-up. Choose 1, 3, 6, 12, or 24 months. No contract. Instant activation.",
  alternates: { canonical: "https://iptv-british.com/product" },
  openGraph: {
    title: "British IPTV Plans & Pricing — From £15 | British IPTV",
    description:
      "50,000+ channels, 4K streaming, 7-day catch-up. Plans from £15. Compare 1, 3, 6, 12 and 24-month British IPTV subscriptions.",
    url: "https://iptv-british.com/product",
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "British IPTV Subscription",
  description:
    "Premium British IPTV subscription with 50,000+ live channels, 200,000+ VODs, 4K Ultra HD quality, 7-day catch-up TV, and 24/7 support.",
  image: "https://iptv-british.com/og-image.svg",
  brand: { "@type": "Brand", name: "British IPTV" },
  offers: products.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.toString(),
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: `https://iptv-british.com/product/${p.slug}`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "89",
    bestRating: "5",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://iptv-british.com" },
    { "@type": "ListItem", position: 2, name: "Product", item: "https://iptv-british.com/product" },
  ],
};

const TRIAL_LINK = "https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial";

const planFeatures = [
  "50,000+ Live Channels",
  "4K Ultra HD Streaming",
  "7-Day Catch-Up TV",
  "24/7 Support",
];

const trustPoints = [
  {
    icon: "📡",
    title: "50,000+ Live Channels",
    description:
      "UK, US, sports, news, kids, and international channels — all in one subscription. BBC, ITV, Sky Sports, TNT Sports and thousands more.",
  },
  {
    icon: "⚡",
    title: "Anti-Freeze™ Technology",
    description:
      "Our 9.8-rated CDN infrastructure delivers smooth, buffer-free streaming even during the biggest live events and peak viewing hours.",
  },
  {
    icon: "🔒",
    title: "7-Day Refund Guarantee",
    description:
      "Not happy within the first 7 days? We'll refund you, no questions asked. We're that confident in the quality of our service.",
  },
  {
    icon: "🌍",
    title: "Works Everywhere",
    description:
      "Use your subscription anywhere in the world. Perfect for UK expats abroad or anyone travelling. No VPN required.",
  },
];

const monthlyEquivalents: Record<string, string> = {
  "1-month-british-iptv": "£15.00/mo",
  "3-month-british-iptv": "£11.67/mo",
  "6-month-british-iptv": "£7.50/mo",
  "12-month-british-iptv": "£5.00/mo",
  "24-month-british-iptv": "£4.58/mo",
};

const devicesBySlug: Record<string, string> = {
  "1-month-british-iptv": "Up to 4",
  "3-month-british-iptv": "Up to 4",
  "6-month-british-iptv": "Up to 4",
  "12-month-british-iptv": "Up to 4",
  "24-month-british-iptv": "Up to 4",
};

export default function ProductCatalogPage() {
  return (
    <>
      <JsonLd data={catalogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="bg-[#0a0a0a] pt-[100px]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="text-zinc-500 text-sm flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-300">Product</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 text-center px-4">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing Plans
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your British IPTV Plan
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            All plans include the same premium features — 50,000+ channels, 4K quality, 7-day catch-up. The only difference is how long you subscribe and how much you save.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-zinc-400">
            <span>⭐ 4.9 / 2,847 reviews</span>
            <span className="text-zinc-700">|</span>
            <span>✅ No contracts</span>
            <span className="text-zinc-700">|</span>
            <span>🔒 7-day refund</span>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const waLink = `https://wa.me/212707711512?text=${encodeURIComponent(product.whatsappMessage)}`;
                return (
                  <div
                    key={product.slug}
                    className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                      product.highlight
                        ? "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 shadow-lg shadow-amber-500/20"
                        : "bg-[#111111] border-white/5 hover:border-amber-500/30"
                    }`}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap ${
                          product.highlight
                            ? "bg-white text-amber-600"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Plan name & price */}
                    <div className="mb-6">
                      <h2
                        className={`text-lg font-bold mb-1 ${
                          product.highlight ? "text-white" : "text-white"
                        }`}
                      >
                        {product.name}
                      </h2>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-4xl font-extrabold ${
                            product.highlight ? "text-white" : "text-white"
                          }`}
                        >
                          £{product.price}
                        </span>
                        <span
                          className={`text-sm ${
                            product.highlight ? "text-amber-100" : "text-zinc-400"
                          }`}
                        >
                          {product.period}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-1 font-medium ${
                          product.highlight ? "text-amber-100" : "text-amber-400"
                        }`}
                      >
                        {monthlyEquivalents[product.slug]}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                      {planFeatures.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-sm">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              product.highlight
                                ? "bg-white/25"
                                : "bg-amber-500/15"
                            }`}
                          >
                            <Check
                              size={11}
                              className={product.highlight ? "text-white" : "text-amber-400"}
                            />
                          </span>
                          <span
                            className={product.highlight ? "text-amber-50" : "text-zinc-300"}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={`/product/${product.slug}`}
                        className={`text-center text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                          product.highlight
                            ? "bg-white text-amber-600 hover:bg-amber-50"
                            : "bg-amber-500 hover:bg-amber-400 text-white"
                        }`}
                      >
                        View Plan
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
                          product.highlight
                            ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                            : "border border-white/10 hover:border-amber-500/40 text-zinc-300 hover:text-white"
                        }`}
                      >
                        Subscribe Now
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-[#0d0d0d] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Compare Plans
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                All plans, side by side
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-zinc-400 text-sm font-medium py-3 pr-6 w-1/3">
                      Feature
                    </th>
                    {products.map((p) => (
                      <th
                        key={p.slug}
                        className={`text-center text-sm font-semibold py-3 px-3 ${
                          p.highlight ? "text-amber-400" : "text-white"
                        }`}
                      >
                        {p.badge && (
                          <span className="block text-[10px] text-amber-400 font-bold uppercase mb-0.5">
                            {p.badge}
                          </span>
                        )}
                        {p.name.replace(" British IPTV", "")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Price</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className={`text-center text-sm font-bold py-3.5 px-3 ${
                          p.highlight ? "text-amber-400" : "text-white"
                        }`}
                      >
                        £{p.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Duration</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className="text-center text-sm text-zinc-300 py-3.5 px-3"
                      >
                        {p.name.split(" ").slice(0, 2).join(" ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Monthly equivalent</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className={`text-center text-sm font-semibold py-3.5 px-3 ${
                          p.highlight ? "text-amber-400" : "text-amber-400/80"
                        }`}
                      >
                        {monthlyEquivalents[p.slug]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Devices</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className="text-center text-sm text-zinc-300 py-3.5 px-3"
                      >
                        {devicesBySlug[p.slug]}
                      </td>
                    ))}
                  </tr>
                  {[
                    "50,000+ Channels",
                    "4K Ultra HD",
                    "7-Day Catch-Up",
                    "200,000+ VODs",
                    "EPG Guide",
                    "24/7 Support",
                  ].map((feature) => (
                    <tr key={feature}>
                      <td className="py-3.5 pr-6 text-zinc-400 text-sm">{feature}</td>
                      {products.map((p) => (
                        <td key={p.slug} className="text-center py-3.5 px-3">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-500/15 rounded-full">
                            <Check size={11} className="text-amber-400" />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why British IPTV */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Why Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Why British IPTV?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-[#111111] border border-white/5 hover:border-amber-500/20 rounded-2xl p-7 transition-all"
                >
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{point.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Not Sure Yet?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Try British IPTV free for 3 hours
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              No credit card. No commitment. Just message us on WhatsApp and we&apos;ll activate your free trial in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Start Free 3-Hour Trial
              </a>
              <Link
                href="/product/6-month-british-iptv"
                className="border border-white/15 hover:border-amber-500/40 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                View Most Popular Plan
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
