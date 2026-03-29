import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "BritishIPTV refund policy — understand your rights and how to request a refund.",
  alternates: { canonical: "https://iptv-british.com/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <LegalPage
      badge="Legal"
      title="Refund Policy"
      subtitle="We want you to be completely satisfied. Here's how our refund process works."
      lastUpdated="1 January 2025"
      sections={[
        {
          heading: "Free Trial First",
          body: "We strongly encourage all new customers to use our free 3-hour trial before purchasing a subscription. This allows you to test stream quality, device compatibility, and channel availability before committing. No credit card is required for the trial.",
        },
        {
          heading: "Refund Eligibility",
          body: [
            "Refunds may be requested within 48 hours of purchase if the service is not working as described.",
            "Refunds will not be issued for change of mind after the service has been activated and used.",
            "Refunds will not be issued if the issue is caused by your internet connection, device incompatibility, or failure to follow setup instructions.",
            "Renewal purchases are non-refundable once activated.",
          ],
        },
        {
          heading: "Service Issues",
          body: "If you experience persistent technical problems that our support team is unable to resolve within 72 hours of reporting, you are entitled to a pro-rated refund for the unused portion of your subscription. We take service quality seriously and will work hard to resolve any issues before a refund is necessary.",
        },
        {
          heading: "How to Request a Refund",
          body: [
            "Contact us at goldengateiptv@gmail.com or via WhatsApp.",
            "Provide your account details and a description of the issue.",
            "Our team will review your request within 24 hours.",
            "Approved refunds are processed within 5–10 business days to your original payment method.",
          ],
        },
        {
          heading: "Chargebacks",
          body: "We encourage you to contact us directly before initiating a chargeback with your bank or payment provider. We will work to resolve any issues quickly and fairly. Fraudulent chargebacks may result in permanent account suspension.",
        },
        {
          heading: "Contact Us",
          body: "For refund requests or billing queries, contact our support team at goldengateiptv@gmail.com or via WhatsApp at +212 707 711 512. We aim to respond within 24 hours.",
        },
      ]}
    />
  );
}
