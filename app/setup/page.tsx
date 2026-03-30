import type { Metadata } from "next";
import SetupClient from "./SetupClient";

export const metadata: Metadata = {
  title: "Easy IPTV Setup Guide — Firestick, Smart TV, Android | British IPTV",
  description:
    "Get British IPTV running in 5 minutes. Step-by-step setup guides for Amazon Firestick, Smart TV, Android, iPhone, MAG Box, Windows, and Mac. 24/7 support.",
  alternates: { canonical: "https://iptv-british.com/setup" },
  openGraph: {
    title: "Easy IPTV Setup Guide — Firestick, Smart TV, Android | British IPTV",
    description: "Get your IPTV running in minutes on any device with our step-by-step setup guides.",
    url: "https://iptv-british.com/setup",
  },
};

export default function SetupPage() {
  return <SetupClient />;
}
