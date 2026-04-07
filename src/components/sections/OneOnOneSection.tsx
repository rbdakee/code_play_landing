"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { content } from "@/content/ru";

export function OneOnOneSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#fbfdf9]">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
          {content.oneOnOne.heading}
        </h2>
        <p className="text-lg text-muted mb-12 text-center leading-relaxed">
          {content.oneOnOne.description}
        </p>

        {/* Key considerations */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {content.oneOnOne.considerations.map((item, idx) => (
              <Card key={idx} variant="outline" className="text-center">
                <p className="text-sm font-medium text-primary">{item}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted italic">
            {content.oneOnOne.conclusionText}
          </p>
        </div>

        {/* Follow-up box */}
        <Card variant="elevated" className="bg-primary-light border-primary">
          <h3 className="font-bold text-foreground mb-4">
            {content.oneOnOne.followUpTitle}
          </h3>
          <ul className="space-y-2">
            {content.oneOnOne.followUpItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                <span className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
