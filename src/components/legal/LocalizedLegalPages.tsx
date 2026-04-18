"use client";

import { useLanguage } from "@/lib/i18n";
import { INSTAGRAM_HANDLE, TELEGRAM_HANDLE, WHATSAPP_DISPLAY } from "@/lib/constants";
import { LegalDocument, LegalList, LegalSection } from "./LegalDocument";

type Section = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type DocContent = {
  title: string;
  updatedAt: string;
  sections: Section[];
};

function LocalizedDocument({ content }: { content: Record<"ru" | "en", DocContent> }) {
  const { locale } = useLanguage();
  const doc = content[locale];

  return (
    <LegalDocument title={doc.title} updatedAt={doc.updatedAt}>
      {doc.sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items ? <LegalList items={section.items} /> : null}
        </LegalSection>
      ))}
    </LegalDocument>
  );
}

const contactItems = [
  `WhatsApp: ${WHATSAPP_DISPLAY}`,
  `Telegram: ${TELEGRAM_HANDLE}`,
  `Instagram: ${INSTAGRAM_HANDLE}`,
];

const privacyContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
    updatedAt: "14 Ð°Ð¿Ñ€ÐµÐ»Ñ 2026 Ð³Ð¾Ð´Ð°",
    sections: [
      {
        title: "1. ÐžÐ±Ñ‰Ð¸Ðµ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
        paragraphs: [
          "ÐÐ°ÑÑ‚Ð¾ÑÑ‰Ð°Ñ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¾Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÑ‚, ÐºÐ°Ðº ÑÐ°Ð¹Ñ‚ Play In Code Ð¾Ð±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ð¿Ñ€Ð¸ Ð¿Ð¾ÑÐµÑ‰ÐµÐ½Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð° Ð¸ Ð¿Ñ€Ð¸ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ð¸ Ð·Ð° ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÐµÐ¹ Ð¸Ð»Ð¸ Ð·Ð°Ð¿Ð¸ÑÑŒÑŽ Ð½Ð° Ð¿Ñ€Ð¾Ð±Ð½Ñ‹Ð¹ ÑƒÑ€Ð¾Ðº.",
          "Ð¡Ð°Ð¹Ñ‚ Play In Code Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½ Ð´Ð»Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ Ñ€Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÐµÐ¹ Ð¸ Ð·Ð°ÐºÐ¾Ð½Ð½Ñ‹Ñ… Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ¹ Ð¾ ÐºÑƒÑ€ÑÐ°Ñ… Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ Ð´Ð»Ñ Ð´ÐµÑ‚ÐµÐ¹ Ð² Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ðµ Ð¾Ñ‚ 7 Ð´Ð¾ 16 Ð»ÐµÑ‚.",
        ],
      },
      {
        title: "2. ÐšÑ‚Ð¾ Ð¾Ð±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ",
        paragraphs: [
          "ÐžÐ¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð² Ñ€Ð°Ð¼ÐºÐ°Ñ… Ð½Ð°ÑÑ‚Ð¾ÑÑ‰ÐµÐ¹ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¸ ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð° Play In Code.",
          "ÐŸÐ¾ÑÐºÐ¾Ð»ÑŒÐºÑƒ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ Ð½Ðµ ÑƒÐºÐ°Ð·Ð°Ð½Ñ‹ Ð¾Ñ‚Ð´ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ñ€ÐµÐºÐ²Ð¸Ð·Ð¸Ñ‚Ñ‹ ÑŽÑ€Ð¸Ð´Ð¸Ñ‡ÐµÑÐºÐ¾Ð³Ð¾ Ð»Ð¸Ñ†Ð° Ð¸Ð»Ð¸ Ð¸Ð½Ð´Ð¸Ð²Ð¸Ð´ÑƒÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°Ñ‚ÐµÐ»Ñ, Ð² Ð½Ð°ÑÑ‚Ð¾ÑÑ‰ÐµÐ¼ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð¾Ð±Ð¾Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ \"Play In Code\" Ð¸Ð»Ð¸ \"Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ ÑÐ°Ð¹Ñ‚Ð°\".",
        ],
      },
      {
        title: "3. ÐšÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ð¾Ð³ÑƒÑ‚ Ð¾Ð±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒÑÑ",
        items: [
          "Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¾ Ð¿Ð¾ÑÐµÑ‰ÐµÐ½Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð°: IP-Ð°Ð´Ñ€ÐµÑ, Ñ‚Ð¸Ð¿ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°, Ñ‚Ð¸Ð¿ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°, ÑÐ·Ñ‹Ðº Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°, Ð´Ð°Ñ‚Ð° Ð¸ Ð²Ñ€ÐµÐ¼Ñ Ð¿Ð¾ÑÐµÑ‰ÐµÐ½Ð¸Ñ, ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¾ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ð°Ñ… Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°Ñ…;",
          "Ð´Ð°Ð½Ð½Ñ‹Ðµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ ÑÐ°Ð¼Ð¾ÑÑ‚Ð¾ÑÑ‚ÐµÐ»ÑŒÐ½Ð¾ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‘Ñ‚Ðµ Ð¿Ñ€Ð¸ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ð¸ Ñ‡ÐµÑ€ÐµÐ· WhatsApp Ð¸Ð»Ð¸ Ð¸Ð½Ñ‹Ðµ ÐºÐ°Ð½Ð°Ð»Ñ‹ ÑÐ²ÑÐ·Ð¸;",
          "ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¼Ð¾Ð³ÑƒÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒÑÑ Ð² Ð²Ð°ÑˆÐµÐ¼ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¸: Ð¸Ð¼Ñ Ñ€Ð¾Ð´Ð¸Ñ‚ÐµÐ»Ñ, Ð¸Ð¼Ñ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°, Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°, Ð¸Ð½Ñ‚ÐµÑ€ÐµÑ Ðº ÐºÑƒÑ€ÑÑƒ, Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ ÑÐ²ÑÐ·Ð¸ Ð¸ Ð¸Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ ÑÐ¾Ð¾Ð±Ñ‰Ð¸Ñ‚Ðµ Ð´Ð¾Ð±Ñ€Ð¾Ð²Ð¾Ð»ÑŒÐ½Ð¾.",
        ],
        paragraphs: [
          "Ð¡Ð°Ð¹Ñ‚ Ð½Ðµ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð²ÑÑ‚Ñ€Ð¾ÐµÐ½Ð½Ð¾Ð¹ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸ Ð¸Ð»Ð¸ Ð¾Ñ‚Ð´ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð·Ð°ÑÐ²ÐºÐ¸. ÐžÑÐ½Ð¾Ð²Ð½Ð¾Ð¹ ÑÐ¿Ð¾ÑÐ¾Ð± ÑÐ²ÑÐ·Ð¸, Ñ€ÐµÐ°Ð»Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ð² Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð²ÐµÑ€ÑÐ¸Ð¸ ÑÐ°Ð¹Ñ‚Ð°, ÑÑ‚Ð¾ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ Ð² WhatsApp Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ Ñ Ð·Ð°Ñ€Ð°Ð½ÐµÐµ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²Ð»ÐµÐ½Ð½Ñ‹Ð¼ Ñ‚ÐµÐºÑÑ‚Ð¾Ð¼ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ.",
        ],
      },
      {
        title: "4. Ð¦ÐµÐ»Ð¸ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸ Ð´Ð°Ð½Ð½Ñ‹Ñ…",
        items: [
          "Ð¾Ñ‚Ð²ÐµÑ‚Ð° Ð½Ð° Ð²Ð°ÑˆÐ¸ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ñ;",
          "Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð½Ð° Ð¿Ñ€Ð¾Ð±Ð½Ñ‹Ð¹ ÑƒÑ€Ð¾Ðº;",
          "Ð¿Ð¾Ð´Ð±Ð¾Ñ€Ð° Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰ÐµÐ³Ð¾ ÐºÑƒÑ€ÑÐ° Ð¿Ð¾ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ñƒ Ð¸ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ°Ð¼ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°;",
          "ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð·Ð°Ð½ÑÑ‚Ð¸Ð¹ Ð¸Ð»Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸;",
          "ÑƒÐ»ÑƒÑ‡ÑˆÐµÐ½Ð¸Ñ ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ð° ÑÐ°Ð¹Ñ‚Ð°, ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ñ‹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ† Ð¸ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ð½Ð¸Ñ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð¾Ð²;",
          "Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¸ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð¹ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ ÑÐ°Ð¹Ñ‚Ð°.",
        ],
      },
      {
        title: "5. ÐŸÐµÑ€ÐµÐ´Ð°Ñ‡Ð° Ð´Ð°Ð½Ð½Ñ‹Ñ… Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼ Ð»Ð¸Ñ†Ð°Ð¼",
        paragraphs: [
          "Play In Code Ð½Ðµ Ð¿Ñ€Ð¾Ð´Ð°Ñ‘Ñ‚ Ð¸ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‘Ñ‚ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼ Ð»Ð¸Ñ†Ð°Ð¼ Ð´Ð»Ñ Ð¸Ñ… ÑÐ°Ð¼Ð¾ÑÑ‚Ð¾ÑÑ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð°.",
          "ÐŸÑ€Ð¸ ÑÑ‚Ð¾Ð¼ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹ Ð¸Ð»Ð¸ Ð¿ÐµÑ€ÐµÐ´Ð°Ð²Ð°Ñ‚ÑŒÑÑ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ð¼ Ð¿Ð¾Ð´Ñ€ÑÐ´Ñ‡Ð¸ÐºÐ°Ð¼ Ð¸ Ñ…Ð¾ÑÑ‚Ð¸Ð½Ð³-Ð¿Ñ€Ð¾Ð²Ð°Ð¹Ð´ÐµÑ€Ð°Ð¼, ÑÐµÑ€Ð²Ð¸ÑÐ°Ð¼ ÑÐ²ÑÐ·Ð¸ Ð¸ Ð¾Ð±Ð¼ÐµÐ½Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸ÑÐ¼Ð¸, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð´Ð»Ñ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ñ, Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ WhatsApp, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð³Ð¾ÑÑƒÐ´Ð°Ñ€ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¼ Ð¾Ñ€Ð³Ð°Ð½Ð°Ð¼ Ð² ÑÐ»ÑƒÑ‡Ð°ÑÑ…, Ð¿Ñ€ÐµÐ´ÑƒÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð½Ñ‹Ñ… Ð·Ð°ÐºÐ¾Ð½Ð¾Ð¼.",
          "ÐŸÑ€Ð¸ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ðµ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ Ð² WhatsApp Ð´Ð°Ð»ÑŒÐ½ÐµÐ¹ÑˆÐ°Ñ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¼Ð¾Ð¶ÐµÑ‚ Ð¾ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð»ÑÑ‚ÑŒÑÑ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ð¼ ÑÐµÑ€Ð²Ð¸ÑÐ¾Ð¼ Ð¿Ð¾ ÐµÐ³Ð¾ ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¼ Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð°Ð¼ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸.",
        ],
      },
      {
        title: "6. Cookies Ð¸ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸",
        paragraphs: [
          "Ð’ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð²ÐµÑ€ÑÐ¸Ð¸ ÑÐ°Ð¹Ñ‚Ð° Ð½Ðµ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ð¾ ÑÐ²Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ñ Ð°Ð½Ð°Ð»Ð¸Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ñ… ÑÑ‡Ñ‘Ñ‚Ñ‡Ð¸ÐºÐ¾Ð² Ð² ÐºÐ¾Ð´Ðµ ÑÐ°Ð¹Ñ‚Ð°.",
          "ÐŸÑ€Ð¸ ÑÑ‚Ð¾Ð¼ ÑÐ°Ð¹Ñ‚ Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼Ð°Ñ Ð¸Ð½Ñ„Ñ€Ð°ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð¼Ð¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ cookies Ð¸Ð»Ð¸ Ð°Ð½Ð°Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ñ‹Ðµ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸, Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ Ð´Ð»Ñ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ð¾Ð¹ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†, Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¸ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð¹ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ñ…Ð¾ÑÑ‚Ð¸Ð½Ð³Ð°.",
        ],
      },
      {
        title: "7. Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð´ÐµÑ‚ÐµÐ¹",
        paragraphs: [
          "Ð¡Ð°Ð¹Ñ‚ Ð¿Ð¾ÑÐ²ÑÑ‰Ñ‘Ð½ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸ÑŽ Ð´ÐµÑ‚ÐµÐ¹, Ð¾Ð´Ð½Ð°ÐºÐ¾ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ðµ Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ð»Ð°Ð³Ð°ÐµÑ‚ÑÑ ÑÐ¾ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹ Ñ€Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÐµÐ¹ Ð¸Ð»Ð¸ Ð¸Ð½Ñ‹Ñ… Ð·Ð°ÐºÐ¾Ð½Ð½Ñ‹Ñ… Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ¹.",
          "Play In Code Ð¿Ñ€Ð¾ÑÐ¸Ñ‚ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°Ð²Ð°Ñ‚ÑŒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ° Ð² Ð¾Ð±ÑŠÑ‘Ð¼Ðµ, Ð¿Ñ€ÐµÐ²Ñ‹ÑˆÐ°ÑŽÑ‰ÐµÐ¼ Ñ€Ð°Ð·ÑƒÐ¼Ð½Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ Ð´Ð»Ñ Ð¿Ð¾Ð´Ð±Ð¾Ñ€Ð° ÐºÑƒÑ€ÑÐ° Ð¸Ð»Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð½Ð° Ð¿Ñ€Ð¾Ð±Ð½Ñ‹Ð¹ ÑƒÑ€Ð¾Ðº.",
        ],
      },
      {
        title: "8. ÐŸÑ€Ð°Ð²Ð° Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ",
        items: [
          "Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¾ Ñ‚Ð¾Ð¼, ÐºÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¾ Ð²Ð°Ñ Ð¾Ð±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°ÑŽÑ‚ÑÑ;",
          "Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ñ‚ÑŒ Ð¸ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð½ÐµÑ‚Ð¾Ñ‡Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…;",
          "Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ñ‚ÑŒ ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ñ Ð´Ð°Ð½Ð½Ñ‹Ñ…, ÐµÑÐ»Ð¸ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ñ Ð´Ð»Ñ Ð¸Ñ… Ð´Ð°Ð»ÑŒÐ½ÐµÐ¹ÑˆÐµÐ¹ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸;",
          "Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ñ‚ÑŒ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð² Ð¿Ñ€ÐµÐ´ÑƒÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð½Ñ‹Ñ… Ð·Ð°ÐºÐ¾Ð½Ð¾Ð¼ ÑÐ»ÑƒÑ‡Ð°ÑÑ…;",
          "Ð¾Ñ‚Ð¾Ð·Ð²Ð°Ñ‚ÑŒ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ, ÐµÑÐ»Ð¸ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð° Ð½Ð° ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ð¸.",
        ],
      },
      {
        title: "9. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "This Privacy Policy describes how the Play In Code website processes user information when visiting the site and when requesting a consultation or booking a trial lesson.",
          "The Play In Code website is intended to inform parents and legal guardians about programming courses for children aged 7 to 16.",
        ],
      },
      {
        title: "2. Who Processes the Data",
        paragraphs: [
          "The data controller under this Policy is the administration of the Play In Code project.",
          "Since the website does not currently list the separate legal details of a company or sole proprietor, this document uses the designation \"Play In Code\" or \"site administration\".",
        ],
      },
      {
        title: "3. What Data May Be Processed",
        items: [
          "technical visit data such as IP address, device type, browser type, browser language, date and time of visit, and information about visited pages;",
          "data you voluntarily provide when contacting us through WhatsApp or other communication channels;",
          "information contained in your message, such as parent name, child name, child age, course interests, preferred contact time, and any other data you choose to share.",
        ],
        paragraphs: [
          "The current version of the website does not include a built-in registration form or a separate lead form. The main contact flow implemented on the site is a user-initiated redirect to WhatsApp with a pre-filled message.",
        ],
      },
      {
        title: "4. Purposes of Data Processing",
        items: [
          "responding to your inquiries;",
          "booking a trial lesson;",
          "selecting a suitable course based on the child's age and interests;",
          "coordinating lesson times or consultations;",
          "improving the quality, structure, and content of the website;",
          "ensuring the security and stability of the website.",
        ],
      },
      {
        title: "5. Sharing Data with Third Parties",
        paragraphs: [
          "Play In Code does not sell or transfer personal data to third parties for their independent marketing purposes.",
          "However, data may be accessible to technical contractors, hosting providers, communication services and messengers used to contact us, including WhatsApp, and public authorities where required by law.",
          "When you follow a WhatsApp link, further processing may be carried out by that service under its own privacy rules.",
        ],
      },
      {
        title: "6. Cookies and Technical Technologies",
        paragraphs: [
          "In the current version of the website, no explicit analytics or advertising trackers were found in the codebase.",
          "At the same time, the website and the underlying infrastructure may use technical cookies or similar technologies required for proper page delivery, security, and stable hosting operations.",
        ],
      },
      {
        title: "7. Children's Data",
        paragraphs: [
          "The website is dedicated to children's education, but primary interaction is expected from parents or other legal representatives.",
          "Play In Code asks users not to provide a child's personal data beyond what is reasonably necessary to select a course or arrange a trial lesson.",
        ],
      },
      {
        title: "8. User Rights",
        items: [
          "request information about what personal data is being processed;",
          "request correction of inaccurate data;",
          "request deletion of data where there is no valid basis for further processing;",
          "request restriction of processing where permitted by law;",
          "withdraw consent where processing is based on consent.",
        ],
      },
      {
        title: "9. Contacts",
        items: contactItems,
      },
    ],
  },
};

const termsContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐ°Ð¹Ñ‚Ð°",
    updatedAt: "14 Ð°Ð¿Ñ€ÐµÐ»Ñ 2026 Ð³Ð¾Ð´Ð°",
    sections: [
      {
        title: "1. ÐžÐ±Ñ‰Ð¸Ðµ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
        paragraphs: [
          "ÐÐ°ÑÑ‚Ð¾ÑÑ‰Ð¸Ðµ Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ Ñ€ÐµÐ³ÑƒÐ»Ð¸Ñ€ÑƒÑŽÑ‚ Ð¿Ð¾Ñ€ÑÐ´Ð¾Ðº Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÐ°Ð¹Ñ‚Ð° Play In Code, Ñ€Ð°Ð·Ð¼ÐµÑ‰Ñ‘Ð½Ð½Ð¾Ð³Ð¾ Ð² ÑÐµÑ‚Ð¸ Ð˜Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð¾Ð² Ð¸ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸, Ð¾Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð½Ð° Ð½Ñ‘Ð¼.",
          "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑ ÑÐ°Ð¹Ñ‚, Ð²Ñ‹ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ð°ÐµÑ‚Ðµ, Ñ‡Ñ‚Ð¾ Ð¾Ð·Ð½Ð°ÐºÐ¾Ð¼Ð¸Ð»Ð¸ÑÑŒ Ñ Ð½Ð°ÑÑ‚Ð¾ÑÑ‰Ð¸Ð¼Ð¸ Ð£ÑÐ»Ð¾Ð²Ð¸ÑÐ¼Ð¸ Ð¸ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÐµÑ‚Ðµ Ð¸Ñ… Ð² Ð¿Ð¾Ð»Ð½Ð¾Ð¼ Ð¾Ð±ÑŠÑ‘Ð¼Ðµ.",
        ],
      },
      {
        title: "2. ÐÐ°Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ ÑÐ°Ð¹Ñ‚Ð°",
        paragraphs: ["Ð¡Ð°Ð¹Ñ‚ Play In Code Ð½Ð¾ÑÐ¸Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ð¹ Ñ…Ð°Ñ€Ð°ÐºÑ‚ÐµÑ€ Ð¸ Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½ Ð´Ð»Ñ:"],
        items: [
          "Ð¾Ð·Ð½Ð°ÐºÐ¾Ð¼Ð»ÐµÐ½Ð¸Ñ Ñ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð°Ð¼Ð¸ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸ÑŽ Ð´Ð»Ñ Ð´ÐµÑ‚ÐµÐ¹;",
          "Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ Ð¾ Ð¿Ñ€Ð¾Ð±Ð½Ð¾Ð¼ ÑƒÑ€Ð¾ÐºÐµ;",
          "ÑÐ²ÑÐ·Ð¸ Ñ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸ÐµÐ¹ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð° Ñ‡ÐµÑ€ÐµÐ· ÑƒÐºÐ°Ð·Ð°Ð½Ð½Ñ‹Ðµ ÐºÐ°Ð½Ð°Ð»Ñ‹ ÑÐ²ÑÐ·Ð¸;",
          "Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¿Ð¾Ð´Ð±Ð¾Ñ€Ð° Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰ÐµÐ³Ð¾ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ.",
        ],
      },
      {
        title: "3. ÐžÐ³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ",
        paragraphs: ["ÐŸÑ€Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð° Ð·Ð°Ð¿Ñ€ÐµÑ‰Ð°ÐµÑ‚ÑÑ:"],
        items: [
          "Ð½Ð°Ñ€ÑƒÑˆÐ°Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð¼ÐµÐ½Ð¸Ð¼Ð¾Ðµ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð´Ð°Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð¾;",
          "Ð¿Ñ‹Ñ‚Ð°Ñ‚ÑŒÑÑ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð½ÐµÑÐ°Ð½ÐºÑ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ð´Ð¾ÑÑ‚ÑƒÐ¿ Ðº ÑÐ°Ð¹Ñ‚Ñƒ, ÐµÐ³Ð¾ Ð¸Ð½Ñ„Ñ€Ð°ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ðµ Ð¸Ð»Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ð¼;",
          "Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ°Ð¹Ñ‚ Ð´Ð»Ñ Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð²Ñ€ÐµÐ´Ð¾Ð½Ð¾ÑÐ½Ð¾Ð³Ð¾ ÐºÐ¾Ð´Ð°, ÑÐ¿Ð°Ð¼Ð° Ð¸Ð»Ð¸ Ð¼Ð¾ÑˆÐµÐ½Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹;",
          "Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ñ‹ ÑÐ°Ð¹Ñ‚Ð° ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð¼, Ð½Ð°Ñ€ÑƒÑˆÐ°ÑŽÑ‰Ð¸Ð¼ Ð¿Ñ€Ð°Ð²Ð° Play In Code Ð¸Ð»Ð¸ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ñ… Ð»Ð¸Ñ†.",
        ],
      },
      {
        title: "4. Ð˜Ð½Ñ‚ÐµÐ»Ð»ÐµÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð°Ñ ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚ÑŒ",
        paragraphs: [
          "Ð’ÑÐµ Ñ‚ÐµÐºÑÑ‚Ñ‹, Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ, Ð»Ð¾Ð³Ð¾Ñ‚Ð¸Ð¿Ñ‹, ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð´Ð¸Ð·Ð°Ð¹Ð½Ð°, ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° ÑÐ°Ð¹Ñ‚Ð° Ð¸ Ð¸Ð½Ñ‹Ðµ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ñ‹, Ñ€Ð°Ð·Ð¼ÐµÑ‰Ñ‘Ð½Ð½Ñ‹Ðµ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ, Ð¿Ñ€Ð¸Ð½Ð°Ð´Ð»ÐµÐ¶Ð°Ñ‚ Play In Code Ð»Ð¸Ð±Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ Ð½Ð° Ð·Ð°ÐºÐ¾Ð½Ð½Ñ‹Ñ… Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸ÑÑ….",
          "Ð‘ÐµÐ· Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¿Ð¸ÑÑŒÐ¼ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð° Ð·Ð°Ð¿Ñ€ÐµÑ‰Ð°ÐµÑ‚ÑÑ ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ, Ð¿ÐµÑ€ÐµÑ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒ Ð¸Ð»Ð¸ Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚ÑŒ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ñ‹ ÑÐ°Ð¹Ñ‚Ð° Ð² ÐºÐ¾Ð¼Ð¼ÐµÑ€Ñ‡ÐµÑÐºÐ¸Ñ… Ñ†ÐµÐ»ÑÑ….",
        ],
      },
      {
        title: "5. ÐžÐ³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ðµ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸",
        items: [
          "Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½ÑƒÑŽ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾ÑÑ‚ÑŒ ÑÐ°Ð¹Ñ‚Ð°;",
          "Ð¿ÐµÑ€ÐµÐ±Ð¾Ð¸ Ð² Ñ€Ð°Ð±Ð¾Ñ‚Ðµ Ð²Ð½ÐµÑˆÐ½Ð¸Ñ… ÑÐµÑ€Ð²Ð¸ÑÐ¾Ð², Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ Ð¼ÐµÑÑÐµÐ½Ð´Ð¶ÐµÑ€Ñ‹;",
          "Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ñ… Ð»Ð¸Ñ†;",
          "Ñ€ÐµÑˆÐµÐ½Ð¸Ñ, Ð¿Ñ€Ð¸Ð½ÑÑ‚Ñ‹Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ð¸ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð° Ð±ÐµÐ· Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸.",
        ],
      },
      {
        title: "6. Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ð¹",
        paragraphs: [
          "Play In Code Ð²Ð¿Ñ€Ð°Ð²Ðµ Ð² Ð»ÑŽÐ±Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð·Ð¼ÐµÐ½ÑÑ‚ÑŒ Ð½Ð°ÑÑ‚Ð¾ÑÑ‰Ð¸Ðµ Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ. ÐÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð°Ñ Ð²ÐµÑ€ÑÐ¸Ñ Ð²ÑÑ‚ÑƒÐ¿Ð°ÐµÑ‚ Ð² ÑÐ¸Ð»Ñƒ Ñ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ Ð¸Ð»Ð¸ Ð² Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ… Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð°.",
        ],
      },
      {
        title: "7. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "These Terms of Use govern the use of the Play In Code website and the materials and information published on it.",
          "By using the website, you confirm that you have read and accepted these Terms in full.",
        ],
      },
      {
        title: "2. Purpose of the Website",
        paragraphs: ["The Play In Code website is intended for:"],
        items: [
          "learning about children's programming courses;",
          "getting information about a trial lesson;",
          "contacting the project administration through the listed communication channels;",
          "preliminary selection of a suitable learning track.",
        ],
      },
      {
        title: "3. Restrictions on Use",
        paragraphs: ["When using the website, you may not:"],
        items: [
          "violate applicable law;",
          "attempt to gain unauthorized access to the website, its infrastructure, or data;",
          "use the website to distribute malicious code, spam, or fraudulent messages;",
          "use website materials in a way that infringes the rights of Play In Code or third parties.",
        ],
      },
      {
        title: "4. Intellectual Property",
        paragraphs: [
          "All texts, images, logos, design elements, website structure, and other materials published on the website belong to Play In Code or are used on a lawful basis.",
          "Without prior written permission from the site administration, you may not copy, adapt, or distribute website materials for commercial purposes.",
        ],
      },
      {
        title: "5. Limitation of Liability",
        items: [
          "temporary unavailability of the website;",
          "interruptions in third-party services, including messengers;",
          "actions of third parties;",
          "decisions made by users based solely on website information without additional consultation.",
        ],
      },
      {
        title: "6. Changes to the Terms",
        paragraphs: [
          "Play In Code may update these Terms of Use at any time. The current version takes effect from the moment it is published on the website or in the project documents.",
        ],
      },
      {
        title: "7. Contacts",
        items: contactItems,
      },
    ],
  },
};

const consentContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "Ð¡Ð¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…",
    updatedAt: "14 Ð°Ð¿Ñ€ÐµÐ»Ñ 2026 Ð³Ð¾Ð´Ð°",
    sections: [
      {
        title: "1. ÐÐ° Ñ‡Ñ‚Ð¾ Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÐµÑ‚ÑÑ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ",
        paragraphs: [
          "ÐžÑÑ‚Ð°Ð²Ð»ÑÑ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ðµ Ñ‡ÐµÑ€ÐµÐ· Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ðµ ÐºÐ°Ð½Ð°Ð»Ñ‹ ÑÐ²ÑÐ·Ð¸ Play In Code, Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ Ð² WhatsApp, Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÑƒ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ Ð² Ð¼ÐµÑÑÐµÐ½Ð´Ð¶ÐµÑ€Ðµ Ð¸Ð»Ð¸ Ð¸Ð½Ð¾Ðµ Ð´Ð¾Ð±Ñ€Ð¾Ð²Ð¾Ð»ÑŒÐ½Ð¾Ðµ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÐ²Ð¾Ð¸Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð²Ñ‹Ñ€Ð°Ð¶Ð°ÐµÑ‚ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð½Ð° ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ…, Ð¸Ð·Ð»Ð¾Ð¶ÐµÐ½Ð½Ñ‹Ñ… Ð½Ð¸Ð¶Ðµ.",
        ],
      },
      {
        title: "2. ÐšÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ð¾Ð³ÑƒÑ‚ Ð¾Ð±Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒÑÑ",
        items: [
          "Ð¸Ð¼Ñ Ð¸ Ð¸Ð½Ñ‹Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸Ñ†Ð¸Ñ€ÑƒÑŽÑ‰Ð¸Ðµ ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ;",
          "Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°;",
          "Ð¸Ð¼Ñ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°;",
          "Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°;",
          "ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¾Ð± Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ°Ñ… Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°, Ñ†ÐµÐ»ÑÑ… Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¼ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ðµ Ð·Ð°Ð½ÑÑ‚Ð¸Ð¹;",
          "ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¾ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð¸ ÑÐ¿Ð¾ÑÐ¾Ð±Ðµ ÑÐ²ÑÐ·Ð¸;",
          "Ð¸Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ, ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‰Ð¸ÐµÑÑ Ð² ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸ÑÑ… Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ.",
        ],
      },
      {
        title: "3. Ð¦ÐµÐ»Ð¸ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸",
        items: [
          "ÑÐ²ÑÐ·Ð¸ Ñ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ Ð¿Ð¾ ÐµÐ³Ð¾ Ð·Ð°Ð¿Ñ€Ð¾ÑÑƒ;",
          "Ð·Ð°Ð¿Ð¸ÑÐ¸ Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ° Ð½Ð° Ð¿Ñ€Ð¾Ð±Ð½Ñ‹Ð¹ ÑƒÑ€Ð¾Ðº;",
          "Ð¿Ð¾Ð´Ð±Ð¾Ñ€Ð° Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰ÐµÐ¹ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ñ‹ Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ;",
          "ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ Ñ€Ð°ÑÐ¿Ð¸ÑÐ°Ð½Ð¸Ñ Ð¸ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ñ… Ð´ÐµÑ‚Ð°Ð»ÐµÐ¹;",
          "Ð²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ð¹;",
          "ÑƒÐ»ÑƒÑ‡ÑˆÐµÐ½Ð¸Ñ ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ð° ÑÐµÑ€Ð²Ð¸ÑÐ° Ð¸ ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ð¸.",
        ],
      },
      {
        title: "4. Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ñ Ð´Ð°Ð½Ð½Ñ‹Ð¼Ð¸",
        paragraphs: ["Play In Code Ð²Ð¿Ñ€Ð°Ð²Ðµ Ð¾ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð»ÑÑ‚ÑŒ Ñ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¼Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ð¼Ð¸:"],
        items: [
          "ÑÐ±Ð¾Ñ€, Ð·Ð°Ð¿Ð¸ÑÑŒ Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ð°Ñ‚Ð¸Ð·Ð°Ñ†Ð¸ÑŽ;",
          "Ð½Ð°ÐºÐ¾Ð¿Ð»ÐµÐ½Ð¸Ðµ Ð¸ Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ;",
          "ÑƒÑ‚Ð¾Ñ‡Ð½ÐµÐ½Ð¸Ðµ Ð¸ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ;",
          "Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ;",
          "Ð¾Ð±ÐµÐ·Ð»Ð¸Ñ‡Ð¸Ð²Ð°Ð½Ð¸Ðµ, Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ, ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ðµ Ð¸ ÑƒÐ½Ð¸Ñ‡Ñ‚Ð¾Ð¶ÐµÐ½Ð¸Ðµ.",
        ],
      },
      {
        title: "5. ÐŸÐµÑ€ÐµÐ´Ð°Ñ‡Ð° Ð¸ ÑÑ€Ð¾Ðº Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ",
        paragraphs: [
          "Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ð¼ Ð¿Ð¾Ð´Ñ€ÑÐ´Ñ‡Ð¸ÐºÐ°Ð¼, ÑÐµÑ€Ð²Ð¸ÑÐ°Ð¼ ÑÐ²ÑÐ·Ð¸ Ð¸ Ð¼ÐµÑÑÐµÐ½Ð´Ð¶ÐµÑ€Ð°Ð¼, Ñ‡ÐµÑ€ÐµÐ· ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ ÑÐ°Ð¼Ð¾ÑÑ‚Ð¾ÑÑ‚ÐµÐ»ÑŒÐ½Ð¾ Ð¾Ð±Ñ€Ð°Ñ‰Ð°ÐµÑ‚ÑÑ Ðº Play In Code, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð³Ð¾ÑÑƒÐ´Ð°Ñ€ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¼ Ð¾Ñ€Ð³Ð°Ð½Ð°Ð¼ Ð² ÑÐ»ÑƒÑ‡Ð°ÑÑ…, Ð¿Ñ€ÐµÐ´ÑƒÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð½Ñ‹Ñ… Ð·Ð°ÐºÐ¾Ð½Ð¾Ð¼.",
          "Ð¡Ð¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²ÑƒÐµÑ‚ Ñ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÑ‚ ÑÐ¸Ð»Ñƒ Ð´Ð¾ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ñ Ñ†ÐµÐ»ÐµÐ¹ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸ Ð»Ð¸Ð±Ð¾ Ð´Ð¾ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° ÐµÐ³Ð¾ Ð¾Ñ‚Ð·Ñ‹Ð²Ð°, ÐµÑÐ»Ð¸ Ð¸Ð½Ð¾Ðµ Ð½Ðµ Ñ‚Ñ€ÐµÐ±ÑƒÐµÑ‚ÑÑ Ð¿Ð¾ Ð·Ð°ÐºÐ¾Ð½Ñƒ.",
        ],
      },
      {
        title: "6. ÐžÑ‚Ð·Ñ‹Ð² ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ",
        paragraphs: [
          "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¾Ñ‚Ð¾Ð·Ð²Ð°Ñ‚ÑŒ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ, Ð½Ð°Ð¿Ñ€Ð°Ð²Ð¸Ð² ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ñ‡ÐµÑ€ÐµÐ· Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ðµ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ðµ ÐºÐ°Ð½Ð°Ð»Ñ‹ Play In Code.",
        ],
      },
      {
        title: "7. ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Consent to Personal Data Processing",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. Scope of Consent",
        paragraphs: [
          "By contacting Play In Code through the available communication channels, including following a WhatsApp link, sending a message in a messenger, or otherwise voluntarily providing personal information, the user gives consent to the processing of personal data under the terms set out below.",
        ],
      },
      {
        title: "2. What Data May Be Processed",
        items: [
          "name and other identifying details;",
          "phone number;",
          "child's name;",
          "child's age;",
          "information about the child's interests, learning goals, and preferred lesson format;",
          "preferred contact time and communication method;",
          "other information contained in the user's messages.",
        ],
      },
      {
        title: "3. Purposes of Processing",
        items: [
          "contacting the user in response to their request;",
          "booking a trial lesson;",
          "selecting a suitable learning program;",
          "coordinating scheduling and organizational details;",
          "maintaining communication history;",
          "improving service quality and communication.",
        ],
      },
      {
        title: "4. Data Processing Actions",
        paragraphs: ["Play In Code may perform the following actions with personal data:"],
        items: [
          "collection, recording, and systematization;",
          "storage and retention;",
          "clarification and updating;",
          "use;",
          "anonymization, blocking, deletion, and destruction.",
        ],
      },
      {
        title: "5. Transfers and Duration of Consent",
        paragraphs: [
          "Data may be accessible to technical contractors, communication services and messengers used by the user to contact Play In Code, and public authorities where required by law.",
          "This consent takes effect from the moment the data is provided and remains valid until the purposes of processing are achieved or until the consent is withdrawn, unless otherwise required by law.",
        ],
      },
      {
        title: "6. Withdrawal of Consent",
        paragraphs: [
          "The user may withdraw consent by sending a message through the available Play In Code contact channels.",
        ],
      },
      {
        title: "7. Contacts",
        items: contactItems,
      },
    ],
  },
};

export function LocalizedPrivacyPolicy() {
  return <LocalizedDocument content={privacyContent} />;
}

export function LocalizedTerms() {
  return <LocalizedDocument content={termsContent} />;
}

export function LocalizedConsent() {
  return <LocalizedDocument content={consentContent} />;
}

