"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { content } from "@/content/ru";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.stats.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.stats.description}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.stats.list.map((stat, idx) => (
            <motion.div key={idx} variants={scaleIn}>
              <Card variant="outline" className="text-center py-6">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted">
                {stat.label}
              </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
