"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { useContent, useLanguage } from "@/lib/i18n";

export function Header() {
  const content = useContent();
  const { locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-transform duration-200",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white"
      )}
    >
      <Container className="flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-foreground hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt={content.header.logoAlt}
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </a>

        <div className="flex items-center gap-3">
          <Button
            href={getWhatsAppUrl(content.whatsapp.trialLessonMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="text-sm whitespace-nowrap"
          >
            {content.header.ctaText}
          </Button>

          <div className="inline-flex rounded-full border border-primary/15 bg-white/90 p-1 shadow-sm">
            {(["ru", "en"] as const).map((lang) => {
              const isActive = locale === lang;

              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted hover:text-foreground"
                  )}
                  aria-pressed={isActive}
                >
                  {lang.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
