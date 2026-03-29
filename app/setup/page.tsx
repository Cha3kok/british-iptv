import type { Metadata } from "next";
import SetupClient from "./SetupClient";

export const metadata: Metadata = {
  title: "Setup Guide — BritishIPTV",
  description:
    "Step-by-step IPTV setup guides for Amazon Firestick, Smart TV, Android, iPhone, MAG Box, Windows and Mac. Get started in under 5 minutes.",
  openGraph: {
    title: "Setup Guide — BritishIPTV",
    description: "Get your IPTV running in minutes on any device.",
    url: "https://iptv-british.com/setup",
  },
};

export default function SetupPage() {
  return <SetupClient />;
}
