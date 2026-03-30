import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { getAllPosts } from "../lib/mdx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "IPTV guides, tips, troubleshooting and comparisons. Learn how to get the most from your British IPTV subscription.",
  openGraph: {
    title: "Blog — British IPTV",
    description: "IPTV guides, tips, troubleshooting and comparisons.",
    url: "https://iptv-british.com/blog",
  },
  alternates: { canonical: "https://iptv-british.com/blog" },
};

const categoryColors: Record<string, string> = {
  Guides: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Beginners: "bg-green-500/15 text-green-400 border-green-500/20",
  Troubleshooting: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  Sports: "bg-amber-400/15 text-amber-400 border-amber-400/20",
  Comparisons: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://iptv-british.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://iptv-british.com/blog",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "British IPTV Blog",
    description:
      "IPTV guides, tips, troubleshooting and comparisons. Learn how to get the most from your British IPTV subscription.",
    url: "https://iptv-british.com/blog",
    mainEntity: posts.map((post) => ({
      "@type": "Article",
      headline: post.title,
      url: `https://iptv-british.com/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <Navbar />

      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            IPTV Guides & Tips
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Everything you need to get the most from your IPTV service — setup guides, troubleshooting, app reviews, and more.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-[#111111] border border-white/5 hover:border-amber-500/30 rounded-2xl p-8 mb-10 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-[#1a1a1a] text-zinc-400 border-white/10"}`}>
              <Tag size={11} /> {featured.category}
            </span>
            <span className="text-zinc-500 text-xs">Featured</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
            {featured.title}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-zinc-500 text-xs">
              <span>{formatDate(featured.date)}</span>
              <span className="flex items-center gap-1">
                <Clock size={11} /> {featured.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
              Read More <ArrowRight size={14} />
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[#111111] border border-white/5 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <span className={`self-start inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border mb-4 ${categoryColors[post.category] ?? "bg-[#1a1a1a] text-zinc-400 border-white/10"}`}>
                <Tag size={11} /> {post.category}
              </span>
              <h2 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <ArrowRight size={14} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
