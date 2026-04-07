import type { Metadata } from "next";
import { content } from "@/content/ru";
import "./globals.css";

export const metadata: Metadata = {
  title: content.siteName,
  description: content.siteDescription,
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: content.siteName,
    description: content.siteDescription,
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
        {children}
      </body>
    </html>
  );
}
