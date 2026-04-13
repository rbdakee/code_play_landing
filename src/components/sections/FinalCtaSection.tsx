"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30); // 30ms per character

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <h2
      ref={ref}
      className="mx-auto max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 min-h-[1.4em] md:min-h-[1.3em] lg:min-h-[1.2em]"
    >
      {displayedText}
      <span
        className={`${
          isComplete ? "opacity-0" : "opacity-100"
        } animate-[cursor-blink_1s_ease-in-out_infinite]`}
      >
        |
      </span>
    </h2>
  );
}

export function FinalCtaSection() {
  const content = useContent();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary-bg to-primary-light">
      <Container size="md" className="text-center">
        <TypewriterText text={content.finalCta.heading} />
        <motion.p
          className="text-lg text-muted mb-8 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.finalCta.subheading}
        </motion.p>
        <motion.div
          className="mb-8"
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
            className="mx-auto"
          >
            {content.finalCta.ctaText}
            {"\u00A0→"}
          </Button>
        </motion.div>
        <motion.p
          className="inline-flex max-w-full items-center justify-center rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-2 text-sm font-medium text-rose-700/85"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.finalCta.ctaSubtext}
        </motion.p>
      </Container>
    </section>
  );
}
