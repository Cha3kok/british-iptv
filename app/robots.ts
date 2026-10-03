import type { MetadataRoute } from "next";

// AI answer engines and their crawlers are allowed explicitly so the site can be
// cited in Google AI Overviews, ChatGPT search, Perplexity and Claude.
const AI_CRAWLERS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://www.iptv-british.com/sitemap.xml",
  };
}
