import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/watch-premier-league-without-sky",
        destination: "/blog/watch-live-football-uk-iptv",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-app-firestick-2025",
        destination: "/blog/best-iptv-apps-firestick",
        permanent: true,
      },
      {
        source: "/blog/iptv-setup-guide-smart-tv-2025",
        destination: "/blog/iptv-setup-guide-smart-tv",
        permanent: true,
      },
      {
        source: "/blog/watch-sky-sports-without-sky-subscription",
        destination: "/blog/watch-live-sports-without-satellite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
