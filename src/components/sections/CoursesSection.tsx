"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

export function CoursesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary-bg">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.courses.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.courses.subheading}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.courses.list.map((course) => (
            <motion.div key={course.id} variants={scaleIn}>
              <Card variant="elevated">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full">
                  {course.ageRange}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {course.heading}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {course.description}
              </p>
              <div className="mb-6">
                <p className="text-xs font-semibold text-foreground mb-3 uppercase">
                  Ребёнок:
                </p>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary text-xs mt-1">✓</span>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full"
              >
                {course.ctaText}
              </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
