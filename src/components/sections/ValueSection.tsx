"use client";

import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerFast, viewport } from "@/lib/motion";

export function ValueSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.value.heading}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Child */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {content.value.forChild.title}
            </h3>
            <motion.ul
              className="space-y-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {content.value.forChild.items.map((item, idx) => (
                <motion.li key={idx} className="flex items-start gap-3" variants={fadeUp}>
                  <span className="text-primary text-xl mt-0.5">✓</span>
                  <span className="text-base text-muted">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* For Parent */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {content.value.forParent.title}
            </h3>
            <motion.ul
              className="space-y-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {content.value.forParent.items.map((item, idx) => (
                <motion.li key={idx} className="flex items-start gap-3" variants={fadeUp}>
                  <span className="text-primary text-xl mt-0.5">✓</span>
                  <span className="text-base text-muted">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
