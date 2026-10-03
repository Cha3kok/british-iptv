import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "DMCA Policy — British IPTV | Copyright Notices" },
  description:
    "British IPTV respects intellectual property rights. Read our DMCA policy to learn how to submit a copyright infringement notice or a counter-notice.",
  alternates: { canonical: "https://www.iptv-british.com/dmca" },
  openGraph: {
    title: "DMCA Policy — British IPTV",
    description: "How to submit a copyright infringement notice or counter-notice.",
    url: "https://www.iptv-british.com/dmca",
  },
};

export default function DmcaPolicy() {
  return (
    <LegalPage
      badge="Legal"
      path="/dmca"
      title="DMCA Policy"
      subtitle="We respect the intellectual property rights of others and respond promptly to valid copyright notices."
      lastUpdated="3 October 2026"
      sections={[
        {
          heading: "Our Commitment",
          body: "British IPTV respects the intellectual property rights of others and expects its users to do the same. In line with the Digital Millennium Copyright Act (DMCA) and equivalent UK and EU laws, we respond to clear notices of alleged copyright infringement and will remove or disable access to material that is found to infringe.",
        },
        {
          heading: "Filing a Copyright Infringement Notice",
          body: [
            "Your physical or electronic signature, as the copyright owner or a person authorised to act on their behalf.",
            "Identification of the copyrighted work you claim has been infringed.",
            "Identification of the material you claim is infringing, with enough detail (such as a URL) for us to locate it.",
            "Your contact information: full name, postal address, telephone number and email address.",
            "A statement that you have a good-faith belief that the use of the material is not authorised by the copyright owner, its agent, or the law.",
            "A statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorised to act on the owner's behalf.",
          ],
        },
        {
          heading: "What Happens Next",
          body: "Once we receive a complete and valid notice, we will review it and, where appropriate, remove or disable access to the material identified. We aim to acknowledge notices within 48 hours. Incomplete notices may delay our response, so please include every item listed above.",
        },
        {
          heading: "Filing a Counter-Notice",
          body: [
            "If you believe material was removed by mistake or misidentification, you may send us a counter-notice containing:",
            "Your physical or electronic signature.",
            "Identification of the material that was removed and where it appeared before removal.",
            "A statement, under penalty of perjury, that you have a good-faith belief the material was removed as a result of mistake or misidentification.",
            "Your name, address and telephone number, and a statement that you consent to the jurisdiction of the appropriate court and will accept service of process from the person who filed the original notice.",
          ],
        },
        {
          heading: "Repeat Infringers",
          body: "We may suspend or terminate the accounts of users who are found to be repeat infringers of the intellectual property rights of others.",
        },
        {
          heading: "Misrepresentation",
          body: "Please be aware that knowingly misrepresenting that material is infringing, or that it was removed by mistake, may make you liable for damages, including costs and legal fees. If you are unsure whether material infringes your rights, we recommend seeking legal advice before submitting a notice.",
        },
        {
          heading: "Where to Send Notices",
          body: "Send copyright notices and counter-notices by email to goldengateiptv@gmail.com with the subject line \"DMCA Notice\" or \"DMCA Counter-Notice\". You can also reach our team via WhatsApp at +212 707 711 512.",
        },
      ]}
    />
  );
}
