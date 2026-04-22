import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { getSiteUrl } from "@/lib/seo/siteUrl";
import type { Locale } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#60C849",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale: Locale = headers().get("x-locale") === "en" ? "en" : "ru";

  return (
    <html lang={locale}>
      <body className="bg-background text-foreground antialiased">
        <GoogleTagManager />
        <Providers locale={locale}>{children}</Providers>
        <GoogleAnalytics />
        <YandexMetrika />
      </body>
    </html>
  );
}
