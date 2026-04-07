"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/ru";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export function ScarcitySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
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
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
        >
          {content.scarcity.ctaText} →
        </Button>
        </motion.div>
      </Container>
    </section>
  );
}
