"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";

const HERO_SECTION_ID = "hero-section";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const heroSection = document.getElementById(HERO_SECTION_ID);
    if (!heroSection) return;

    heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      heroSection.focus({ preventScroll: true });
    }, 420);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Вернуться к началу страницы"
      className={cn(
        "fixed bottom-5 right-4 z-50 grid h-11 w-11 place-items-center rounded-full",
        "bg-primary text-white shadow-lg transition-all duration-300",
        "hover:opacity-90 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
        "md:bottom-6 md:right-6",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none"
      )}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}
