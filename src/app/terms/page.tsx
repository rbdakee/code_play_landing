import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalizedTerms } from "@/components/legal/LocalizedLegalPages";

export const metadata: Metadata = {
  title: "Terms of Use | Play In Code",
  description: "Terms of Use for the Play In Code website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LocalizedTerms />
      <Footer />
    </>
  );
}

