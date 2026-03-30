import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — British IPTV | IPTV Subscription Terms",
  description: "Read British IPTV's terms and conditions. Understand your rights, responsibilities, and acceptable use policy for our IPTV streaming service.",
  alternates: { canonical: "https://iptv-british.com/terms-of-service" },
  openGraph: {
    title: "Terms of Service — British IPTV",
    description: "Terms and conditions for British IPTV service.",
    url: "https://iptv-british.com/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our service."
      lastUpdated="1 January 2025"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "By subscribing to or using the BritishIPTV service, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.",
        },
        {
          heading: "2. Service Description",
          body: "BritishIPTV provides an Internet Protocol Television (IPTV) streaming service giving access to live TV channels, video-on-demand content, and catch-up television via the internet. The service is provided on a subscription basis.",
        },
        {
          heading: "3. Acceptable Use",
          body: [
            "The service is for personal, non-commercial use only.",
            "You may not resell, redistribute, or sublicense access to the service without written permission.",
            "You may not use the service to record, copy, or distribute copyrighted content.",
            "You may not share your account credentials with users outside your household.",
            "You may not attempt to circumvent any technical protection measures.",
          ],
        },
        {
          heading: "4. Subscriptions and Payment",
          body: "Subscriptions are billed in advance for the chosen period (1, 3, or 12 months). All payments are non-refundable except as described in our Refund Policy. We reserve the right to change pricing with 30 days' notice.",
        },
        {
          heading: "5. Service Availability",
          body: "We aim to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance, force majeure events, or circumstances beyond our control may cause temporary interruptions. We are not liable for service outages beyond our reasonable control.",
        },
        {
          heading: "6. Account Security",
          body: "You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately if you suspect unauthorised use of your account. We are not liable for losses resulting from unauthorised account access.",
        },
        {
          heading: "7. Intellectual Property",
          body: "All content streamed through the service is owned by the respective broadcasters and rights holders. BritishIPTV makes no claim of ownership over third-party content. The BritishIPTV brand, logo, and website content are our intellectual property.",
        },
        {
          heading: "8. Limitation of Liability",
          body: "To the maximum extent permitted by law, BritishIPTV shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability to you shall not exceed the amount paid in the 30 days preceding any claim.",
        },
        {
          heading: "9. Termination",
          body: "We reserve the right to suspend or terminate your account without notice if you breach these terms. You may cancel your subscription at any time through our support channels.",
        },
        {
          heading: "10. Governing Law",
          body: "These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
        },
      ]}
    />
  );
}
