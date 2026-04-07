"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion, useAnimation } from "framer-motion";

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
    <motion.span
      className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full"
      variants={fadeUp}
      animate={controls}
    >
      {label}
    </motion.span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero-section"
      tabIndex={-1}
      className="bg-gradient-to-br from-white via-white to-primary-light/30 pt-8 md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24"
    >
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
            <JumpingBadge key={course} label={course} />
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
          Программирование для детей
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          Scratch, Roblox и Python с наставником. <strong>Диагностика</strong> и
          пошаговый <strong>план</strong> для родителя уже на первом уроке.
        </motion.p>

        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {["Индивидуально", "7-16 лет", "Онлайн"].map((item) => (
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

      </Container>
    </section>
  );
}
