import type { Metadata } from "next";
import { content as ruContent } from "@/content/ru";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: ruContent.siteName,
  description: ruContent.siteDescription,
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/logo_no_words.png",
    shortcut: "/logo_no_words.png",
    apple: "/logo_no_words.png",
  },
  openGraph: {
    title: ruContent.siteName,
    description: ruContent.siteDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
