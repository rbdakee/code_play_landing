"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-foreground hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Code Play"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </a>

        {/* CTA Button */}
        <Button
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="text-sm"
        >
          Записаться
        </Button>
      </Container>
    </header>
  );
}
