"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import {
  AlertTriangle,
  FileX,
  Clock,
  Ban,
  TrendingDown,
  XCircle,
  Unlink,
  Calculator,
  Zap,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

export function ProblemSection() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const content = {
    EN: {
      eyebrow: "The Traditional Bottlenecks",
      title: "Still running your business on paper registers, memory and guesswork?",
      subtitle:
        "Relying on separate notebooks for sales, stock, and credit is bleeding time and leaving thousands of Taka uncollected each month.",
      card1: {
        title: "Manual billing, human errors & cash register mismatches",
        description:
          "Paper receipts lead to calculation errors, slow checkouts during peak hours, and closing-time cash discrepancies that eat into your daily profit margins.",
      },
      card2: {
        title: "No real idea what's in stock until it's already sold out",
        description:
          "Blindly re-ordering fast movers or discovering out-of-stock items only when customers walk out empty-handed, directly losing sales every day.",
      },
      card3: {
        title: "Customer dues (baki) nobody is tracking or recovering",
        description:
          "Forgotten customer credit, untraceable handwritten khata pages, and awkward manual follow-ups without digital proof or automated reminders.",
      },
      card4: {
        title: "One shop today, three tomorrow — but zero control across branches",
        description:
          "Stock sitting idle in one branch while another runs dry. No real-time visibility without endless phone calls and error-prone Excel sheets.",
      },
      solution: {
        eyebrow: "The Unified Cloud Solution",
        title: "Bebshadar replaces disconnected notebooks with one unified, automated cloud system.",
        subtitle:
          "Connect your retail billing counters, live multi-branch inventory, supplier purchases, and customer dues (baki) into a single dashboard — accessible anytime from your phone or PC.",
        pillar1: "0.2s POS Quick Billing",
        pillar2: "Live Multi-Branch Stock Sync",
        pillar3: "1-Click SMS Baki Recovery",
      },
    },
    BN: {
      eyebrow: "পুরাতন পদ্ধতির সীমাবদ্ধতা ও সমস্যা",
      title: "এখনও কি খাতা-কলম, স্মৃতিশক্তি আর অনুমানের ওপর ব্যবসা চালাচ্ছেন?",
      subtitle:
        "বিক্রি, স্টক ও বাকির জন্য আলাদা খাতার ওপর নির্ভর করার কারণে নষ্ট হচ্ছে মূল্যবান সময় এবং প্রতি মাসে আটকে যাচ্ছে হাজার হাজার টাকা।",
      card1: {
        title: "হাতে লেখা বিলিং, হিসাবের ভুল ও ক্যাশ গরমিল",
        description:
          "খাতায় হাতে হিসাব করায় যোগ-বিয়োগের ভুল হয়, ভিড়ের সময় কাস্টমার দাঁড়িয়ে থাকে এবং দিনশেষে ক্যাশের টাকার সাথে হিসাব মেলে না।",
      },
      card2: {
        title: "কোন পণ্য স্টকে আছে আর কোনটা শেষ — তা জানা থাকে না",
        description:
          "কাস্টমার দোকানে এসে পণ্য না পেয়ে ফিরে যাওয়ার পর বোঝা যায় স্টক শেষ, যার ফলে প্রতিদিন সরাসরি বিক্রয় নষ্ট হয়।",
      },
      card3: {
        title: "কাস্টমারের বাকি টাকা ট্র্যাক ও আদায়ের সুনির্দিষ্ট হিসাব নেই",
        description:
          "খাতার পাতা হারিয়ে যাওয়া বা ভুলে যাওয়ার কারণে বাকি টাকা আটকে থাকে এবং ডিজিটাল প্রমাণ ছাড়া তাগাদা দেওয়া কঠিন হয়ে পড়ে।",
      },
      card4: {
        title: "আজ এক দোকান, কাল তিন দোকান — কিন্তু কোনো সেন্ট্রাল কন্ট্রোল নেই",
        description:
          "এক ব্রাঞ্চে পণ্য পড়ে থাকে অথচ অন্য ব্রাঞ্চে স্টক শেষ। সারাদিন ফোন আর এক্সেল শিট ছাড়া সার্বিক স্টক জানা অসম্ভব।",
      },
      solution: {
        eyebrow: "একমাত্র ক্লাউড সমাধান",
        title: "ব্যবসা পরিচালনায় বিচ্ছিন্ন খাতা-কলমের বদলে ব্যবহার করুন ব্যবসাদ্বার-এর অটোমেটেড ক্লাউড সিস্টেম।",
        subtitle:
          "বিলিং কাউন্টার, লাইভ মাল্টি-ব্রাঞ্চ স্টক, সাপ্লায়ার কেনাকাটা এবং বাকির হিসাব যুক্ত করুন একটি ড্যাশবোর্ডে — মোবাইল বা কম্পিউটার থেকে যেকোনো সময় নিয়ন্ত্রণ করুন।",
        pillar1: "০.২ সেকেন্ডে দ্রুত POS বিলিং",
        pillar2: "রিয়েল-টাইম মাল্টি-আউটলেট স্টক",
        pillar3: "১-ক্লিকে SMS বাকি রিকভারি",
      },
    },
  };

  const t = content[language];

  return (
    <section ref={ref} className="pt-0 pb-6 sm:pt-0 sm:pb-28 bg-[#F7F9FC]">
      {/* Exact match to 1152px Navbar pill with lg:px-0 on desktop */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Header matching reference image layout (Scroll Triggered) */}
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto mb-6 sm:mb-16 space-y-2.5 sm:space-y-4 ${isInView ? "animate-problem-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated warning triangle stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <span>{t.eyebrow}</span>
          </div>

          {/* Master Section Title */}
          <h2 className="text-[24px] sm:text-4xl md:text-5xl font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto transition-all duration-300">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Cards Bento Grid: Row 1 (3 Cards) & Row 2 (1 Card + 1 Double-Width Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 w-full">
          
          {/* ROW 1 - CARD 1: Manual billing, human errors (lg:col-span-4) */}
          <div className={`lg:col-span-4 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.12)] hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between ${isInView ? "animate-problem-card-1" : "opacity-0"}`}>
            {/* Top Graphic Canvas with Red to White Vertical Gradient (Top Red, Bottom White) */}
            <div className="h-[190px] sm:h-[270px] bg-gradient-to-b from-[#FFD0D0] via-[#FFF0F0] to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 overflow-hidden flex items-center justify-center relative border border-rose-200/70">
              {/* Cash Reconciliation Discrepancy Card (Frosted Glassmorphism Effect with 20% Opacity) */}
              <div className="relative z-10 w-full max-w-[320px] bg-white/20 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-white/40 transition-transform duration-300 group-hover:scale-[1.02] space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-black/10">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-800">
                    <Calculator className="w-3.5 h-3.5 text-slate-700" />
                    <span>CASH RECONCILIATION</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold bg-rose-500/20 text-rose-800 px-2 py-0.5 rounded-full flex items-center gap-1 border border-rose-300/60 shadow-2xs backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                    Error Found
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/25 backdrop-blur-sm p-2 rounded-xl border border-white/40 shadow-2xs">
                    <div className="text-[9px] text-slate-700 font-semibold">Notebook</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">৳ 12,450</div>
                  </div>
                  <div className="bg-white/25 backdrop-blur-sm p-2 rounded-xl border border-white/40 shadow-2xs">
                    <div className="text-[9px] text-slate-700 font-semibold">Drawer Cash</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-950">৳ 10,950</div>
                  </div>
                </div>

                <div className="bg-rose-500/20 backdrop-blur-sm border border-rose-400/40 rounded-xl p-2 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span className="text-[10px] font-bold text-rose-950">Cash Shortage</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-rose-900 font-mono">-৳ 1,500</span>
                </div>
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 pb-2 px-2 sm:px-3">
              <h3 className="text-[17px] sm:text-xl font-bold text-navy-900 mb-1.5 transition-all duration-300 leading-snug">
                {t.card1.title}
              </h3>
              <p className="text-slate-600 text-[12px] sm:text-sm leading-relaxed transition-all duration-300">
                {t.card1.description}
              </p>
            </div>
          </div>

          {/* ROW 1 - CARD 2: No real idea what's in stock (lg:col-span-4) */}
          <div className={`lg:col-span-4 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.12)] hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between ${isInView ? "animate-problem-card-2" : "opacity-0"}`}>
            {/* Top Graphic Canvas with Red to White Vertical Gradient (Top Red, Bottom White) */}
            <div className="h-[190px] sm:h-[270px] bg-gradient-to-b from-[#FFD0D0] via-[#FFF0F0] to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 overflow-hidden flex items-center justify-center relative border border-rose-200/70">
              <div className="relative z-10 w-full max-w-[320px] space-y-2">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-700 flex items-center justify-center shrink-0 border border-rose-300/50">
                      <FileX className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-950">Soyabean Oil 1L</div>
                      <div className="text-[9px] text-slate-700 font-semibold">Barcode: #8941002</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold bg-rose-500/20 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300/60 backdrop-blur-xs">
                    0 Pc (Stock Out)
                  </span>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-xl p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 border border-amber-300/50">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-950">A4TECH Mouse</div>
                      <div className="text-[9px] text-slate-700 font-semibold">Min: 5 Pcs</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold bg-amber-500/20 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300/60 backdrop-blur-xs">
                    1 Pc Left
                  </span>
                </div>

                <div className="bg-rose-500/80 backdrop-blur-sm text-white rounded-xl px-2.5 py-1.5 text-[10px] sm:text-[11px] font-semibold flex items-center justify-between shadow-2xs border border-rose-400/40">
                  <span className="flex items-center gap-1 font-medium">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Customer returned
                  </span>
                  <span className="font-extrabold">Loss: ৳ 950</span>
                </div>
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 pb-2 px-2 sm:px-3">
              <h3 className="text-[17px] sm:text-xl font-bold text-navy-900 mb-1.5 transition-all duration-300 leading-snug">
                {t.card2.title}
              </h3>
              <p className="text-slate-600 text-[12px] sm:text-sm leading-relaxed transition-all duration-300">
                {t.card2.description}
              </p>
            </div>
          </div>

          {/* ROW 1 - CARD 3: Customer dues nobody is tracking (lg:col-span-4) */}
          <div className={`lg:col-span-4 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.12)] hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between ${isInView ? "animate-problem-card-3" : "opacity-0"}`}>
            {/* Top Graphic Canvas with Red to White Vertical Gradient (Top Red, Bottom White) */}
            <div className="h-[190px] sm:h-[270px] bg-gradient-to-b from-[#FFD0D0] via-[#FFF0F0] to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 overflow-hidden flex items-center justify-center relative border border-rose-200/70">
              <div className="relative z-10 w-full max-w-[320px] space-y-2">
                <div className="bg-slate-900/80 backdrop-blur-md text-white p-2.5 rounded-xl flex items-center justify-between text-xs border border-white/20 shadow-2xs">
                  <div>
                    <div className="text-[9px] text-slate-300 uppercase font-semibold">TOTAL UNCOLLECTED BAKI</div>
                    <div className="text-sm font-extrabold text-rose-400 font-mono">৳ 1,28,450.00</div>
                  </div>
                  <span className="bg-rose-950/80 text-rose-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-rose-700/60">
                    Blocked
                  </span>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-slate-950 text-[11px]">Al-Madina Traders</div>
                    <div className="text-[9px] text-rose-700 font-semibold flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      45d overdue (No reminder)
                    </div>
                  </div>
                  <span className="font-extrabold text-rose-800 font-mono text-xs">৳ 14,200</span>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-slate-950 text-[11px]">Kamrul Hardware</div>
                    <div className="text-[9px] text-slate-700 font-semibold flex items-center gap-1">
                      <Ban className="w-2.5 h-2.5" />
                      Khata page untraceable
                    </div>
                  </div>
                  <span className="font-extrabold text-slate-900 font-mono text-xs">৳ 8,900</span>
                </div>
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 pb-2 px-2 sm:px-3">
              <h3 className="text-[17px] sm:text-xl font-bold text-navy-900 mb-1.5 transition-all duration-300 leading-snug">
                {t.card3.title}
              </h3>
              <p className="text-slate-600 text-[12px] sm:text-sm leading-relaxed transition-all duration-300">
                {t.card3.description}
              </p>
            </div>
          </div>

          {/* ROW 2 - CARD 4: One shop today, three tomorrow (lg:col-span-4 - 1 Card Size) */}
          <div className={`lg:col-span-4 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.12)] hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between ${isInView ? "animate-problem-card-4" : "opacity-0"}`}>
            {/* Top Graphic Canvas with Red to White Vertical Gradient (Top Red, Bottom White) */}
            <div className="h-[190px] sm:h-[270px] bg-gradient-to-b from-[#FFD0D0] via-[#FFF0F0] to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 overflow-hidden flex items-center justify-center relative border border-rose-200/70">
              <div className="relative z-10 w-full max-w-[320px] space-y-2">
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-center">
                    <div className="text-[9px] font-bold text-slate-700 uppercase">DHAKA OUTLET</div>
                    <div className="text-xs font-extrabold text-rose-700 mt-0.5">Stock: 0 Pcs</div>
                    <div className="text-[9px] text-slate-600 font-semibold">Khata #1</div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500/20 backdrop-blur-xs border border-rose-300 text-rose-700 flex items-center justify-center shadow-xs z-10">
                    <Unlink className="w-3 h-3" />
                  </div>

                  <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-center">
                    <div className="text-[9px] font-bold text-slate-700 uppercase">CTG BRANCH</div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">Stock: 50 Pcs</div>
                    <div className="text-[9px] text-slate-600 font-semibold">Khata #2</div>
                  </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-md text-white rounded-xl p-2 text-xs flex items-center justify-between border border-white/20 shadow-2xs">
                  <span className="text-[10px] text-slate-200 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    No real-time inter-branch sync
                  </span>
                  <span className="text-[9px] font-bold bg-white/15 px-1.5 py-0.5 rounded text-rose-300 border border-white/10">
                    Excel
                  </span>
                </div>

                <div className="bg-white/25 backdrop-blur-md rounded-lg px-2.5 py-1 border border-white/40 text-center text-[9.5px] text-slate-800 font-bold shadow-2xs">
                  ⚠️ Separate khata for each branch
                </div>
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 pb-2 px-2 sm:px-3">
              <h3 className="text-[17px] sm:text-xl font-bold text-navy-900 mb-1.5 transition-all duration-300 leading-snug">
                {t.card4.title}
              </h3>
              <p className="text-slate-600 text-[12px] sm:text-sm leading-relaxed transition-all duration-300">
                {t.card4.description}
              </p>
            </div>
          </div>

          {/* ROW 2 - CARD 5: Unified Cloud Solution (lg:col-span-8 - 2 Cards Size) */}
          <div className={`lg:col-span-8 bg-white rounded-[24px] sm:rounded-[32px] border border-brand-200/90 p-3.5 sm:p-5 shadow-[0_15px_45px_-10px_rgba(112,72,232,0.12)] hover:shadow-[0_25px_60px_-15px_rgba(112,72,232,0.2)] hover:border-brand-400 transition-all duration-300 group flex flex-col justify-between ${isInView ? "animate-problem-highlight" : "opacity-0"}`}>
            
            {/* Top Graphic Vector Canvas in Brand Purple to White Vertical Gradient */}
            <div className="h-[190px] sm:h-[270px] bg-gradient-to-b from-[#E9DCFF] via-[#F6F0FF] to-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden flex items-center justify-center relative border border-brand-200/70">
              {/* Ambient Purple Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,101,255,0.15)_0%,transparent_65%)] pointer-events-none" />

              {/* Connected Unified Cloud Ecosystem Visual */}
              <div className="relative w-full max-w-[560px] h-[200px] flex items-center justify-center z-10">
                
                {/* Connecting Lines */}
                <div className="absolute inset-x-8 top-1/2 h-[2px] bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 opacity-60" />
                <div className="absolute inset-y-4 left-1/2 w-[2px] bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 opacity-60" />

                {/* Central Hub with Expanded Width & Frosted Glassmorphism Blur */}
                <div className="relative z-10 w-36 sm:w-44 h-20 sm:h-22 rounded-2xl bg-gradient-to-b from-[#7544F7]/50 via-[#6366F1]/35 to-[#4F46E5]/50 p-0.5 shadow-[0_12px_40px_rgba(117,68,247,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 backdrop-blur-xl">
                  <div className="w-full h-full bg-white/45 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-2 text-center border border-white/90 shadow-sm">
                    <span className="font-extrabold text-navy-950 text-sm sm:text-base tracking-tight">Bebshadar</span>
                    <span className="text-[10px] text-brand-900 font-bold bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-brand-300/70 flex items-center gap-1.5 mt-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Unified Sync
                    </span>
                  </div>
                </div>

                {/* Node 1: POS Billing (High-Contrast Frosted Glass) */}
                <div className="absolute top-1 left-2 sm:left-4 bg-white/85 backdrop-blur-md border border-white rounded-xl px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-xs shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">POS BILLING</div>
                    <div className="font-extrabold text-navy-950 text-xs">৳ 48,250 Synced</div>
                  </div>
                </div>

                {/* Node 2: Multi-Branch Stock (High-Contrast Frosted Glass) */}
                <div className="absolute top-1 right-2 sm:right-4 bg-white/85 backdrop-blur-md border border-white rounded-xl px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600 shadow-xs shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">BRANCH OUTLETS</div>
                    <div className="font-extrabold text-brand-700 text-xs">Dhaka &harr; Ctg Live</div>
                  </div>
                </div>

                {/* Node 3: Customer Baki (High-Contrast Frosted Glass) */}
                <div className="absolute bottom-1 left-2 sm:left-4 bg-white/85 backdrop-blur-md border border-white rounded-xl px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">BAKI LEDGER</div>
                    <div className="font-extrabold text-emerald-700 text-xs">SMS Auto-Sent</div>
                  </div>
                </div>

                {/* Node 4: Cash Reconciled (High-Contrast Frosted Glass) */}
                <div className="absolute bottom-1 right-2 sm:right-4 bg-white/85 backdrop-blur-md border border-white rounded-xl px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center gap-2.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">CASH DRAWER</div>
                    <div className="font-extrabold text-emerald-700 text-xs">0 Mismatch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 pb-2 px-2 sm:px-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl text-left">
                {/* Eyebrow Highlight Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.solution.eyebrow}</span>
                </div>

                {/* Master Headline */}
                <h3 className="text-[17px] sm:text-xl lg:text-[22px] font-bold text-navy-900 tracking-tight leading-snug transition-all duration-300">
                  {t.solution.title}
                </h3>

                {/* Sub-headline */}
                <p className="text-slate-600 text-[12px] sm:text-sm leading-relaxed transition-all duration-300">
                  {t.solution.subtitle}
                </p>
              </div>

              {/* 3 Value Pillars (Glassmorphism) */}
              <div className="flex flex-col sm:flex-row xl:flex-col gap-1.5 shrink-0 text-[11px] font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm border border-brand-200/70 px-2.5 py-1.5 rounded-lg shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.solution.pillar1}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm border border-brand-200/70 px-2.5 py-1.5 rounded-lg shadow-2xs">
                  <Layers className="w-3.5 h-3.5 text-brand-600" />
                  <span>{t.solution.pillar2}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm border border-brand-200/70 px-2.5 py-1.5 rounded-lg shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.solution.pillar3}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
