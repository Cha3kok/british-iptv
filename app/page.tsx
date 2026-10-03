import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IptvUkGuide from "./components/IptvUkGuide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import { homeFaqs } from "./lib/faqs";
import { SITE_URL } from "./lib/site";

const BASE_URL = SITE_URL;

const TITLE = "IPTV UK 2026 – Best UK IPTV Subscription | British IPTV";
const DESCRIPTION =
  "IPTV UK subscription with 50,000+ live channels and 200,000+ movies & series in 4K. Works on Firestick, Smart TV & phones. Plans from £15, free 3-hour trial.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: BASE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: BASE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const plans = [
  { name: "IPTV UK 1 Month Plan", slug: "1-month-british-iptv", price: "15" },
  { name: "IPTV UK 3 Month Plan", slug: "3-month-british-iptv", price: "35" },
  { name: "IPTV UK 6 Month Plan", slug: "6-month-british-iptv", price: "45" },
  { name: "IPTV UK 12 Month Plan", slug: "12-month-british-iptv", price: "60" },
  { name: "IPTV UK 24 Month Plan", slug: "24-month-british-iptv", price: "110" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "British IPTV",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 512, height: 512 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "goldengateiptv@gmail.com",
        telephone: "+212707711512",
        availableLanguage: "English",
        areaServed: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "British IPTV",
      inLanguage: "en-GB",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#product` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "British IPTV — IPTV UK Subscription",
      description:
        "UK IPTV subscription with 50,000+ live channels, 200,000+ movies and series on demand, 4K streaming, 7-day catch-up and 24/7 support.",
      image: `${BASE_URL}/og-image.png`,
      brand: { "@type": "Brand", name: "British IPTV" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "GBP",
        lowPrice: "15",
        highPrice: "110",
        offerCount: plans.length,
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `${BASE_URL}/product/${p.slug}`,
          seller: { "@id": `${BASE_URL}/#organization` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <OfferBanner />
      <Navbar withBanner />
      <main>
        <Hero />
        <IptvUkGuide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
