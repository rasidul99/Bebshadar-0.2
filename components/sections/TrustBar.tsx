"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

const BRAND_LOGOS = [
  {
    name: "Trivexa",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path d="M5 18L11.5 6H17.5L11 18H5Z" fill="#8E65FF" />
        <path d="M12 22L18.5 10H24.5L18 22H12Z" fill="#B794F6" />
      </svg>
    ),
  },
  {
    name: "Revomia",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L23 9.2V19.6L14 24.8L5 19.6V9.2L14 4Z"
          stroke="#EF4444"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14.4" r="3" fill="#EF4444" />
      </svg>
    ),
  },
  {
    name: "Veltrix",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M6 18.5C6 13.5 10 9 16 9H23M23 9L18.5 4.5M23 9L18.5 13.5"
          stroke="#22C55E"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 19C22 21.5 18.5 23.5 14 23.5H8"
          stroke="#86EFAC"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Brilora",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L24.5 22.5H3.5L14 4Z"
          stroke="#D946EF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="16" r="2.5" fill="#D946EF" />
      </svg>
    ),
  },
  {
    name: "Fluxenta",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3V25M3 14H25M6.22 6.22L21.78 21.78M6.22 21.78L21.78 6.22"
          stroke="#06B6D4"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Novalyx",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="9" height="9" rx="3" fill="#6366F1" />
        <rect x="15" y="4" width="9" height="9" rx="3" fill="#A5B4FC" />
        <rect x="9.5" y="15" width="9" height="9" rx="3" fill="#4F46E5" />
      </svg>
    ),
  },
  {
    name: "Aetheris",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4 3" />
        <circle cx="14" cy="14" r="4.5" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    name: "Quantix",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path d="M4 14H24M14 4V24M7 7L21 21" stroke="#3B82F6" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Synthea",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 14C4 8.5 8.5 4 14 4C19.5 4 24 8.5 24 14"
          stroke="#EC4899"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M8 20C9.5 22.5 12 24 14 24C17.5 24 20.5 21 21.5 17"
          stroke="#F472B6"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "OptiFlow",
    icon: (
      <svg className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 28 28" fill="none">
        <path
          d="M5 20L11 8L17 17L23 6"
          stroke="#10B981"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function TrustBar() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-20px 0px" });

  const trustHeading =
    language === "BN"
      ? "১৭,০০০+ উদ্যোক্তা ও ব্যবসায়ীদের বিশ্বস্ত পছন্দ"
      : "Trusted by 17,000+ founders & business owners";

  return (
    <section ref={ref} className="pt-8 pb-10 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-9 text-center">
          
          {/* Eyebrow / Trust heading (Scroll Triggered) */}
          <p className={`text-xs sm:text-base font-medium text-slate-600 sm:text-slate-700 tracking-tight transition-all duration-300 ${isInView ? "animate-trust-heading" : "opacity-0"}`}>
            {trustHeading}
          </p>

          {/* Infinite Horizontal Marquee Container with edge fade masks (Scroll Triggered) */}
          <div className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${isInView ? "animate-trust-marquee" : "opacity-0"}`}>
            <div className="animate-marquee flex items-center gap-6 sm:gap-14 lg:gap-16 py-1 sm:py-2">
              {/* First Logo Set */}
              {BRAND_LOGOS.map((company, index) => (
                <div
                  key={`logo-1-${company.name}-${index}`}
                  className="flex items-center gap-2 sm:gap-3 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default group"
                >
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {company.icon}
                  </div>
                  <span className="font-bold text-xs sm:text-xl text-slate-800 tracking-tight font-sans">
                    {company.name}
                  </span>
                </div>
              ))}

              {/* Duplicate Logo Set for Seamless Infinite Loop */}
              {BRAND_LOGOS.map((company, index) => (
                <div
                  key={`logo-2-${company.name}-${index}`}
                  className="flex items-center gap-2 sm:gap-3 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default group"
                >
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {company.icon}
                  </div>
                  <span className="font-bold text-xs sm:text-xl text-slate-800 tracking-tight font-sans">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
