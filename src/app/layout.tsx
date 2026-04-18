import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { getSiteUrl } from "@/lib/seo/siteUrl";
import type { Locale } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  icons: {
    icon: "/logo_no_words.png",
    shortcut: "/logo_no_words.png",
    apple: "/logo_no_words.png",
  },
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
        <Providers locale={locale}>{children}</Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
