import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/blog/watch-premier-league-without-sky",
        destination: "/blog/watch-live-football-uk-iptv",
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
