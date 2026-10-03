import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Motion from "./components/Motion";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

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
    default: "IPTV UK – Best UK IPTV Subscription | British IPTV",
    template: "%s — British IPTV",
  },
  description:
    "IPTV UK subscription with 50,000+ live channels and 200,000+ movies & series in 4K. Works on Firestick, Smart TV & phones. Free 3-hour trial.",
  keywords: [
    "IPTV UK",
    "UK IPTV",
    "British IPTV",
    "IPTV subscription UK",
    "best IPTV UK",
    "Firestick IPTV UK",
    "4K IPTV UK",
  ],
  authors: [{ name: "British IPTV" }],
  creator: "British IPTV",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "British IPTV",
    title: "IPTV UK – Best UK IPTV Subscription | British IPTV",
    description:
      "IPTV UK subscription with 50,000+ live channels and 200,000+ movies & series in 4K. Free 3-hour trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK – Best UK IPTV Subscription | British IPTV",
    description:
      "IPTV UK subscription with 50,000+ live channels and 200,000+ movies & series in 4K. Free 3-hour trial.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Motion />
      </body>
    </html>
  );
}
