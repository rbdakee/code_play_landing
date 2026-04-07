"use client";

import { content } from "@/content/ru";
import { Container } from "@/components/ui/Container";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewport } from "@/lib/motion";

export function Footer() {
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
            <h4 className="font-semibold text-foreground mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.terms}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {content.footer.links.dataProcessing}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/77772270088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <p className="text-sm text-muted">
                {content.footer.social.telegram}
              </p>
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
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="hover:text-foreground transition-colors">
                Русский
              </button>
              <span className="text-muted-light">|</span>
              <button className="hover:text-foreground transition-colors">
                English
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
