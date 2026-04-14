"use client";

import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

export function WhyUsSection() {
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
          {content.whyUs.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.whyUs.description}
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Carousel
            desktopSlidesPerView={3}
            slides={content.whyUs.benefits.map((benefit) => (
              <div key={benefit.id} className="px-2 h-full">
                <Card className="h-full">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    {benefit.heading}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </div>
            ))}
          />
        </motion.div>
      </Container>
    </section>
  );
}
