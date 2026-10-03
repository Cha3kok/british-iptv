import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "../../lib/mdx";
import { getImageDims } from "../../lib/image-dims";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import JsonLd from "../../components/JsonLd";

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? `${post.title} — British IPTV`;
  const description = post.description ?? post.excerpt;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url: `https://www.iptv-british.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    alternates: { canonical: `https://www.iptv-british.com/blog/${post.slug}` },
  };
}

const categoryColors: Record<string, string> = {
  Guides: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Beginners: "bg-green-500/15 text-green-400 border-green-500/20",
  Troubleshooting: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  Sports: "bg-brand-400/15 text-brand-400 border-brand-400/20",
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
  img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const dims = typeof src === "string" ? getImageDims(src) : null;
    if (!dims || typeof src !== "string") {
      // eslint-disable-next-line @next/next/no-img-element
      return <img className="w-full rounded-2xl my-8 object-cover max-h-96" src={src as string} alt={alt ?? ""} loading="lazy" />;
    }
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={dims.width}
        height={dims.height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="w-full h-auto rounded-2xl my-8 object-cover max-h-96"
      />
    );
  },
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
    <a className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-brand-500 pl-4 my-6 text-zinc-400 italic" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-ink-700 text-brand-400 text-sm px-1.5 py-0.5 rounded font-mono" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/10">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-white/5" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left py-3 px-4 text-brand-400 font-semibold text-sm whitespace-nowrap" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-3 px-4 text-zinc-300 text-sm" {...props} />
  ),
  CTA: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <div className="my-8 bg-gradient-to-br from-brand-950/40 to-ink-800 border border-brand-900/30 rounded-2xl p-6 text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
      >
        {children}
      </a>
    </div>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  // Same-category posts first, then the next posts in the list (wrapping round),
  // so every guide receives links from several others — no orphans.
  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const others = [...allPosts.slice(idx + 1), ...allPosts.slice(0, idx)];
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description ?? post.excerpt,
    image: `https://www.iptv-british.com${post.coverImage ?? "/og-image.png"}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url: `https://www.iptv-british.com/blog/${post.slug}`,
    inLanguage: "en-GB",
    mainEntityOfPage: `https://www.iptv-british.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "British IPTV",
      url: "https://www.iptv-british.com",
    },
    publisher: {
      "@type": "Organization",
      name: "British IPTV",
      url: "https://www.iptv-british.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.iptv-british.com/logo.png",
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
        item: "https://www.iptv-british.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.iptv-british.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.iptv-british.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Hero */}
      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> All Articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-ink-700 text-zinc-400 border-white/10"}`}>
              <Tag size={11} /> {post.category}
            </span>
            <span className="flex items-center gap-1 text-zinc-500 text-xs">
              <Clock size={11} /> {post.readTime}
            </span>
            <time dateTime={post.updated ?? post.date} className="text-zinc-500 text-xs">
              {post.updated ? `Updated ${formatDate(post.updated)}` : formatDate(post.date)}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      {/* Cover image */}
      {post.coverImage && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <Image
            src={post.coverImage}
            alt={post.coverAlt ?? post.title}
            width={getImageDims(post.coverImage)?.width ?? 1200}
            height={getImageDims(post.coverImage)?.height ?? 630}
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="w-full h-auto rounded-2xl object-cover max-h-96"
          />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {post.summary && (
          <aside className="mb-10 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6" aria-label="Quick answer">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Quick answer</p>
            <p className="text-base leading-relaxed text-zinc-200">{post.summary}</p>
          </aside>
        )}
        <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />

        {/* CTA box */}
        <div className="mt-14 bg-gradient-to-br from-brand-950/40 to-ink-800 border border-brand-900/30 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Ready to try it yourself?</p>
          <p className="text-zinc-400 text-sm mb-6">
            Get a free 3-hour trial — no credit card required. Our team sets it up for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptv-british.com%20-%20Free%203-Hour%20Trial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="https://wa.me/212707711512?text=Hi%2C%20I%27d%20like%20more%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e7a52] hover:bg-[#0b6a47] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-white font-bold text-lg mb-5">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-ink-800 border border-white/5 hover:border-brand-500/30 rounded-2xl p-5 transition-all"
                >
                  <p className="text-white font-semibold text-sm mb-2 group-hover:text-brand-400 transition-colors leading-snug">
                    {p.title}
                  </p>
                  <p className="text-zinc-500 text-xs line-clamp-2">{p.excerpt}</p>
                  <span className="flex items-center gap-1 text-brand-400 text-xs mt-3 font-medium">
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
