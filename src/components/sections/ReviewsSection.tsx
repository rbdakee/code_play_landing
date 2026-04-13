"use client";

import { Container } from "@/components/ui/Container";
import { Carousel } from "@/components/ui/Carousel";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

interface ReviewCardProps {
  quote: string;
  author?: string;
  country?: string;
}

function ReviewCard({ quote, author, country }: ReviewCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-lg shadow-lg p-6 h-full">
      <p className="text-sm text-muted mb-4 italic leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <div className="pt-4 border-t border-secondary-bg">
          <p className="text-xs font-semibold text-foreground">
            {author}
          </p>
          {country && (
            <p className="text-xs text-muted">{country}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function ReviewsSection() {
  const content = useContent();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary-light to-white">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.reviews.heading}
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {content.reviews.description}
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Carousel
          slides={content.reviews.list.map((review) => (
            <div key={review.id} className="px-1">
              <div className="max-w-3xl mx-auto">
                <ReviewCard
                  quote={review.quote}
                  author={review.author}
                  country={review.country}
                />
              </div>
            </div>
          ))}
        />
        </motion.div>
      </Container>
    </section>
  );
}
