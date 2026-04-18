import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalizedPrivacyPolicy } from "@/components/legal/LocalizedLegalPages";

export const metadata: Metadata = {
  title: "Privacy Policy | Play In Code",
  description: "Privacy Policy for the Play In Code website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LocalizedPrivacyPolicy />
      <Footer />
    </>
  );
}

