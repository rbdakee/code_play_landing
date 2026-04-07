"use client";

import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";

export function CasesSection() {
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
          {content.cases.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.cases.description}
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Carousel
          slides={content.cases.list.map((caseItem) => (
            <div key={caseItem.id} className="px-1">
              <Card variant="elevated" className="max-w-3xl mx-auto">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-sm md:text-base text-muted mb-4 leading-relaxed">
                  {caseItem.story}
                </p>
                <div className="pt-4 border-t border-secondary-bg">
                  <p className="text-sm md:text-base font-semibold text-primary">
                    Результат: {caseItem.result}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        />
        </motion.div>
      </Container>
    </section>
  );
}
