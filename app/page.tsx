import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "British IPTV",
  url: "https://iptv-british.com",
  logo: "https://iptv-british.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "goldengateiptv@gmail.com",
    availableLanguage: "English",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "British IPTV Subscription",
  description:
    "Stream 50,000+ live UK and international channels in 4K Ultra HD. No buffering, 7-day catch-up, works on any device.",
  brand: { "@type": "Brand", name: "British IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    offers: [
      { "@type": "Offer", name: "1 Month Plan", price: "15", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "3 Month Plan", price: "35", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "6 Month Plan", price: "45", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "12 Month Plan", price: "60", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "24 Month Plan", price: "110", availability: "https://schema.org/InStock" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "89",
    bestRating: "5",
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
      name: "Pricing",
      item: "https://iptv-british.com#pricing",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Setup",
      item: "https://iptv-british.com#setup",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What devices does British IPTV work on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our service works on Smart TVs, Amazon Firestick, Android TV boxes, Android phones, iPhones, iPads, MAG boxes, and any IPTV player.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a free 3-hour trial. No credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I watch UK channels from abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our service works worldwide. You can watch all UK channels no matter where you are — no VPN required.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <OfferBanner />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Devices />
      <Setup />
      <Channels />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
