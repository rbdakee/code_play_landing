"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function HeroSection() {
  return (
    <section className="bg-white pt-8 md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24">
      <Container size="sm" className="text-center">
        {/* Course badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {["Scratch", "Roblox Studio", "Python"].map((course) => (
            <motion.span
              key={course}
              className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full"
              variants={fadeUp}
            >
              {course}
            </motion.span>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.hero.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          {content.hero.subheading}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mx-auto"
          >
            {content.hero.ctaText} →
          </Button>
        </motion.div>

        {/* CTA Subtext */}
        <motion.p
          className="text-sm text-muted mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
        >
          {content.hero.ctaSubtext}
        </motion.p>

        {/* Trust badges */}
        <motion.div
          className="flex flex-col gap-3 pt-8 border-t border-secondary-bg"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {content.hero.trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center gap-2 text-sm text-muted"
              variants={fadeUp}
            >
              <span className="text-primary">✓</span>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
