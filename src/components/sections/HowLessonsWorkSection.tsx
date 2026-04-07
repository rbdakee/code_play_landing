"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { content } from "@/content/ru";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerFast, viewport } from "@/lib/motion";

export function HowLessonsWorkSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container size="sm">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.howLessonsWork.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.howLessonsWork.description}
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Card variant="elevated" className="mb-8">
          <motion.ul
            className="space-y-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {content.howLessonsWork.details.map((detail, idx) => (
              <motion.li key={idx} className="flex items-start gap-3" variants={fadeUp}>
                <span className="text-primary font-bold shrink-0">•</span>
                <span className="text-base text-muted">{detail}</span>
              </motion.li>
            ))}
          </motion.ul>
          </Card>
        </motion.div>

        <motion.p
          className="text-center text-sm text-muted bg-primary-light p-4 rounded-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.howLessonsWork.additionalText}
        </motion.p>
      </Container>
    </section>
  );
}
