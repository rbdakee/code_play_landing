"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
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
  const value = useMemo(
    () => ({ locale, content: getContent(locale) }),
    [locale]
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
