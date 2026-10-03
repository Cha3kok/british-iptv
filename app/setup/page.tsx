import type { Metadata } from "next";
import SetupClient from "./SetupClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

const TITLE = "IPTV Setup Guide: Firestick, Smart TV & More | British IPTV";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Set up IPTV UK in 5 minutes. Step-by-step guides for Amazon Firestick, Smart TV, Android, iPhone, iPad, MAG Box and Windows, plus free setup help.",
  alternates: { canonical: `${SITE_URL}/setup` },
  openGraph: {
    title: TITLE,
    description: "Get your IPTV running in minutes on any device with our step-by-step setup guides.",
    url: `${SITE_URL}/setup`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/setup#webpage`,
      url: `${SITE_URL}/setup`,
      name: TITLE,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Setup Guide", item: `${SITE_URL}/setup` },
      ],
    },
  ],
};

export default function SetupPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main>
        <SetupClient />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
