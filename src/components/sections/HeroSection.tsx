"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion, useAnimation } from "framer-motion";
import { useContent } from "@/lib/i18n";

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

function JumpingBadge({ label }: { label: string }) {
  const controls = useAnimation();

  useEffect(() => {
    let timerId: number | null = null;
    let isMounted = true;

    const scheduleJump = () => {
      const delay = 700 + Math.random() * 2200;
      timerId = window.setTimeout(async () => {
        if (!isMounted) return;

        await controls.start({
          y: [0, -9, 0],
          transition: { duration: 0.42, ease: "easeOut" },
        });

        if (isMounted) scheduleJump();
      }, delay);
    };

    scheduleJump();

    return () => {
      isMounted = false;
      if (timerId) window.clearTimeout(timerId);
    };
  }, [controls]);

  return (
    <motion.a
      href="#courses-section"
      className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      variants={fadeUp}
      animate={controls}
    >
      {label}
    </motion.a>
  );
}

export function HeroSection() {
  const content = useContent();

  return (
    <section
      id="hero-section"
      tabIndex={-1}
      className="bg-gradient-to-br from-white via-white to-primary-light/30 pt-8 md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24"
    >
      <Container size="md" className="text-center">
        {/* Course badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.hero.courseBadges.map((course) => (
            <JumpingBadge key={course} label={course} />
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="mx-auto max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.hero.heading}
        </motion.h1>

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

        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.hero.featureBadges.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

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
            href={getWhatsAppUrl(content.whatsapp.trialLessonMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mx-auto"
          >
            {content.hero.ctaText}
            {"\u00A0→"}
          </Button>
        </motion.div>

        {/* CTA Subtext */}
        <motion.p
          className="mb-8 inline-flex max-w-full items-center justify-center rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-2 text-sm font-medium text-rose-700/85"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
        >
          {content.hero.ctaSubtext}
        </motion.p>
      </Container>
    </section>
  );
}
