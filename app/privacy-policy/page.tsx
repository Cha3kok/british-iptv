import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how BritishIPTV collects, uses, and protects your personal data.",
  alternates: { canonical: "https://iptv-british.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="1 January 2025"
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "Account information: name and email address when you register or contact us.",
            "Payment information: processed securely through our payment providers. We do not store card details.",
            "Device and connection information: IP address, device type, and app version for troubleshooting.",
            "Usage data: channels viewed and connection logs, used to improve service quality.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "To provide and maintain your IPTV subscription.",
            "To send you service-related communications (account activation, renewals).",
            "To troubleshoot technical issues and improve our service.",
            "To comply with legal obligations.",
          ],
        },
        {
          heading: "3. Data Sharing",
          body: "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our service (e.g. payment processors, hosting providers), under strict confidentiality agreements.",
        },
        {
          heading: "4. Data Retention",
          body: "We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us.",
        },
        {
          heading: "5. Cookies",
          body: "Our website uses essential cookies to function correctly, and optional analytics cookies to understand how visitors use our site. You can disable non-essential cookies in your browser settings.",
        },
        {
          heading: "6. Your Rights (GDPR)",
          body: [
            "Right to access: request a copy of the personal data we hold about you.",
            "Right to rectification: request correction of inaccurate data.",
            "Right to erasure: request deletion of your data.",
            "Right to restrict processing: request that we limit how we use your data.",
            "Right to portability: receive your data in a portable format.",
            "Right to object: object to processing based on our legitimate interests.",
          ],
        },
        {
          heading: "7. Security",
          body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All connections to our service are encrypted via SSL/TLS.",
        },
        {
          heading: "8. Contact",
          body: "For any privacy-related queries or to exercise your rights, contact us at goldengateiptv@gmail.com. We will respond within 30 days.",
        },
      ]}
    />
  );
}
