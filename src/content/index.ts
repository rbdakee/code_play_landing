import { content as enContent } from "./en";
import { content as ruContent } from "./ru";

export type Locale = "ru" | "en";

export const contents = {
  ru: ruContent,
  en: enContent,
};

export type SiteContent = typeof ruContent;

export function getContent(locale: Locale): SiteContent {
  return contents[locale];
}
