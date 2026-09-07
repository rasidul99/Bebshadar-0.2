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
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white ring-[3px] ring-purple-600/30 hover:ring-purple-600/50 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(0,0,0,0.25),0_12px_30px_-4px_rgba(112,72,232,0.55),0_4px_10px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.2),0_18px_38px_-4px_rgba(112,72,232,0.65)] active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.35),0_4px_12px_rgba(112,72,232,0.3)] transition-all duration-200 cursor-pointer select-none"
      >
        {/* Circular Scroll Progress Ring */}
        <svg
          className="absolute -inset-[4px] w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Subtle background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            className="text-white/20"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Dynamic Glowing White Progress Stroke */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.9)] transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center ArrowUp Icon with 3D drop shadow and hover micro-bounce */}
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Floating Tooltip Pill on Hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-navy-950/95 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-[0_4px_14px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-md">
          {label}
        </span>
      </button>
    </div>
  );
}
