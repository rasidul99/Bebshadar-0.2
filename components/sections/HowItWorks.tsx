"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import {
  Building,
  FileSpreadsheet,
  CheckCircle2,
  Receipt,
  TrendingUp,
  Printer,
  ArrowRight,
} from "lucide-react";

export function HowItWorks() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    EN: {
      eyebrow: "Fast Onboarding",
      title: "If you can use a calculator, you can use Bebshadar",
      description:
        "Designed to get your cashiers and store staff operational on day one with zero complex training.",
      stepBadges: ["STEP 01", "STEP 02", "STEP 03", "STEP 04"],
      steps: [
        {
          title: "Sign up & configure profile",
          desc: "Register your shop in under 2 minutes. Configure your business name, currency (BDT ৳), tax, and multiple outlet branches.",
        },
        {
          title: "Import products & stock",
          desc: "Bulk upload your inventory via Excel or create items with barcodes, purchase costs, retail prices, and opening balances.",
        },
        {
          title: "Start instant POS billing",
          desc: "Cashiers start ringing up sales on any laptop, desktop, tablet, or barcode terminal with zero learning curve.",
        },
        {
          title: "Scale with live analytics",
          desc: "Monitor live revenue, recover customer dues with SMS, reorder low stock, and review profits from anywhere on your mobile phone.",
        },
      ],
    },
    BN: {
      eyebrow: "সহজ ও দ্রুত অনবোর্ডিং",
      title: "ক্যালকুলেটর চালাতে পারলে ব্যবসাদ্বারও সহজে চালাতে পারবেন",
      description:
        "কোনো জটিল ট্রেনিং ছাড়াই প্রথম দিন থেকেই ক্যাশিয়ার ও স্টাফরা খুব সহজে ব্যবহার করতে পারবেন।",
      stepBadges: ["ধাপ ০১", "ধাপ ০২", "ধাপ ০৩", "ধাপ ০৪"],
      steps: [
        {
          title: "রেজিস্ট্রেশন ও প্রোফাইল সেটআপ",
          desc: "মাত্র ২ মিনিটে আপনার দোকানের রেজিস্ট্রেশন সম্পন্ন করুন। ব্যবসার নাম, মুদ্রা (BDT ৳), ট্যাক্স এবং একাধিক আউটলেট ব্রাঞ্চ কনফিগার করুন।",
        },
        {
          title: "পণ্য ও স্টকের তালিকা আপলোড",
          desc: "এক্সেল ফাইলের মাধ্যমে এক ক্লিকে হাজার হাজার পণ্যের তালিকা আপলোড করুন অথবা সরাসরি বারকোড, কেনা দাম ও বিক্রয়মূল্য দিয়ে আইটেম যুক্ত করুন।",
        },
        {
          title: "তাৎক্ষণিক POS বিলিং শুরু",
          desc: "ল্যাপটপ, ডেক্সটপ বা মোবাইল যেকোনো ডিভাইস থেকে সরাসরি বারকোড স্ক্যান করে কাস্টমারকে ডিজিটাল রিসিট ও SMS মেমো প্রদান করুন।",
        },
        {
          title: "লাইভ রিপোর্টের মাধ্যমে ব্যবসা বৃদ্ধি",
          desc: "মোবাইল থেকেই লাইভ বিক্রয় মনিটর করুন, ১-ক্লিকে SMS পাঠিয়ে বাকি আদায় করুন এবং লাভ-ক্ষতির হিসাব দেখে সঠিক সিদ্ধান্ত নিন।",
        },
      ],
    },
  };

  const t = content[language];

  // Track active slide on mobile scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || clientWidth;
    const index = Math.round(scrollLeft / (cardWidth + 16));
    setActiveStep(Math.min(Math.max(index, 0), 3));
  };

  const scrollToStep = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
    scrollContainerRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveStep(index);
  };

  return (
    <section ref={ref} className="py-8 sm:py-28 bg-white border-y border-slate-200/80">
      {/* Container aligned with max-w-6xl Navbar width */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Heading with Animated Loop Icon & Brand Purple Pill (Scroll Triggered) */}
        <div className={`max-w-5xl mx-auto text-center mb-6 sm:mb-14 ${isInView ? "animate-onboarding-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Rocket/Fast Onboarding stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
            </div>
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-3xl lg:text-[34px] font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
            {t.title}
          </h2>

          <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-base lg:text-[16px] text-slate-600 leading-relaxed max-w-4xl mx-auto transition-all duration-300">
            {t.description}
          </p>
        </div>

        {/* Square / Orthogonal Stepped Connecting Lines with Continuous Traveling Purple Loop (Scroll Triggered) */}
        <div className={`hidden lg:block relative w-full h-12 -mb-2 pointer-events-none z-0 ${isInView ? "animate-onboarding-pipeline" : "opacity-0"}`}>
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1000 48"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* 1. Base Static Gray Path with Large 24px Corner Radius */}
            <path
              d="M 125,48 L 125,28 Q 125,4 149,4 L 351,4 Q 375,4 375,28 L 375,48"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 375,48 L 375,28 Q 375,4 399,4 L 601,4 Q 625,4 625,28 L 625,48"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 625,48 L 625,28 Q 625,4 649,4 L 851,4 Q 875,4 875,28 L 875,48"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              fill="none"
            />

            {/* 2. Continuous Traveling Purple Glowing Beam (Start to End Loop Animation) */}
            <path
              d="M 125,48 L 125,28 Q 125,4 149,4 L 351,4 Q 375,4 375,28 L 375,48 L 375,28 Q 375,4 399,4 L 601,4 Q 625,4 625,28 L 625,48 L 625,28 Q 625,4 649,4 L 851,4 Q 875,4 875,28 L 875,48"
              stroke="#7048E8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="animate-pipeline-beam"
            />

            {/* Junction Points */}
            <circle cx="125" cy="46" r="2.5" fill="#CBD5E1" />
            <circle cx="375" cy="46" r="2.5" fill="#CBD5E1" />
            <circle cx="625" cy="46" r="2.5" fill="#CBD5E1" />
            <circle cx="875" cy="46" r="2.5" fill="#CBD5E1" />
          </svg>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MOBILE VIEW: Interactive Horizontal Snap Carousel (< lg)
           ═══════════════════════════════════════════════════════════════ */}
        <div className="block lg:hidden">
          {/* Snap Container with peek effect */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 pb-4 pt-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* MOBILE CARD 1 */}
            <div className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col bg-white rounded-3xl p-4 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                  {t.stepBadges[0]}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">1 of 4</span>
              </div>

              {/* Graphic Canvas */}
              <div className="h-[180px] bg-[#F6F7FB] rounded-2xl p-3 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-3.5">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-3 shadow-xs border border-slate-200/90 space-y-2 text-left">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                      <Building className="w-3.5 h-3.5 text-brand-600" />
                      <span>SHOP PROFILE</span>
                    </div>
                    <span className="text-[8px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
                    <div className="text-[8px] text-slate-400 font-semibold uppercase">Business Name</div>
                    <div className="text-[11px] font-bold text-navy-900">Al-Madina Retail Mart</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-slate-50 p-1 rounded-lg border border-slate-200/60">
                      <div className="text-[7px] text-slate-400 font-semibold">CURRENCY</div>
                      <div className="text-[10px] font-bold text-brand-700">BDT (৳)</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded-lg border border-slate-200/60">
                      <div className="text-[7px] text-slate-400 font-semibold">OUTLETS</div>
                      <div className="text-[10px] font-bold text-navy-900">2 Branches</div>
                    </div>
                  </div>
                  <div className="bg-brand-600 text-white rounded-lg py-1 px-2 text-[9px] font-semibold flex items-center justify-between">
                    <span>Save &amp; Continue</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-navy-900 mb-1 leading-snug">
                    {t.steps[0].title}
                  </h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">
                    {t.steps[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE CARD 2 */}
            <div className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col bg-white rounded-3xl p-4 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                  {t.stepBadges[1]}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">2 of 4</span>
              </div>

              {/* Graphic Canvas */}
              <div className="h-[180px] bg-[#F6F7FB] rounded-2xl p-3 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-3.5">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-3 shadow-xs border border-slate-200/90 space-y-2 text-left">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EXCEL IMPORT</span>
                    </div>
                    <span className="text-[8px] font-bold bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded-full">
                      1,250 Items
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between bg-slate-50 px-2 py-1 rounded-lg text-[9px]">
                      <span className="font-semibold text-slate-700">Basmati Rice 5kg</span>
                      <span className="font-mono font-bold text-navy-900">৳ 450</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 px-2 py-1 rounded-lg text-[9px]">
                      <span className="font-semibold text-slate-700">Soyabean Oil 1L</span>
                      <span className="font-mono font-bold text-navy-900">৳ 185</span>
                    </div>
                  </div>
                  <div className="bg-emerald-600 text-white rounded-lg py-1 px-2 text-[9px] font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>100% Uploaded</span>
                    </div>
                    <span className="text-[8px] bg-white/20 px-1 py-0.5 rounded">Barcodes Active</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-navy-900 mb-1 leading-snug">
                    {t.steps[1].title}
                  </h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">
                    {t.steps[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE CARD 3 */}
            <div className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col bg-white rounded-3xl p-4 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                  {t.stepBadges[2]}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">3 of 4</span>
              </div>

              {/* Graphic Canvas */}
              <div className="h-[180px] bg-[#F6F7FB] rounded-2xl p-3 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-3.5">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-3 shadow-xs border border-slate-200/90 space-y-2 text-left">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                      <Receipt className="w-3.5 h-3.5 text-brand-600" />
                      <span>POS CHECKOUT</span>
                    </div>
                    <span className="text-[8px] font-bold bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded-full border border-amber-200/60">
                      0.2s Speed
                    </span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-slate-700">Total Billed</span>
                      <span className="font-mono font-bold text-brand-700 text-xs">৳ 1,450.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] text-slate-400 mt-0.5">
                      <span>Paid: ৳ 2,000</span>
                      <span className="font-bold text-emerald-600">Change: ৳ 550</span>
                    </div>
                  </div>
                  <div className="bg-brand-600 text-white rounded-lg py-1 px-2 text-[9px] font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Printer className="w-3 h-3" />
                      <span>Print Receipt</span>
                    </div>
                    <span className="text-[8px] bg-white/20 px-1 py-0.5 rounded">Auto SMS</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-navy-900 mb-1 leading-snug">
                    {t.steps[2].title}
                  </h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">
                    {t.steps[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE CARD 4 */}
            <div className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col bg-white rounded-3xl p-4 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                  {t.stepBadges[3]}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">4 of 4</span>
              </div>

              {/* Graphic Canvas */}
              <div className="h-[180px] bg-[#F6F7FB] rounded-2xl p-3 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-3.5">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-3 shadow-xs border border-slate-200/90 space-y-1.5 text-left">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
                      <span>STATISTICS</span>
                    </div>
                    <span className="text-[8px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full">
                      +24% Growth
                    </span>
                  </div>
                  <div className="relative h-10 w-full flex items-center justify-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path
                        d="M0,30 Q20,38 35,22 T70,8 T100,24"
                        fill="none"
                        stroke="#7048E8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="70" cy="8" r="3.5" fill="#FFFFFF" stroke="#7048E8" strokeWidth="2.5" />
                    </svg>
                    <div className="absolute top-0 right-2 bg-slate-900 text-white text-[7px] font-bold px-1 py-0.5 rounded">
                      ৳ 84,500
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 pt-1 border-t border-slate-100">
                    <div className="bg-slate-50 p-1 rounded-lg">
                      <div className="text-[7px] text-slate-400 font-semibold">REVENUE</div>
                      <div className="text-[9px] font-bold text-navy-900 font-mono">৳ 84,500</div>
                    </div>
                    <div className="bg-slate-50 p-1 rounded-lg">
                      <div className="text-[7px] text-slate-400 font-semibold">BAKI DUES</div>
                      <div className="text-[9px] font-bold text-emerald-600 font-mono">৳ 18,200</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-navy-900 mb-1 leading-snug">
                    {t.steps[3].title}
                  </h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">
                    {t.steps[3].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Progress Indicators (Segmented Dots & Step Jump) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[0, 1, 2, 3].map((stepIdx) => (
              <button
                key={stepIdx}
                type="button"
                onClick={() => scrollToStep(stepIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === stepIdx
                    ? "w-8 bg-brand-600 shadow-xs"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to step ${stepIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP VIEW: 4-Column Grid (lg:)
           ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-7 items-stretch relative z-10">
          
          {/* CARD 1: Sign up & configure profile */}
          <div className={`flex flex-col group cursor-pointer ${isInView ? "animate-step-card-1" : "opacity-0"}`}>
            {/* Top Graphic Canvas */}
            <div className="h-[270px] bg-[#F6F7FB] rounded-[28px] p-4 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-5 transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-[0_15px_35px_-10px_rgba(112,72,232,0.12)]">
              {/* Profile Config UI Card */}
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/90 space-y-2.5 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <Building className="w-3.5 h-3.5 text-brand-600" />
                    <span>SHOP PROFILE</span>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/60">
                    <div className="text-[9px] text-slate-400 font-semibold uppercase">Business Name</div>
                    <div className="text-xs font-bold text-navy-900 mt-0.5">Al-Madina Retail Mart</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
                      <div className="text-[8px] text-slate-400 font-semibold">CURRENCY</div>
                      <div className="text-[11px] font-bold text-brand-700">BDT (৳)</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
                      <div className="text-[8px] text-slate-400 font-semibold">OUTLETS</div>
                      <div className="text-[11px] font-bold text-navy-900">2 Branches</div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-600 text-white rounded-xl py-1.5 px-2.5 text-[10px] font-semibold flex items-center justify-between shadow-xs">
                  <span>Save &amp; Continue</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-left flex-1 flex flex-col justify-start">
              <div className="min-h-[54px] flex items-start mb-2">
                <h3 className="text-xl font-bold text-navy-900 tracking-tight leading-[1.25] transition-all duration-300">
                  {t.steps[0].title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed transition-all duration-300">
                {t.steps[0].desc}
              </p>
            </div>
          </div>

          {/* CARD 2: Import products & stock */}
          <div className={`flex flex-col group cursor-pointer ${isInView ? "animate-step-card-2" : "opacity-0"}`}>
            {/* Top Graphic Canvas */}
            <div className="h-[270px] bg-[#F6F7FB] rounded-[28px] p-4 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-5 transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-[0_15px_35px_-10px_rgba(112,72,232,0.12)]">
              {/* Excel Import UI Card */}
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/90 space-y-2.5 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>EXCEL / CSV IMPORT</span>
                  </div>
                  <span className="text-[9px] font-bold bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded-full">
                    1,250 Items
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/60 text-[10px]">
                    <span className="font-semibold text-slate-700">Basmati Rice 5kg</span>
                    <span className="font-mono font-bold text-navy-900">৳ 450.00</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/60 text-[10px]">
                    <span className="font-semibold text-slate-700">Soyabean Oil 1L</span>
                    <span className="font-mono font-bold text-navy-900">৳ 185.00</span>
                  </div>
                </div>

                <div className="bg-emerald-600 text-white rounded-xl py-1.5 px-2.5 text-[10px] font-semibold flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>100% Uploaded</span>
                  </div>
                  <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">Barcodes Active</span>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-left flex-1 flex flex-col justify-start">
              <div className="min-h-[54px] flex items-start mb-2">
                <h3 className="text-xl font-bold text-navy-900 tracking-tight leading-[1.25] transition-all duration-300">
                  {t.steps[1].title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed transition-all duration-300">
                {t.steps[1].desc}
              </p>
            </div>
          </div>

          {/* CARD 3: Start instant POS billing */}
          <div className={`flex flex-col group cursor-pointer ${isInView ? "animate-step-card-3" : "opacity-0"}`}>
            {/* Top Graphic Canvas */}
            <div className="h-[270px] bg-[#F6F7FB] rounded-[28px] p-4 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-5 transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-[0_15px_35px_-10px_rgba(112,72,232,0.12)]">
              {/* POS Terminal Checkout UI Card */}
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/90 space-y-2.5 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <Receipt className="w-3.5 h-3.5 text-brand-600" />
                    <span>POS CHECKOUT</span>
                  </div>
                  <span className="text-[9px] font-bold bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded-full border border-amber-200/60">
                    0.2s Speed
                  </span>
                </div>

                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/60 text-left">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-700">Total Billed</span>
                    <span className="font-mono font-bold text-brand-700 text-sm">৳ 1,450.00</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 mt-1">
                    <span>Cash Paid: ৳ 2,000</span>
                    <span className="font-bold text-emerald-600">Change: ৳ 550</span>
                  </div>
                </div>

                <div className="bg-brand-600 text-white rounded-xl py-1.5 px-2.5 text-[10px] font-semibold flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1">
                    <Printer className="w-3 h-3" />
                    <span>Print Receipt</span>
                  </div>
                  <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">Auto SMS</span>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-left flex-1 flex flex-col justify-start">
              <div className="min-h-[54px] flex items-start mb-2">
                <h3 className="text-xl font-bold text-navy-900 tracking-tight leading-[1.25] transition-all duration-300">
                  {t.steps[2].title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed transition-all duration-300">
                {t.steps[2].desc}
              </p>
            </div>
          </div>

          {/* CARD 4: Scale with live analytics */}
          <div className={`flex flex-col group cursor-pointer ${isInView ? "animate-step-card-4" : "opacity-0"}`}>
            {/* Top Graphic Canvas with Wave Line Chart (Matching reference image) */}
            <div className="h-[270px] bg-[#F6F7FB] rounded-[28px] p-4 border border-slate-200/80 overflow-hidden flex items-center justify-center relative mb-5 transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-[0_15px_35px_-10px_rgba(112,72,232,0.12)]">
              {/* Analytics Wave Chart UI Card */}
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/90 space-y-2 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
                    <span>LIVE STATISTICS</span>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full">
                    +24% Growth
                  </span>
                </div>

                {/* SVG Smooth Line Wave Chart */}
                <div className="relative h-14 w-full flex items-center justify-center">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path
                      d="M0,30 Q20,38 35,22 T70,8 T100,24"
                      fill="none"
                      stroke="#7048E8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Static Peak Point */}
                    <circle cx="70" cy="8" r="3.5" fill="#FFFFFF" stroke="#7048E8" strokeWidth="2.5" />
                  </svg>
                  {/* Floating Peak Tooltip */}
                  <div className="absolute top-0 right-4 bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                    ৳ 84,500
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-100 text-left">
                  <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/50">
                    <div className="text-[8px] text-slate-400 font-semibold">REVENUE</div>
                    <div className="text-[10px] font-bold text-navy-900 font-mono">৳ 84,500</div>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/50">
                    <div className="text-[8px] text-slate-400 font-semibold">BAKI DUES</div>
                    <div className="text-[10px] font-bold text-emerald-600 font-mono">৳ 18,200</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-left flex-1 flex flex-col justify-start">
              <div className="min-h-[54px] flex items-start mb-2">
                <h3 className="text-xl font-bold text-navy-900 tracking-tight leading-[1.25] transition-all duration-300">
                  {t.steps[3].title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed transition-all duration-300">
                {t.steps[3].desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
