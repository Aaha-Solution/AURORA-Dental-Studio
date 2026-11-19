"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export function ScrollArrow() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't overwrite state while smooth-scrolling from click
      if (isProgrammaticScrollRef.current) return;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const currentScroll = window.scrollY;
      // If past 40% of page, arrow points up; otherwise points down
      setIsAtBottom(currentScroll > scrollHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const willGoUp = isAtBottom;

    // Immediately toggle state so the arrow turns right away
    setIsAtBottom(!willGoUp);

    // Lock scroll listener temporarily while smooth scrolling
    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1300);

    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: number | string | HTMLElement,
            options?: { duration?: number }
          ) => void;
          limit?: number;
        };
      }
    ).__lenis;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (willGoUp) {
      // Scroll to top
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: 0,
          behavior: reduce ? "auto" : "smooth",
        });
      }
    } else {
      // Scroll to bottom
      const bottom =
        lenis?.limit ??
        document.documentElement.scrollHeight - window.innerHeight;

      if (lenis) {
        lenis.scrollTo(bottom, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: reduce ? "auto" : "smooth",
        });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
      title={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
      className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-ink/90 text-cream shadow-[0_8px_30px_rgba(16,24,32,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-ink hover:text-gold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <ArrowDown
        className={`h-5 w-5 transition-transform duration-500 ease-out ${
          isAtBottom ? "rotate-180" : "rotate-0"
        } sm:h-6 sm:w-6`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}
