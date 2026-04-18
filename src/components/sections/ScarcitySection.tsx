"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

export function ScarcitySection() {
  const content = useContent();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-primary-light to-[#f3fbea]">
      <Container size="sm" className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.scarcity.heading}
        </motion.h2>
        <motion.p
          className="text-lg text-muted mb-8 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.scarcity.description}
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Button
          href={getWhatsAppUrl(content.whatsapp.trialLessonMessage)}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          onClick={() => trackWhatsAppClick("scarcity")}
        >
          {content.scarcity.ctaText}
          {"\u00A0→"}
        </Button>
        </motion.div>
      </Container>
    </section>
  );
}
