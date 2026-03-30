import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../lib/mdx";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import JsonLd from "../../components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://iptv-british.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical: `https://iptv-british.com/blog/${post.slug}` },
  };
}

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

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold text-white mt-10 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold text-white mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-300 leading-8 text-[1.05rem] mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 text-zinc-300 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 text-zinc-300 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-amber-500 pl-4 my-6 text-zinc-400 italic" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[#1a1a1a] text-amber-400 text-sm px-1.5 py-0.5 rounded font-mono" {...props} />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://iptv-british.com/og-image.svg",
    datePublished: post.date,
    dateModified: post.date,
    url: `https://iptv-british.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "BritishIPTV",
      url: "https://iptv-british.com",
      logo: "https://iptv-british.com/logo.png",
    },
    publisher: {
      "@type": "Organization",
      name: "BritishIPTV",
      url: "https://iptv-british.com",
      logo: {
        "@type": "ImageObject",
        url: "https://iptv-british.com/logo.png",
      },
    },
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://iptv-british.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> All Articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-[#1a1a1a] text-zinc-400 border-white/10"}`}>
              <Tag size={11} /> {post.category}
            </span>
            <span className="flex items-center gap-1 text-zinc-500 text-xs">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="text-zinc-500 text-xs">{formatDate(post.date)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <MDXRemote source={post.content} components={mdxComponents} />

        {/* CTA box */}
        <div className="mt-14 bg-gradient-to-br from-amber-950/40 to-zinc-900 border border-amber-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Ready to try it yourself?</h3>
          <p className="text-zinc-400 text-sm mb-6">
            Get a free 3-hour trial — no credit card required. Our team sets it up for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="https://wa.me/212707711512?text=Hi%2C%20I%27d%20like%20more%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-white font-bold text-lg mb-5">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-[#111111] border border-white/5 hover:border-amber-500/30 rounded-2xl p-5 transition-all"
                >
                  <p className="text-white font-semibold text-sm mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                    {p.title}
                  </p>
                  <p className="text-zinc-500 text-xs line-clamp-2">{p.excerpt}</p>
                  <span className="flex items-center gap-1 text-amber-400 text-xs mt-3 font-medium">
                    Read More <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
