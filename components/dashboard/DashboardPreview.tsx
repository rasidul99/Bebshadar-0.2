"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();

  const tabs = [
    {
      id: 0,
      title: language === "BN" ? "মাল্টি-ব্রাঞ্চ স্টক ও সেলস" : "Multi-Branch Stock & Sales",
      mobileTitle: language === "BN" ? "স্টক ও সেলস" : "Stock & Sales",
      image: "/dashboard-tab-2.png",
      alt: "Bebshadar Multi-Branch Stock and Sales View",
    },
    {
      id: 1,
      title: language === "BN" ? "রিয়েল-টাইম POS বিলিং" : "Real-Time POS Billing",
      mobileTitle: language === "BN" ? "POS বিলিং" : "POS Billing",
      image: "/dashboard-tab-1.png",
      alt: "Bebshadar Real-Time POS and Overview Dashboard",
    },
    {
      id: 2,
      title: language === "BN" ? "স্বয়ংক্রিয় বাকি ও স্টাফ হিসাব" : "Automated Dues & Staff",
      mobileTitle: language === "BN" ? "বাকি ও স্টাফ" : "Dues & Staff",
      image: "/dashboard-tab-3.png",
      alt: "Bebshadar User and Dues Management",
    },
  ];

  // Auto-change tab every 4.5 seconds (pauses on user hover for comfortable reading)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, tabs.length]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center pb-0 group/preview"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. BACKGROUND BANNER (Full Tall Presence matching max-w-6xl) */}
      <div className="w-full h-[360px] sm:h-[560px] lg:h-[620px] rounded-[24px] sm:rounded-[36px] overflow-hidden relative shadow-sm border border-slate-200/50">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fbf.png"
            alt="Dashboard Showcase Background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* TOP PILL TAB BAR */}
        <div className="relative z-10 pt-3 sm:pt-6 flex justify-center px-2 sm:px-4 w-full">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/95 backdrop-blur-xl rounded-full p-1 sm:px-3 sm:py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-200/90 text-[11px] sm:text-sm font-semibold select-none overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 overflow-hidden ${
                    isSelected
                      ? "text-navy-950 font-bold bg-slate-100/90 shadow-2xs"
                      : "text-slate-500 hover:text-navy-950 hover:bg-slate-50/60 font-medium"
                  }`}
                >
                  {/* Selected checkmark with black circular background */}
                  {isSelected ? (
                    <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm animate-in zoom-in-50 duration-200">
                      <Check className="w-2 h-2 sm:w-3 sm:h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300 shrink-0" />
                  )}

                  {/* Responsive Tab Label: Full on desktop, compact on mobile */}
                  <span className="hidden sm:inline">{tab.title}</span>
                  <span className="sm:hidden">{tab.mobileTitle}</span>

                  {/* Sleek Active Tab Progress Bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-2.5 right-2.5 sm:left-3 sm:right-3 h-[2px] bg-slate-200/80 rounded-full overflow-hidden">
                      <div
                        key={`${activeTab}-${isPaused}`}
                        className={`h-full bg-gradient-to-r from-brand-600 to-purple-600 rounded-full ${
                          isPaused ? "w-full opacity-70" : "animate-tab-progress"
                        }`}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. CENTERED DASHBOARD CARD (Elevated z-index for unclipped drop shadow) */}
      <div className="relative z-30 -mt-[295px] sm:-mt-[455px] lg:-mt-[515px] w-[95%] sm:w-[88%] bg-white rounded-xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(10,24,52,0.22),0_0_1px_1px_rgba(0,0,0,0.04)] border border-slate-200/90 overflow-hidden aspect-[16/10.5] sm:aspect-[16/10]">
        {tabs.map((tab, idx) => (
          <div
            key={tab.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeTab === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={tab.image}
              alt={tab.alt}
              fill
              className="object-cover object-top transition-opacity duration-500"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
