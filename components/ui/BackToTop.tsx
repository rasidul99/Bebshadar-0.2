"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BackToTop() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const percent = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, percent)));
        // Show after scrolling 20% down from header/top
        setIsVisible(percent >= 20);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const label = language === "BN" ? "উপরে যান" : "Back to Top";

  // SVG circle calculation for progress ring (radius = 20, perimeter = 2 * PI * 20 = 125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-8 pointer-events-none scale-90"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        title={label}
        aria-label={label}
        className="relative group w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-white/95 hover:bg-white text-brand-700 shadow-[0_12px_32px_-6px_rgba(112,72,232,0.3),0_0_1px_1px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer select-none"
      >
        {/* Circular Scroll Progress Ring */}
        <svg
          className="absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Subtle background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            className="text-purple-100/80"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Dynamic Brand Purple Progress Stroke */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            className="text-brand-600 transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center ArrowUp Icon with micro-bounce on hover */}
        <ArrowUp className="w-5 h-5 text-brand-700 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Floating Tooltip Pill on Hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-navy-950/90 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md backdrop-blur-sm">
          {label}
        </span>
      </button>
    </div>
  );
}
