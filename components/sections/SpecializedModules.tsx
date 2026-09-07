"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import {
  Check,
  Cpu,
  Wrench,
  Globe,
  Sparkles,
  Smartphone,
  Store,
  RefreshCw,
  Clock,
} from "lucide-react";

export function SpecializedModules() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const content = {
    EN: {
      eyebrow: "Specialized Power Modules",
      title: "Built-in capabilities for specialized business models",
      subtitle:
        "Whether you manufacture goods from raw materials, fix hardware, or sell online \u2014 Bebshadar has purpose-built modules ready.",
      cards: [
        {
          title: "Manufacturing & Production",
          description:
            "Create Bill of Materials (BOM) recipes to auto-deduct raw materials upon finishing goods, track wastage, overheads, and batch cost.",
          features: [
            "BOM multi-ingredient recipes",
            "Raw material batch deduction",
            "Production stage tracking",
            "Wastage & overhead calculation",
          ],
        },
        {
          title: "Repair & Service Job Tracking",
          description:
            "End-to-end service workflow with digital job cards, technician assignment, status notifications, and spare parts billing.",
          features: [
            "Job ticket generation",
            "Technician performance",
            "Customer repair status lookup",
            "Spare parts inventory linking",
          ],
        },
        {
          title: "WooCommerce & Online Store Sync",
          description:
            "Bridge your physical shop and WordPress/WooCommerce site. Keep product prices, descriptions, and stock counts synchronized.",
          features: [
            "2-way inventory sync",
            "Online order import to POS",
            "Price update automation",
            "Multi-channel sales report",
          ],
        },
      ],
    },
    BN: {
      eyebrow: "স্পেশালাইজড পাওয়ার মডিউলস",
      title: "বিশেষায়িত ব্যবসার জন্য প্রস্তুত শক্তিশালী ফিচারসমূহ",
      subtitle:
        "কাঁচামাল থেকে পণ্য উৎপাদন, সার্ভিসিং ও রিপেয়ারিং কিংবা অনলাইন বিক্রয় \u2014 প্রতিটি ব্যবসার জন্য রয়েছে আলাদা মডিউল।",
      cards: [
        {
          title: "ম্যানুফ্যাকচারিং ও প্রোডাকশন মডিউল",
          description:
            "কাঁচামাল থেকে তৈরি পণ্যের রেসিপি (BOM) তৈরি করুন। প্রোডাকশন শেষ হলেই কাঁচামালের স্টক স্বয়ংক্রিয়ভাবে কমে যাবে এবং অপচয় ও মোট খরচ নির্ভুলভাবে বের হবে।",
          features: [
            "BOM মাল্টি-উপাদান রেসিপি তৈরি",
            "কাঁচামালের স্বয়ংক্রিয় স্টক সমন্বয়",
            "উৎপাদন পর্যায়ের লাইভ ট্র্যাকিং",
            "অপচয় ও মোট উৎপাদন খরচ হিসাব",
          ],
        },
        {
          title: "রিপেয়ার ও সার্ভিসিং জব ট্র্যাকিং",
          description:
            "ডিজিটাল জব কার্ড তৈরি, টেকনিশিয়ান অ্যাসাইনমেন্ট, যন্ত্রাংশের বিলিং এবং কাস্টমারকে স্বয়ংক্রিয় SMS স্ট্যাটাস আপডেট পাঠানোর সম্পূর্ণ সমাধান।",
          features: [
            "ডিজিটাল জব টিকিট তৈরি",
            "টেকনিশিয়ানদের কাজের হিসাব",
            "কাস্টমারের সার্ভিস স্ট্যাটাস ট্র্যাকিং",
            "স্পেয়ার পার্টস স্টক অটো-লিংকিং",
          ],
        },
        {
          title: "WooCommerce ও অনলাইন শপ সিঙ্ক",
          description:
            "আপনার দোকানের পিওএস ও অনলাইন ওয়েবসাইটের মধ্যে লাইভ সংযোগ। একটি পণ্য দোকানে বিক্রি হলে স্বয়ংক্রিয়ভাবে ওয়েবসাইটের স্টক কমে যাবে।",
          features: [
            "দ্বিমুখী লাইভ ইনভেন্টরি সিঙ্ক",
            "অনলাইন অর্ডার সরাসরি POS এ গ্রহণ",
            "স্বয়ংক্রিয় মূল্য ও স্টক আপডেট",
            "মাল্টি-চ্যানেল সার্বিক সেলস রিপোর্ট",
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section ref={ref} id="modules" className="py-8 sm:py-28 bg-[#F7F9FC]">
      {/* Container matched to max-w-6xl Navbar width */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Header with Distinct Layers Animated Loop Icon (Scroll Triggered) */}
        <div className={`flex flex-col items-center text-center max-w-5xl mx-auto mb-6 sm:mb-20 space-y-2.5 sm:space-y-4 ${isInView ? "animate-modules-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Layers / Modules stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span>{t.eyebrow}</span>
          </div>

          {/* Master Title */}
          <h2 className="text-[24px] sm:text-3xl lg:text-[34px] font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-base lg:text-[16px] text-slate-600 leading-relaxed max-w-4xl mx-auto transition-all duration-300">
            {t.subtitle}
          </p>
        </div>

        {/* Vertically Stacking & Overlapping Horizontal Cards Deck */}
        <div className="relative space-y-8 sm:space-y-16 w-full">
          
          {/* STACKED CARD 1: Manufacturing & Production (Scroll Triggered) */}
          <div className={`sticky top-20 sm:top-28 z-10 transition-all duration-300 w-full ${isInView ? "animate-module-card-1" : "opacity-0"}`}>
            <div className="relative p-[2px] rounded-[24px] sm:rounded-[44px] overflow-hidden group cursor-pointer transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(112,72,232,0.25)]">
              {/* Default static border */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[44px] border border-slate-200/90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Animated Rotating Glowing Border Outline on Hover (Dual Layer: Ambient Glow + Sharp Beam) */}
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-80 blur-[8px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

              {/* Inner White Card */}
              <div className="relative z-10 w-full bg-white rounded-[22px] sm:rounded-[42px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">
                
                {/* Left Column: Text & Features */}
                <div className="p-5 sm:p-12 lg:p-16 flex flex-col justify-center space-y-3 sm:space-y-6 text-left">
                  <h3 className="text-[18px] sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-[1.18] transition-all duration-300">
                    {t.cards[0].title}
                  </h3>

                  <p className="text-slate-600 text-[12px] sm:text-lg leading-relaxed max-w-lg transition-all duration-300">
                    {t.cards[0].description}
                  </p>

                  <div className="space-y-2 sm:space-y-4 pt-1 sm:pt-2">
                    {t.cards[0].features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3.5 text-[12px] sm:text-base text-slate-800 font-medium transition-all duration-300">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Background fgsdf.png + Floating Purple UI Mockup Card */}
                <div className="relative min-h-[220px] sm:min-h-[440px] lg:min-h-full flex items-center justify-center p-3.5 sm:p-12 overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/fgsdf.png"
                      alt="Manufacturing Background"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Floating BOM Recipe Card in Purple Theme (80% Foggy Blur Glassmorphism + Hover Outline Animation) */}
                  <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl overflow-hidden group/floating cursor-pointer transition-all duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(112,72,232,0.35)] z-10 w-full max-w-[320px] sm:max-w-[410px]">
                    {/* Default static border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white group-hover/floating:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

                    {/* Animated Rotating Glowing Border Outline on Hover */}
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-80 blur-[4px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

                    {/* Inner Card Content */}
                    <div className="relative z-10 w-full h-full rounded-[14.5px] sm:rounded-[22.5px] bg-white/80 hover:bg-white/85 backdrop-blur-xl p-3.5 sm:p-6 transition-all duration-300 space-y-2 sm:space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/50 text-[11px] sm:text-xs">
                        <span className="font-bold text-brand-700 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                          BOM RECIPE BUILDER
                        </span>
                        <span className="bg-brand-50 text-brand-700 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border border-brand-200/60 shadow-xs">
                          Batch #802
                        </span>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
                        <div className="flex items-center justify-between bg-white/65 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-white/80 shadow-xs">
                          <span className="text-slate-800 font-medium">Flour (ময়দা) 50kg</span>
                          <span className="text-rose-600 font-bold font-mono">-50.00</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/65 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-white/80 shadow-xs">
                          <span className="text-slate-800 font-medium">Sugar (চিনি) 10kg</span>
                          <span className="text-rose-600 font-bold font-mono">-10.00</span>
                        </div>
                      </div>

                      <div className="bg-brand-600 text-white rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px]">
                          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                          <span>Finished: 100 Pcs Bakery Pack</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] bg-white/20 px-1.5 sm:px-2 py-0.5 rounded font-bold">Auto In Stock</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* STACKED CARD 2: Repair & Service Job Tracking (Scroll Triggered) */}
          <div className={`sticky top-24 sm:top-32 z-20 transition-all duration-300 w-full ${isInView ? "animate-module-card-2" : "opacity-0"}`}>
            <div className="relative p-[2px] rounded-[24px] sm:rounded-[44px] overflow-hidden group cursor-pointer transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(112,72,232,0.25)]">
              {/* Default static border */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[44px] border border-slate-200/90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Animated Rotating Glowing Border Outline on Hover (Dual Layer: Ambient Glow + Sharp Beam) */}
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-80 blur-[8px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

              {/* Inner White Card */}
              <div className="relative z-10 w-full bg-white rounded-[22px] sm:rounded-[42px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">
                
                {/* Left Column (REVERSED): Background sfbcb.png + Floating Purple UI Mockup Card */}
                <div className="relative min-h-[220px] sm:min-h-[440px] lg:min-h-full flex items-center justify-center p-3.5 sm:p-12 overflow-hidden order-2 lg:order-1">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/sfbcb.png"
                      alt="Repair Job Background"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Floating Repair Ticket Card in Purple Theme (80% Foggy Blur Glassmorphism + Hover Outline Animation) */}
                  <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl overflow-hidden group/floating cursor-pointer transition-all duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(112,72,232,0.35)] z-10 w-full max-w-[320px] sm:max-w-[410px]">
                    {/* Default static border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white group-hover/floating:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

                    {/* Animated Rotating Glowing Border Outline on Hover */}
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-80 blur-[4px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

                    {/* Inner Card Content */}
                    <div className="relative z-10 w-full h-full rounded-[14.5px] sm:rounded-[22.5px] bg-white/80 hover:bg-white/85 backdrop-blur-xl p-3.5 sm:p-6 transition-all duration-300 space-y-2 sm:space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/50 text-[11px] sm:text-xs">
                        <span className="font-bold text-brand-700 flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                          JOB TICKET #TK-4409
                        </span>
                        <span className="bg-brand-50 text-brand-700 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-brand-200/60 shadow-xs">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </span>
                      </div>

                      <div className="bg-white/65 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/80 shadow-xs text-[11px] sm:text-xs">
                        <div className="flex items-center justify-between font-bold text-slate-800">
                          <span>iPhone 13 Display Replacement</span>
                          <span className="text-brand-700 font-mono">৳ 12,500</span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-600 mt-1 font-medium">Technician: Tanvir Alam &middot; Counter 2</div>
                      </div>

                      <div className="bg-brand-600 text-white rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px]">
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Customer SMS Status</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] bg-white/20 px-1.5 sm:px-2 py-0.5 rounded font-bold">Auto-Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (REVERSED): Text & Features */}
                <div className="p-5 sm:p-12 lg:p-16 flex flex-col justify-center space-y-3 sm:space-y-6 text-left order-1 lg:order-2">
                  <h3 className="text-[18px] sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-[1.18] transition-all duration-300">
                    {t.cards[1].title}
                  </h3>

                  <p className="text-slate-600 text-[12px] sm:text-lg leading-relaxed max-w-lg transition-all duration-300">
                    {t.cards[1].description}
                  </p>

                  <div className="space-y-2 sm:space-y-4 pt-1 sm:pt-2">
                    {t.cards[1].features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3.5 text-[12px] sm:text-base text-slate-800 font-medium transition-all duration-300">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* STACKED CARD 3: WooCommerce & Online Store Sync (Scroll Triggered) */}
          <div className={`sticky top-28 sm:top-36 z-30 transition-all duration-300 w-full ${isInView ? "animate-module-card-3" : "opacity-0"}`}>
            <div className="relative p-[2px] rounded-[24px] sm:rounded-[44px] overflow-hidden group cursor-pointer transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(112,72,232,0.25)]">
              {/* Default static border */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[44px] border border-slate-200/90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Animated Rotating Glowing Border Outline on Hover (Dual Layer: Ambient Glow + Sharp Beam) */}
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-80 blur-[8px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#8E65FF_360deg)] opacity-0 group-hover:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

              {/* Inner White Card */}
              <div className="relative z-10 w-full bg-white rounded-[22px] sm:rounded-[42px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">
                
                {/* Left Column: Text & Features */}
                <div className="p-5 sm:p-12 lg:p-16 flex flex-col justify-center space-y-3 sm:space-y-6 text-left">
                  <h3 className="text-[18px] sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-[1.18] transition-all duration-300">
                    {t.cards[2].title}
                  </h3>

                  <p className="text-slate-600 text-[12px] sm:text-lg leading-relaxed max-w-lg transition-all duration-300">
                    {t.cards[2].description}
                  </p>

                  <div className="space-y-2 sm:space-y-4 pt-1 sm:pt-2">
                    {t.cards[2].features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3.5 text-[12px] sm:text-base text-slate-800 font-medium transition-all duration-300">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Background adva.png + Floating Purple UI Mockup Card */}
                <div className="relative min-h-[220px] sm:min-h-[440px] lg:min-h-full flex items-center justify-center p-3.5 sm:p-12 overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/adva.png"
                      alt="WooCommerce Sync Background"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Floating 2-Way Sync Card in Purple Theme (80% Foggy Blur Glassmorphism + Hover Outline Animation) */}
                  <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl overflow-hidden group/floating cursor-pointer transition-all duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(112,72,232,0.35)] z-10 w-full max-w-[320px] sm:max-w-[410px]">
                    {/* Default static border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white group-hover/floating:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

                    {/* Animated Rotating Glowing Border Outline on Hover */}
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-80 blur-[4px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover/floating:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

                    {/* Inner Card Content */}
                    <div className="relative z-10 w-full h-full rounded-[14.5px] sm:rounded-[22.5px] bg-white/80 hover:bg-white/85 backdrop-blur-xl p-3.5 sm:p-6 transition-all duration-300 space-y-2 sm:space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/50 text-[11px] sm:text-xs">
                        <span className="font-bold text-brand-700 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                          WOOCOMMERCE LIVE SYNC
                        </span>
                        <span className="bg-brand-50 text-brand-700 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-brand-200/60 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          2-Way Active
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                        <div className="bg-white/65 backdrop-blur-md p-2 sm:p-3 rounded-xl border border-white/80 shadow-xs text-center">
                          <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600 mx-auto mb-1" />
                          <div className="text-[9px] sm:text-[10px] text-slate-600 font-semibold">OUTLET POS</div>
                          <div className="font-bold text-navy-900 mt-0.5">18 Pcs Stock</div>
                        </div>
                        <div className="bg-white/65 backdrop-blur-md p-2 sm:p-3 rounded-xl border border-white/80 shadow-xs text-center">
                          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600 mx-auto mb-1" />
                          <div className="text-[9px] sm:text-[10px] text-slate-600 font-semibold">ONLINE STORE</div>
                          <div className="font-bold text-navy-900 mt-0.5">18 Pcs Stock</div>
                        </div>
                      </div>

                      <div className="bg-brand-600 text-white rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px]">
                          <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Real-time Orders Ingested</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] bg-white/20 px-1.5 sm:px-2 py-0.5 rounded font-bold">Auto Synced</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
