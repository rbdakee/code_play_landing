"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewport } from "@/lib/motion";
import { useContent, useLanguage } from "@/lib/i18n";
import Link from "next/link";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.45 3.45 1.31 4.96L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.83-4.4 9.83-9.84 0-2.63-1.03-5.1-2.82-7.04Zm-7.02 15.22h-.01a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.18.83.85-3.09-.2-.32a8.1 8.1 0 0 1-1.25-4.3c0-4.5 3.67-8.17 8.18-8.17 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.17-8.17 8.17Zm4.48-6.12c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.13-.06-.09-.22-.14-.46-.26Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm-.19 1.8A3.76 3.76 0 0 0 3.8 7.56v8.88a3.76 3.76 0 0 0 3.76 3.76h8.88a3.76 3.76 0 0 0 3.76-3.76V7.56a3.76 3.76 0 0 0-3.76-3.76H7.56Zm9.64 1.35a1.09 1.09 0 1 1 0 2.18 1.09 1.09 0 0 1 0-2.18ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.35 3.35 0 0 0 12 8.66Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21.44 4.62c.32-.13.67.15.59.49l-2.92 13.77c-.06.3-.4.44-.67.28l-4.46-3.01-2.28 2.2c-.23.22-.61.1-.67-.21l-.47-3.12 7.98-7.2c.18-.16-.02-.44-.23-.31l-9.86 6.21-3.58-1.18c-.38-.13-.4-.66-.03-.81L21.44 4.62Z" />
    </svg>
  );
}

export function Footer() {
  const content = useContent();
  const { locale } = useLanguage();
  const prefix = locale === "en" ? "/en" : "";

  return (
    <footer className="bg-secondary-bg border-t border-muted-light">
      <Container className="py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Company Info */}
          <motion.div variants={fadeUp}>
            <h3 className="font-bold text-lg text-foreground mb-2">
              {content.footer.companyName}
            </h3>
            <p className="text-sm text-muted mb-4">
              {content.footer.companyDescription}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-foreground mb-4">{content.footer.infoHeading}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${prefix}/privacy-policy`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/terms`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/consent-to-data-processing`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.dataProcessing}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-foreground mb-4">{content.footer.contactsHeading}</h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <WhatsAppIcon />
                {content.footer.social.whatsapp}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <InstagramIcon />
                {INSTAGRAM_HANDLE}
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <TelegramIcon />
                {TELEGRAM_HANDLE}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-muted-light pt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted">
            <p>{content.footer.copyright}</p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
