"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

export function TrialLessonSection() {
  const content = useContent();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#fbfdf9]">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.trialLesson.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.trialLesson.subheading}
        </motion.p>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.trialLesson.steps.map((step, idx) => (
            <motion.div key={step.number} className="relative" variants={scaleIn}>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {idx < content.trialLesson.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-5 w-0.5 h-12 bg-primary-light"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
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
          >
            {content.trialLesson.ctaText}
            {"\u00A0→"}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
