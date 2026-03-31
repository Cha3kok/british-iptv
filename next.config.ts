import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.iptv-british.com",
          },
        ],
        destination: "https://iptv-british.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
