"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { getContent, Locale, SiteContent } from "@/content";

interface LanguageContextValue {
  locale: Locale;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ru",
  content: getContent("ru"),
});

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const resolvedLocale: Locale = pathname?.startsWith("/en") ? "en" : locale;

  const value = useMemo(
    () => ({ locale: resolvedLocale, content: getContent(resolvedLocale) }),
    [resolvedLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useContent() {
  return useLanguage().content;
}
