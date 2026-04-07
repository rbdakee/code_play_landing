"use client";

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  slides: ReactNode[];
  autoPlayMs?: number;
  className?: string;
}

function toRealIndex(virtualIndex: number, slideCount: number): number {
  return ((virtualIndex - 1) % slideCount + slideCount) % slideCount;
}

export function Carousel({
  slides,
  autoPlayMs = 6000,
  className,
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideCount = slides.length;
  const hasLoop = slideCount > 1;
  const startVirtualIndex = hasLoop ? 1 : 0;

  const currentRealIndexRef = useRef(0);
  const currentVirtualIndexRef = useRef(startVirtualIndex);

  const extendedSlides = useMemo(() => {
    if (!hasLoop) return slides;
    return [slides[slideCount - 1], ...slides, slides[0]];
  }, [hasLoop, slideCount, slides]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const clearScrollEndTimer = useCallback(() => {
    if (scrollEndTimerRef.current) {
      window.clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = null;
    }
  }, []);

  const scrollToVirtualIndex = useCallback((virtualIndex: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    if (!track) return;

    const targetLeft = virtualIndex * track.clientWidth;
    track.scrollTo({ left: targetLeft, behavior });

    currentVirtualIndexRef.current = virtualIndex;
    const realIndex = hasLoop
      ? toRealIndex(virtualIndex, slideCount)
      : Math.min(slideCount - 1, Math.max(0, virtualIndex));
    currentRealIndexRef.current = realIndex;
    setCurrentIndex(realIndex);
  }, [hasLoop, slideCount]);

  const jumpToVirtualIndex = useCallback((virtualIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const previousScrollBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";

    scrollToVirtualIndex(virtualIndex, "auto");

    // Restore on next frame so user-initiated and autoplay transitions stay smooth.
    requestAnimationFrame(() => {
      track.style.scrollBehavior = previousScrollBehavior;
    });
  }, [scrollToVirtualIndex]);

  const scrollToRealIndex = useCallback((realIndex: number) => {
    if (slideCount === 0) return;

    const safeReal = ((realIndex % slideCount) + slideCount) % slideCount;
    if (!hasLoop) {
      scrollToVirtualIndex(safeReal, "smooth");
      return;
    }

    const currentVirtual = currentVirtualIndexRef.current;
    let targetVirtual = safeReal + 1;

    if (currentVirtual === slideCount && safeReal === 0) {
      targetVirtual = slideCount + 1;
    } else if (currentVirtual === 1 && safeReal === slideCount - 1) {
      targetVirtual = 0;
    }

    scrollToVirtualIndex(targetVirtual, "smooth");
  }, [hasLoop, scrollToVirtualIndex, slideCount]);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();

    if (!hasLoop || !isInView || document.visibilityState !== "visible") return;

    autoPlayRef.current = window.setInterval(() => {
      const nextReal = (currentRealIndexRef.current + 1) % slideCount;
      scrollToRealIndex(nextReal);
    }, autoPlayMs);
  }, [autoPlayMs, hasLoop, isInView, scrollToRealIndex, slideCount, stopAutoPlay]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    // Start from the first real slide (after leading clone).
    const initialVirtual = hasLoop ? 1 : 0;
    const initialLeft = initialVirtual * track.clientWidth;
    track.scrollLeft = initialLeft;
    currentVirtualIndexRef.current = initialVirtual;
    currentRealIndexRef.current = 0;
    setCurrentIndex(0);
  }, [hasLoop, slideCount]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
      clearScrollEndTimer();
    };
  }, [clearScrollEndTimer, startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    const handleScroll = () => {
      const width = track.clientWidth;
      if (!width) return;

      const virtualIndex = Math.round(track.scrollLeft / width);
      currentVirtualIndexRef.current = virtualIndex;

      const realIndex = hasLoop
        ? toRealIndex(virtualIndex, slideCount)
        : Math.min(slideCount - 1, Math.max(0, virtualIndex));
      currentRealIndexRef.current = realIndex;
      setCurrentIndex(realIndex);

      clearScrollEndTimer();
      scrollEndTimerRef.current = window.setTimeout(() => {
        if (!hasLoop) return;

        if (currentVirtualIndexRef.current === 0) {
          jumpToVirtualIndex(slideCount);
        } else if (currentVirtualIndexRef.current === slideCount + 1) {
          jumpToVirtualIndex(1);
        }
      }, 140);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearScrollEndTimer();
      track.removeEventListener("scroll", handleScroll);
    };
  }, [clearScrollEndTimer, hasLoop, jumpToVirtualIndex, slideCount]);

  if (slideCount === 0) return null;

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      onTouchStart={stopAutoPlay}
      onTouchEnd={startAutoPlay}
    >
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {extendedSlides.map((slide, idx) => (
          <div key={`slide-${idx}`} className="w-full shrink-0 snap-start">
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollToRealIndex(currentIndex - 1)}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow hover:bg-white transition-colors"
        aria-label="Предыдущий слайд"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollToRealIndex(currentIndex + 1)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow hover:bg-white transition-colors"
        aria-label="Следующий слайд"
      >
        ›
      </button>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            onClick={() => scrollToRealIndex(idx)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              idx === currentIndex
                ? "bg-primary scale-110"
                : "bg-muted-light hover:bg-muted"
            )}
            aria-label={`Перейти к слайду ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
