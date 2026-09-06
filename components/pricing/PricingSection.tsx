"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { useLeadModal } from "@/context/LeadModalContext";
import {
  Check,
  ShieldCheck,
  CreditCard,
  Zap,
  Headphones,
} from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activePlanTab, setActivePlanTab] = useState<string>("growth");
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });
  const { openModal } = useLeadModal();

  const content = {
    EN: {
      eyebrow: "Transparent Investment",
      title: "Plans that scale with your business growth",
      description:
        "Straightforward pricing in Bangladeshi Taka (৳) with no hidden fees or surprise setup costs.",
      monthlyBilling: "Monthly Billing",
      annualBilling: "Annual Billing",
      saveTag: "Save 20%",
      includedFeatures: "Included Features:",
      monthUnit: "/ month",
      monthAnnualUnit: "/ month (annual)",
      plans: [
        {
          id: "starter",
          name: "Starter",
          tagline: "Single-shop retail & fast billing",
          price: "1,499",
          popular: false,
          ctaText: "Start 14-Day Free Trial",
          features: [
            "1 Business Location / Branch",
            "Unlimited POS Billing & Invoices",
            "Live Inventory & Barcode Support",
            "Customer Due & Khata Ledger",
            "Thermal Receipt & PDF Printing",
            "Basic Sales & Stock Reports",
            "Email & WhatsApp Support",
          ],
        },
        {
          id: "growth",
          name: "Growth",
          tagline: "For growing multi-branch businesses",
          price: "2,999",
          popular: true,
          badge: "Most Popular",
          ctaText: "Start 14-Day Free Trial",
          features: [
            "Everything in Starter, plus:",
            "Up to 5 Outlets & Warehouses",
            "Inter-branch Stock Transfers",
            "Automated SMS Due Reminders",
            "HRM, Staff Attendance & Payroll",
            "Advanced Profit/Loss & Tax Reports",
            "Multi-user Roles & Permissions",
            "Priority 24/7 Phone & Remote Support",
          ],
        },
        {
          id: "custom",
          name: "Enterprise",
          tagline: "Manufacturing, repair & custom chains",
          price: "Custom",
          popular: false,
          ctaText: "Talk to Business Advisor",
          features: [
            "Everything in Growth, plus:",
            "Unlimited Locations & Warehouses",
            "Recipe & BOM Manufacturing Module",
            "Repair Job Tickets & Service Center",
            "WooCommerce & E-commerce Live Sync",
            "Custom ERP Integrations & API Access",
            "Dedicated Account Manager & On-site Setup",
          ],
        },
      ],
      assurances: [
        { stat: "#1", desc: "Top-rated cloud POS & ERP platform for modern retail businesses" },
        { stat: "14 Days", desc: "Full-access free trial with zero payment card required" },
        { stat: "৳ 0", desc: "Zero setup cost & no hidden surprise fees" },
        { stat: "24/7", desc: "Dedicated phone, WhatsApp & remote support team" },
      ],
    },
    BN: {
      eyebrow: "স্বচ্ছ ও সাশ্রয়ী ইনভেস্টমেন্ট",
      title: "আপনার ব্যবসার বৃদ্ধির সাথে মানানসই প্যাকেজসমূহ",
      description:
        "কোনো লুকানো খরচ বা অতিরিক্ত চার্জ নেই — বাংলাদেশি টাকা (৳)-তে স্বচ্ছ ও সাশ্রয়ী প্যাকেজ।",
      monthlyBilling: "মাসিক বিলিং",
      annualBilling: "বার্ষিক বিলিং",
      saveTag: "২০% ছাড়",
      includedFeatures: "প্যাকেজে যা যা অন্তর্ভুক্ত:",
      monthUnit: "/ মাস",
      monthAnnualUnit: "/ মাস (বার্ষিক)",
      plans: [
        {
          id: "starter",
          name: "স্টার্টার (Starter)",
          tagline: "একক দোকান ও দ্রুত বিলিংয়ের জন্য",
          price: "১,৪৯৯",
          popular: false,
          ctaText: "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন",
          features: [
            "১টি বিজনেস লোকেশন / ব্রাঞ্চ",
            "আনলিমিটেড POS বিলিং ও ইনভয়েস",
            "লাইভ ইনভেন্টরি ও বারকোড সাপোর্ট",
            "কাস্টমার বাকি ও ডিজিটাল খাতা",
            "থার্মাল রিসিট ও PDF প্রিন্টিং",
            "বেসিক বিক্রয় ও স্টক রিপোর্ট",
            "ইমেইল ও হোয়াটসঅ্যাপ সাপোর্ট",
          ],
        },
        {
          id: "growth",
          name: "গ্রোথ (Growth)",
          tagline: "ক্রমবর্ধমান মাল্টি-ব্রাঞ্চ ব্যবসার জন্য",
          price: "২,৯৯৯",
          popular: true,
          badge: "সর্বাধিক জনপ্রিয়",
          ctaText: "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন",
          features: [
            "স্টার্টার প্যাকেজের সব ফিচার, এবং সাথে:",
            "৫টি পর্যন্ত আউটলেট ও গোডাউন",
            "ইন্টার-ব্রাঞ্চ স্টক ট্রান্সফার",
            "স্বয়ংক্রিয় SMS বাকি রিমাইন্ডার",
            "স্টাফ হাজিরা ও বেতন ম্যানেজমেন্ট",
            "উন্নত লাভ-ক্ষতি ও ভ্যাট রিপোর্ট",
            "মাল্টি-ইউজার রোল ও পারমিশন",
            "অগ্রাধিকার ভিত্তিতে ২৪/৭ সাপোর্ট",
          ],
        },
        {
          id: "custom",
          name: "এন্টারপ্রাইজ (Enterprise)",
          tagline: "ম্যানুফ্যাকচারিং, সার্ভিসিং ও বড় চেইনের জন্য",
          price: "কাস্টম",
          popular: false,
          ctaText: "পরামর্শকের সাথে কথা বলুন",
          features: [
            "গ্রোথ প্যাকেজের সব ফিচার, এবং সাথে:",
            "আনলিমিটেড লোকেশন ও গোডাউন",
            "BOM রেসিপি ও উৎপাদন মডিউল",
            "রিপেয়ার সার্ভিস ও জব টিকিট সিস্টেম",
            "WooCommerce ও অনলাইন শপ সিঙ্ক",
            "কাস্টম ERP ইন্টিগ্রেশন ও API এক্সেস",
            "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার ও অনসাইট সেটআপ",
          ],
        },
      ],
      assurances: [
        { stat: "#১", desc: "বাংলাদেশের রিটেইল ব্যবসার শীর্ষস্থানীয় ক্লাউড পিওএস প্ল্যাটফর্ম" },
        { stat: "১৪ দিন", desc: "সম্পূর্ণ ফ্রি ট্রায়াল, কোনো কার্ড বা অগ্রিম পেমেন্ট নেই" },
        { stat: "০ টাকা", desc: "জিরো সেটআপ ফি এবং কোনো গোপন বা বাড়তি চার্জ নেই" },
        { stat: "২৪/৭", desc: "সার্বক্ষণিক ডেডিকেটেড ফোন ও রিমোট টেকনিক্যাল সাপোর্ট" },
      ],
    },
  };

  const t = content[language];

  // Helper function for price calculations
  const calculatePrice = (priceStr: string) => {
    if (priceStr === "Custom" || priceStr === "কাস্টম") return priceStr;
    const numericEn = priceStr
      .replace(/১/g, "1")
      .replace(/২/g, "2")
      .replace(/৩/g, "3")
      .replace(/৪/g, "4")
      .replace(/৫/g, "5")
      .replace(/৬/g, "6")
      .replace(/৭/g, "7")
      .replace(/৮/g, "8")
      .replace(/৯/g, "9")
      .replace(/০/g, "0")
      .replace(/,/g, "");

    const val = parseInt(numericEn, 10);
    if (isNaN(val)) return priceStr;

    if (billingCycle === "yearly") {
      const discounted = Math.round(val * 0.8);
      if (language === "BN") {
        return discounted
          .toLocaleString()
          .replace(/1/g, "১")
          .replace(/2/g, "২")
          .replace(/3/g, "৩")
          .replace(/4/g, "৪")
          .replace(/5/g, "৫")
          .replace(/6/g, "৬")
          .replace(/7/g, "৭")
          .replace(/8/g, "৮")
          .replace(/9/g, "৯")
          .replace(/0/g, "০");
      }
      return discounted.toLocaleString();
    }
    return priceStr;
  };

  return (
    <section ref={ref} id="pricing" className="py-8 sm:py-28 relative overflow-hidden bg-white border-y border-slate-200/80">
      {/* Base Background Image Layer */}
      <div className="absolute inset-x-0 top-[100px] bottom-0 w-full pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full scale-90 opacity-60">
          <Image
            src="/qawefsdf.png"
            alt="Pricing Background Pattern"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Aligned with Navbar width (max-w-6xl) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Heading with Animated Loop Card Icon & Brand Purple Pill (Scroll Triggered) */}
        <div className={`max-w-3xl mx-auto text-center mb-5 sm:mb-10 ${isInView ? "animate-pricing-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Credit Card stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
            {t.title}
          </h2>

          <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto transition-all duration-300">
            {t.description}
          </p>
        </div>

        {/* Interactive Segmented Billing Toggle (Scroll Triggered) */}
        <div className={`flex items-center justify-center mb-3 sm:mb-16 ${isInView ? "animate-pricing-toggle" : "opacity-0"}`}>
          <div className="inline-flex items-center bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-navy-900 shadow-sm"
                  : "text-slate-500 hover:text-navy-900"
              }`}
            >
              {t.monthlyBilling}
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-white text-navy-900 shadow-sm"
                  : "text-slate-500 hover:text-navy-900"
              }`}
            >
              <span>{t.annualBilling}</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                {t.saveTag}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Plan Tabs Switcher (< lg) - Exactly in the highlighted position */}
        <div className={`flex lg:hidden items-center justify-center mb-6 ${isInView ? "animate-pricing-toggle" : "opacity-0"}`}>
          <div className="grid grid-cols-3 gap-1 bg-slate-100/95 p-1 rounded-full border border-slate-200/80 shadow-inner w-full max-w-sm">
            {t.plans.map((plan) => {
              const isActive = activePlanTab === plan.id;
              const isGrowth = plan.popular;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setActivePlanTab(plan.id)}
                  className={`py-2 px-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer select-none ${
                    isActive
                      ? isGrowth
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-white text-navy-950 shadow-sm"
                      : "text-slate-500 hover:text-navy-900"
                  }`}
                >
                  <span className="truncate">
                    {language === "BN"
                      ? plan.id === "starter"
                        ? "স্টার্টার"
                        : plan.id === "growth"
                        ? "গ্রোথ"
                        : "এন্টারপ্রাইজ"
                      : plan.name}
                  </span>
                  {isGrowth && (
                    <span className={`text-[10px] ${isActive ? "text-amber-300" : "text-brand-600"}`}>★</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pricing Cards Grid (Scroll Triggered) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {t.plans.map((plan, idx) => {
            const isGrowth = plan.popular;
            const finalPrice = calculatePrice(plan.price);
            const isCustom = plan.price === "Custom" || plan.price === "কাস্টম";
            const animClass = isInView ? `animate-pricing-card-${idx + 1}` : "opacity-0";
            const isTabActive = activePlanTab === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[28px] p-7 sm:p-9 flex-col justify-between transition-all duration-300 ${animClass} ${
                  isTabActive ? "flex" : "hidden lg:flex"
                } ${
                  isGrowth
                    ? "bg-white/70 hover:bg-white/80 backdrop-blur-3xl backdrop-saturate-150 border-2 border-brand-600 shadow-[0_25px_60px_rgba(112,72,232,0.18)] lg:-translate-y-2.5 ring-4 ring-brand-500/15"
                    : "bg-white/60 hover:bg-white/70 backdrop-blur-3xl backdrop-saturate-150 border border-white/90 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.07),0_0_1px_1px_rgba(255,255,255,0.6)]"
                }`}
              >
                {/* Popular Pill Badge */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="pb-5 border-b border-slate-200/80 text-left">
                    <h3 className="text-[18px] sm:text-2xl font-extrabold text-navy-950 transition-all duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-[12px] sm:text-sm font-medium mt-1 transition-all duration-300">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-6 flex items-baseline gap-1 text-left">
                    {!isCustom && (
                      <span className="text-2xl font-bold text-navy-950">৳</span>
                    )}
                    <span className="text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight transition-all duration-300">
                      {finalPrice}
                    </span>
                    {!isCustom && (
                      <span className="text-slate-600 text-xs sm:text-sm font-semibold ml-1 transition-all duration-300">
                        {billingCycle === "yearly" ? t.monthAnnualUnit : t.monthUnit}
                      </span>
                    )}
                  </div>

                  {/* Feature Capabilities Checklist */}
                  <div className="space-y-3 pt-6 border-t border-slate-200/80 text-left">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      {t.includedFeatures}
                    </div>
                    {plan.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-[12px] sm:text-[13.5px] text-slate-900 font-semibold leading-snug transition-all duration-300"
                      >
                        <div className="w-4 h-4 rounded-full bg-brand-50 text-brand-600 border border-brand-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action - Exactly Matching Navbar Pill Button Style + Modal Trigger */}
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => openModal(plan.name)}
                    className={`w-full relative px-4 sm:px-5 py-3 rounded-full text-xs sm:text-[13.5px] font-semibold transition-all duration-200 group overflow-hidden select-none cursor-pointer ${
                      isGrowth
                        ? "bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white ring-[3px] ring-purple-600/20 hover:ring-purple-600/35 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15)]"
                        : "bg-white text-slate-700 hover:text-navy-950 border border-slate-300/90 ring-[3px] ring-slate-200/50 hover:ring-brand-500/20 hover:border-brand-400 shadow-sm"
                    }`}
                  >
                    <div className="relative overflow-hidden h-[20px] sm:h-[22px] flex flex-col justify-center">
                      {/* Default text (slides up and cleanly fades out on hover) */}
                      <div className="flex items-center justify-center whitespace-nowrap transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                        <span>{plan.ctaText}</span>
                      </div>

                      {/* Duplicate text (slides up and cleanly fades in on hover) */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 ${
                          isGrowth ? "text-white" : "text-brand-700"
                        }`}
                      >
                        <span>{plan.ctaText}</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Trust & Stats Banner (Flipped: Blue to Purple Vertical Gradient) */}
        <div
          className={`mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2563EB] via-[#5052F5] to-[#7B3FE4] text-white p-5 sm:p-8 lg:py-9 lg:px-10 shadow-[0_22px_50px_-10px_rgba(37,99,235,0.35)] border border-white/20 relative overflow-hidden ${
            isInView ? "animate-pricing-toggle" : "opacity-0"
          }`}
        >
          {/* Pixel-Perfect Curved Arc Shape in Background (Exact match with reference image) */}
          <div className="absolute right-0 bottom-0 top-0 w-[240px] sm:w-[340px] pointer-events-none overflow-hidden select-none">
            <svg
              className="absolute right-0 bottom-0 w-[260px] sm:w-[320px] h-[200px] sm:h-[220px] pointer-events-none"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer soft ambient glow */}
              <circle
                cx="250"
                cy="230"
                r="160"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="70"
              />
              {/* Main solid curved band matching reference image */}
              <circle
                cx="250"
                cy="230"
                r="140"
                stroke="white"
                strokeOpacity="0.16"
                strokeWidth="48"
              />
            </svg>
          </div>

          {/* 2 Rows & 2 Columns Grid on Mobile, 4 Columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative z-10 w-full">
            {t.assurances.map((item, idx) => {
              const borderStyles = [
                // 1. Top-Left on mobile | 1st Col on desktop
                "border-r border-b border-dashed border-white/20 pr-3.5 pb-4 sm:pr-6 sm:pb-6 lg:border-b-0 lg:pb-0 lg:pl-0 lg:pr-6 xl:pr-8",
                // 2. Top-Right on mobile | 2nd Col on desktop
                "border-b border-dashed border-white/20 pl-3.5 pb-4 sm:pl-6 sm:pb-6 lg:border-b-0 lg:pb-0 lg:pl-6 xl:pl-8 lg:border-r lg:pr-6 xl:pr-8",
                // 3. Bottom-Left on mobile | 3rd Col on desktop
                "border-r border-dashed border-white/20 pr-3.5 pt-4 sm:pr-6 sm:pt-6 lg:pt-0 lg:pl-6 xl:pl-8 lg:border-r lg:pr-6 xl:pr-8",
                // 4. Bottom-Right on mobile | 4th Col on desktop
                "pl-3.5 pt-4 sm:pl-6 sm:pt-6 lg:pt-0 lg:pl-6 xl:pl-8 lg:border-none",
              ];

              return (
                <div
                  key={idx}
                  className={`text-left flex flex-col justify-start ${borderStyles[idx] || ""}`}
                >
                  <div className="text-[22px] sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-none mb-1.5 sm:mb-2.5 drop-shadow-xs">
                    {item.stat}
                  </div>
                  <p className="text-[11px] sm:text-[13.5px] text-white/90 font-medium leading-snug sm:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
