import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type LegalDocumentProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalDocument({ title, updatedAt, children }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-background pt-28 pb-16">
      <Container className="max-w-4xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Юридическая информация
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">Последнее обновление: {updatedAt}</p>
        </div>

        <article className="space-y-8 text-base leading-8 text-foreground">
          {children}
        </article>
      </Container>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="space-y-4 text-muted">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-6 text-muted">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}
