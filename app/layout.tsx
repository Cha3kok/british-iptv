import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://iptv-british.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BritishIPTV — 50,000+ Channels in 4K",
    template: "%s — BritishIPTV",
  },
  description:
    "Stream 50,000+ live UK and international channels in 4K Ultra HD. No buffering, 7-day catch-up, works on any device. Free 3-hour trial.",
  keywords: [
    "British IPTV",
    "UK IPTV",
    "IPTV service UK",
    "watch UK channels online",
    "best IPTV 2025",
    "Firestick IPTV",
    "Sky Sports IPTV",
    "4K IPTV",
  ],
  authors: [{ name: "BritishIPTV" }],
  creator: "BritishIPTV",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "BritishIPTV",
    title: "BritishIPTV — 50,000+ Channels in 4K",
    description:
      "Stream 50,000+ live UK and international channels in 4K Ultra HD. No buffering, 7-day catch-up, works on any device. Free 3-hour trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BritishIPTV — Stream 50,000+ Channels in 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BritishIPTV — 50,000+ Channels in 4K",
    description:
      "Stream 50,000+ live UK and international channels in 4K Ultra HD. Free 3-hour trial.",
    images: ["/og-image.png"],
    creator: "@iptvbritish",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
