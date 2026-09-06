"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FinalCta() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });
  const { openModal } = useLeadModal();

  const content = {
    EN: {
      eyebrow: "Ready to scale your business?",
      title: "Ready to run your business the easy, automated way?",
      subtitle:
        "Start your 14-day free trial today. No credit card required, instant setup, and dedicated onboarding support.",
      ctaText: "Start Free Trial",
      trust1: "Instant cloud access",
      trust2: "Free phone & remote training",
      trust3: "Cancel anytime",
    },
    BN: {
      eyebrow: "ব্যবসা বড় করতে প্রস্তুত?",
      title: "আপনার ব্যবসাকে কি অটোমেটেড ও সহজ করতে প্রস্তুত?",
      subtitle:
        "আজই শুরু করুন ১৪ দিনের ফ্রি ট্রায়াল। কোনো কার্ড লাগবে না, তাৎক্ষণিক সেটআপ এবং আমাদের সার্বক্ষণিক সাপোর্ট।",
      ctaText: "ফ্রি ট্রায়াল শুরু করুন",
      trust1: "ইনস্ট্যান্ট ক্লাউড এক্সেস",
      trust2: "ফ্রি ফোন ও রিমোট ট্রেনিং",
      trust3: "যেকোনো সময় বাতিলযোগ্য",
    },
  };

  const t = content[language];

  return (
    <section ref={ref} className="py-10 sm:py-32 relative overflow-hidden bg-navy-950 text-white">
      {/* Full Width Horizontally Flipped Background Image Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/adadv.png"
          alt="Ready to scale your business background"
          fill
          className="object-cover object-center scale-x-[-1]"
          priority
        />
      </div>

      {/* Content Container aligned with Navbar width (max-w-6xl) (Scroll Triggered) */}
      <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10 text-center space-y-4 sm:space-y-8 ${isInView ? "animate-final-cta" : "opacity-0"}`}>
        
        {/* Eyebrow Badge (Brand Purple with animated TrendingUp / Scaling stroke loop) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 backdrop-blur-xl border border-brand-300/40 text-brand-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm select-none transition-all duration-300">
          <div className="icon-stroke-loop text-brand-300 w-4 h-4 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <span>{t.eyebrow}</span>
        </div>

        {/* Headings Group with tight spacing */}
        <div className="space-y-2 sm:space-y-3">
          {/* Headline (Single line) */}
          <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight max-w-5xl mx-auto leading-[1.2] drop-shadow-sm transition-all duration-300 sm:whitespace-nowrap">
            {t.title}
          </h2>

          {/* Subtitle (Single line) */}
          <p className="text-[14px] sm:text-base md:text-lg text-white/90 max-w-5xl mx-auto leading-relaxed font-medium transition-all duration-300 sm:whitespace-nowrap">
            {t.subtitle}
          </p>
        </div>

        {/* Single Large Primary CTA Button with Navbar-Style 3D Glow & Border + Modal Trigger */}
        <div className="flex items-center justify-center pt-3">
          <button
            type="button"
            onClick={() => openModal()}
            className="relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-sm sm:text-base font-semibold ring-[3px] ring-purple-600/25 hover:ring-purple-600/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15),0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-200 group overflow-hidden select-none cursor-pointer inline-flex items-center justify-center"
          >
            <div className="relative overflow-hidden h-[24px] flex flex-col justify-center">
              {/* Default text (slides up and fades out on hover) */}
              <div className="flex items-center gap-2 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                <span>{t.ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              </div>

              {/* Duplicate text (slides up and fades in on hover) */}
              <div className="absolute inset-0 flex items-center gap-2 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white whitespace-nowrap">
                <span>{t.ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              </div>
            </div>
          </button>
        </div>

        {/* Bottom Trust Items in Frosted Badges (Hidden on mobile) */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs sm:text-sm text-white/90 font-medium">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xs transition-all duration-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> {t.trust1}
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xs transition-all duration-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> {t.trust2}
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xs transition-all duration-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> {t.trust3}
          </span>
        </div>

      </div>
    </section>
  );
}
