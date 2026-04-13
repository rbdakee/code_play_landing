"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { motion, useInView } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!isInView) return;

    const numeric = Number((value.match(/\d+/) || [])[0]);
    if (!numeric) {
      setDisplay(value);
      return;
    }

    const hasPercent = value.includes("%");
    const hasPlus = value.includes("+");
    let current = 0;
    const duration = 1200;
    const stepMs = 24;
    const steps = Math.max(1, Math.floor(duration / stepMs));
    const increment = numeric / steps;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= numeric) {
        window.clearInterval(timer);
        current = numeric;
      }

      const rounded = Math.round(current);
      if (hasPercent) {
        setDisplay(`${rounded}%`);
      } else if (hasPlus) {
        setDisplay(`[${rounded}]+`);
      } else {
        setDisplay(String(rounded));
      }
    }, stepMs);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsSection() {
  const content = useContent();
  const progress = [72, 92, 58, 68, 100];

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
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={scaleIn} className="lg:col-span-2">
            <Card variant="elevated" className="h-full">
              <p className="text-sm text-muted mb-3">{content.stats.chartLabel}</p>
              <div className="rounded-lg bg-primary-light/50 p-3">
                <svg viewBox="0 0 460 180" className="w-full h-[180px]" aria-hidden="true">
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60C849" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#60C849" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#areaFill)"
                    stroke="none"
                    points="10,150 90,120 170,132 250,95 330,85 410,48 410,170 10,170"
                  />
                  <motion.polyline
                    fill="none"
                    stroke="#60C849"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="10,150 90,120 170,132 250,95 330,85 410,48"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={viewport}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                  {[10, 90, 170, 250, 330, 410].map((x, idx) => (
                    <motion.circle
                      key={x}
                      cx={x}
                      cy={[150, 120, 132, 95, 85, 48][idx]}
                      r="5"
                      fill="#60C849"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewport}
                      transition={{ delay: 0.25 + idx * 0.08, duration: 0.25 }}
                    />
                  ))}
                </svg>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card variant="elevated" className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-sm text-muted mb-4">{content.stats.individualFormatTitle}</p>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.45 }}
                className="w-36 h-36 rounded-full grid place-items-center"
                style={{
                  background:
                    "conic-gradient(#60C849 0 360deg, rgba(96,200,73,0.15) 360deg 360deg)",
                }}
              >
                <div className="w-24 h-24 rounded-full bg-white grid place-items-center border border-primary/20">
                  <p className="text-2xl font-bold text-primary">100%</p>
                </div>
              </motion.div>
              <p className="text-xs text-muted mt-4">{content.stats.individualFormatDescription}</p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.stats.list.map((stat, idx) => (
            <motion.div key={idx} variants={scaleIn} whileHover={{ y: -4 }}>
              <Card variant="outline" className="py-6">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="text-xs md:text-sm text-muted min-h-[40px]">
                  {stat.label}
                </p>
                <div className="mt-4 h-2 rounded-full bg-primary-light overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress[idx]}%` }}
                    viewport={viewport}
                    transition={{ duration: 0.8, delay: idx * 0.08 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
