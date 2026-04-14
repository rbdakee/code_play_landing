"use client";

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  slides: ReactNode[];
  autoPlayMs?: number;
  className?: string;
  /** How many slides to show side-by-side on md+ screens (default 1 = same as mobile) */
  desktopSlidesPerView?: number;
}

function toRealIndex(virtualIndex: number, slideCount: number): number {
  return ((virtualIndex - 1) % slideCount + slideCount) % slideCount;
}

export function Carousel({
  slides,
  autoPlayMs = 6000,
  className,
  desktopSlidesPerView = 1,
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Keep a ref so scroll handlers always see the latest value without stale closures.
  const slidesPerViewRef = useRef(1);

  const slideCount = slides.length;
  const hasLoop = slideCount > 1;

  const currentRealIndexRef = useRef(0);
  const currentVirtualIndexRef = useRef(hasLoop ? 1 : 0);

  // ── Sync slidesPerView ref before any effects that depend on it ──────────
  // NOTE: declared first so it runs before the init effect below.
  useEffect(() => {
    slidesPerViewRef.current = slidesPerView;
  }, [slidesPerView]);

  // ── Detect desktop / mobile ──────────────────────────────────────────────
  useEffect(() => {
    if (desktopSlidesPerView <= 1) return;

    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryList | MediaQueryListEvent) => {
      setSlidesPerView(e.matches ? desktopSlidesPerView : 1);
    };
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [desktopSlidesPerView]);

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

  // ── Core scroll helper ───────────────────────────────────────────────────
  //
  // For slidesPerView = 1:  targetLeft = virtualIndex * slideWidth
  //   → the active slide IS the only visible slide.
  //
  // For slidesPerView = 3:  targetLeft = (virtualIndex - 1) * slideWidth
  //   → one clone/slide sits to the LEFT, active slide is CENTERED,
  //     one slide sits to the RIGHT.
  //
  const scrollToVirtualIndex = useCallback(
    (virtualIndex: number, behavior: ScrollBehavior) => {
      const track = trackRef.current;
      if (!track) return;

      const spv = slidesPerViewRef.current;
      const slideWidth = track.clientWidth / spv;
      const offset = spv > 1 ? 1 : 0;
      const targetLeft = Math.max(0, (virtualIndex - offset) * slideWidth);

      track.scrollTo({ left: targetLeft, behavior });

      currentVirtualIndexRef.current = virtualIndex;
      const realIndex = hasLoop
        ? toRealIndex(virtualIndex, slideCount)
        : Math.min(slideCount - 1, Math.max(0, virtualIndex - offset));
      currentRealIndexRef.current = realIndex;
      setCurrentIndex(realIndex);
    },
    [hasLoop, slideCount]
  );

  const jumpToVirtualIndex = useCallback(
    (virtualIndex: number) => {
      const track = trackRef.current;
      if (!track) return;

      const previousScrollBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = "auto";
      scrollToVirtualIndex(virtualIndex, "auto");
      requestAnimationFrame(() => {
        track.style.scrollBehavior = previousScrollBehavior;
      });
    },
    [scrollToVirtualIndex]
  );

  const scrollToRealIndex = useCallback(
    (realIndex: number) => {
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
    },
    [hasLoop, scrollToVirtualIndex, slideCount]
  );

  // ── Auto-play ────────────────────────────────────────────────────────────
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (!hasLoop || !isInView || document.visibilityState !== "visible") return;

    autoPlayRef.current = window.setInterval(() => {
      const nextReal = (currentRealIndexRef.current + 1) % slideCount;
      scrollToRealIndex(nextReal);
    }, autoPlayMs);
  }, [autoPlayMs, hasLoop, isInView, scrollToRealIndex, slideCount, stopAutoPlay]);

  // ── Init scroll position (re-runs when slidesPerView changes) ────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    const spv = slidesPerViewRef.current;
    const slideWidth = track.clientWidth / spv;
    const offset = spv > 1 ? 1 : 0;
    const initialVirtual = hasLoop ? 1 : 0;
    track.scrollLeft = Math.max(0, (initialVirtual - offset) * slideWidth);
    currentVirtualIndexRef.current = initialVirtual;
    currentRealIndexRef.current = 0;
    setCurrentIndex(0);
  }, [hasLoop, slideCount, slidesPerView]);

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
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") startAutoPlay();
      else stopAutoPlay();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [startAutoPlay, stopAutoPlay]);

  // ── Scroll detection ─────────────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideCount === 0) return;

    const handleScroll = () => {
      const width = track.clientWidth;
      if (!width) return;

      const spv = slidesPerViewRef.current;
      const slideWidth = width / spv;
      const offset = spv > 1 ? 1 : 0;
      const virtualIndex = Math.round(track.scrollLeft / slideWidth) + offset;

      currentVirtualIndexRef.current = virtualIndex;
      const realIndex = hasLoop
        ? toRealIndex(virtualIndex, slideCount)
        : Math.min(slideCount - 1, Math.max(0, virtualIndex - offset));
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
  }, [clearScrollEndTimer, hasLoop, jumpToVirtualIndex, slideCount, slidesPerView]);

  if (slideCount === 0) return null;

  const prevDot = (currentIndex - 1 + slideCount) % slideCount;
  const nextDot = (currentIndex + 1) % slideCount;

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
          <div
            key={`slide-${idx}`}
            style={{ width: `${100 / slidesPerView}%` }}
            className="shrink-0 snap-start"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Prev / Next arrows — only on mobile (hidden on desktop for 3-per-view) */}
      <button
        type="button"
        onClick={() => scrollToRealIndex(currentIndex - 1)}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow hover:bg-white transition-colors",
          slidesPerView > 1 ? "hidden" : "hidden md:flex"
        )}
        aria-label="Предыдущий слайд"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollToRealIndex(currentIndex + 1)}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow hover:bg-white transition-colors",
          slidesPerView > 1 ? "hidden" : "hidden md:flex"
        )}
        aria-label="Следующий слайд"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, idx) => {
          const isCenter = idx === currentIndex;
          const isAdjacent =
            slidesPerView > 1 && (idx === prevDot || idx === nextDot);
          return (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => scrollToRealIndex(idx)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                isCenter
                  ? "bg-primary scale-110"
                  : isAdjacent
                  ? "bg-primary/35"
                  : "bg-muted-light hover:bg-muted"
              )}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
