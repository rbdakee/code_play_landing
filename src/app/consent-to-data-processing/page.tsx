import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalizedConsent } from "@/components/legal/LocalizedLegalPages";

export const metadata: Metadata = {
  title: "Consent to Data Processing | Code Play",
  description: "Consent to personal data processing for the Code Play website.",
};

export default function ConsentPage() {
  return (
    <>
      <Header />
      <LocalizedConsent />
      <Footer />
    </>
  );
}
