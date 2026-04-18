"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import type { Locale } from "@/content";

export function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return <LanguageProvider locale={locale}>{children}</LanguageProvider>;
}
