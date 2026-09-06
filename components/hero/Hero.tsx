"use client";

import React from "react";
import { Check } from "lucide-react";
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { AnimatedWave } from "@/components/hero/AnimatedWave";
import { useLanguage } from "@/context/LanguageContext";
import { useLeadModal } from "@/context/LeadModalContext";

export function Hero() {
  const { language } = useLanguage();
  const { openModal } = useLeadModal();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("play-demo-video"));
      }, 500);
    }
  };

  const content = {
    EN: {
      headlineLine1: "One system to run your whole business",
      headlineLine2: "sales, stock, staff and accounts.",
      subtitleLine1: "Bebshadar brings POS billing, inventory, purchases, and customer dues (baki)",
      subtitleLine2: "into a single dashboard \u2014 so you always know where your business stands.",
      ctaPrimary: "Start 14-Day Free Trial",
      ctaSecondary: "Watch 2-Min Demo",
      trustPoint1: "No credit card required",
      trustPoint2: "2-min instant setup",
    },
    BN: {
      headlineLine1: "একটিমাত্র সিস্টেমে চালান পুরো ব্যবসা \u2014",
      headlineLine2: "বিক্রি, স্টক, কর্মচারী ও বাকির হিসাব।",
      subtitleLine1: "ব্যবসার পিওএস বিলিং, ইনভেন্টরি, কেনাকাটা ও কাস্টমার বাকির হিসাব রাখুন এক ড্যাশবোর্ডে",
      subtitleLine2: "যাতে যেকোনো সময় নির্ভুলভাবে জানতে পারেন আপনার ব্যবসার সার্বিক অবস্থান।",
      ctaPrimary: "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন",
      ctaSecondary: "২ মিনিটের ডেমো দেখুন",
      trustPoint1: "কোনো ক্রেডিট কার্ড প্রয়োজন নেই",
      trustPoint2: "২ মিনিটে ফ্রি সেটআপ",
    },
  };

  const t = content[language];

  return (
    <section className="relative pt-20 pb-0 sm:pt-36 sm:pb-0 lg:pt-44 lg:pb-0 bg-[#F7F9FC] overflow-hidden">
      {/* Ambient Floating Aurora Glow in Hero Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] sm:w-[850px] lg:w-[1000px] h-[300px] sm:h-[420px] bg-gradient-to-tr from-brand-400/18 via-purple-500/12 to-teal-400/12 rounded-full blur-[100px] pointer-events-none z-0 animate-hero-aurora" />

      {/* Animated Flowing Line Wave with 50% opacity and 60/40 Purple-Blue Split */}
      <AnimatedWave className="opacity-50 z-0" yOffset={0.72} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Value Proposition Container with opening animation sequence */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          
          {/* Master Headline (Animated Entrance 1) */}
          <h1 className="text-[30px] sm:text-5xl lg:text-[54px] font-bold text-navy-900 tracking-tight leading-[1.16] max-w-5xl mx-auto flex flex-col items-center gap-1 sm:gap-2.5 transition-all duration-300 animate-hero-fade-1">
            <span>{t.headlineLine1}</span>
            <span>{t.headlineLine2}</span>
          </h1>

          {/* Subtitle / Body text (Animated Entrance 2) */}
          <p className="text-[15px] sm:text-lg md:text-[19px] text-slate-600 leading-relaxed max-w-3xl mx-auto flex flex-col items-center transition-all duration-300 animate-hero-fade-2 px-1 sm:px-0 font-normal">
            <span>{t.subtitleLine1}</span>
            <span>{t.subtitleLine2}</span>
          </p>

          {/* CTA Group (Animated Entrance 3) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto animate-hero-fade-3">
            {/* Primary Button (3D Purple Pill, Text Flip on Hover + Modal Trigger) */}
            <button
              type="button"
              onClick={() => openModal()}
              className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-xs sm:text-base font-semibold ring-[3px] ring-purple-600/20 hover:ring-purple-600/35 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15)] transition-all duration-200 group overflow-hidden select-none cursor-pointer inline-flex items-center justify-center w-full sm:w-auto"
            >
              <div className="relative overflow-hidden h-[18px] sm:h-[22px] flex flex-col justify-center">
                {/* Default text (slides up and fades out on hover) */}
                <div className="flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                  <span>{t.ctaPrimary}</span>
                </div>

                {/* Duplicate text (slides up and fades in on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white whitespace-nowrap">
                  <span>{t.ctaPrimary}</span>
                </div>
              </div>
            </button>

            {/* Secondary Button (Clean Outline Style + Auto-Play Demo Trigger) */}
            <a
              href="#demo"
              onClick={handleWatchDemo}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 hover:bg-white text-slate-700 text-xs sm:text-base font-semibold shadow-sm transition-all duration-200 cursor-pointer w-full sm:w-auto hover:text-navy-950"
            >
              <span>{t.ctaSecondary}</span>
            </a>
          </div>

          {/* Trust & Friction-Reducer Micro-Badges (Two Points with Individual Green Checkmarks) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-[12px] sm:text-[13px] text-slate-500 font-medium select-none animate-hero-fade-3 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{t.trustPoint1}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{t.trustPoint2}</span>
            </div>
          </div>
        </div>

        {/* Product Dashboard Visual Showcase (Animated 3D Perspective Entrance 4) */}
        <div className="mt-6 sm:mt-14 lg:mt-20 animate-hero-dashboard">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
