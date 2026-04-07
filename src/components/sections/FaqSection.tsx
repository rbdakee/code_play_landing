"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/ru";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerFast, viewport } from "@/lib/motion";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container size="md">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.faq.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.faq.description}
        </motion.p>

        <motion.div
          className="space-y-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.faq.list.map((item) => (
            <motion.div
              key={item.id}
              className="border border-secondary-bg rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary-bg transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground">
                  {item.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform shrink-0 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-secondary-bg border-t border-secondary-bg">
                      <p className="text-sm text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
