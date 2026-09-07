"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export function FeaturesGrid() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const section3Icons = [
    "/Section 3 icon/Checkout-01.svg",
    "/Section 3 icon/Inventory-01.svg",
    "/Section 3 icon/Ledger-01.svg",
    "/Section 3 icon/Reminder-01.svg",
    "/Section 3 icon/Analytics-01.svg",
    "/Section 3 icon/HRM-01.svg",
  ];

  const content = {
    EN: {
      eyebrow: "Core Capabilities",
      title: "Everything a growing business needs, unified in one place",
      description:
        "Engineered specifically for retailers, distributors, and multi-branch operations in Bangladesh.",
      features: [
        {
          title: "POS Billing & Quick Checkout",
          description:
            "Lightning-fast checkout with keyboard shortcuts, barcode scanner, or touchscreen. Instant thermal receipt printing & SMS slips.",
        },
        {
          title: "Inventory & Multi-Branch Stock",
          description:
            "Live stock tracking across all warehouses and outlets. Automated low-stock thresholds and seamless stock transfers.",
        },
        {
          title: "Purchases & Supplier Ledger",
          description:
            "Record vendor purchase orders, manage supplier accounts, track payments, and automatically reconcile purchase vs. sales margins.",
        },
        {
          title: "Customer Dues & SMS Reminders",
          description:
            "Maintain clear customer baki records per profile. Send automated polite SMS payment reminders with one click.",
        },
        {
          title: "Reports & Profit/Loss Analytics",
          description:
            "Clear daily P&L, stock valuation, top-selling items, and tax-ready summaries — formatted for owners, not accountants.",
        },
        {
          title: "HRM, Attendance & Payroll",
          description:
            "Employee profiles, biometric/manual attendance tracking, commission management, and monthly salary disbursement in one place.",
        },
      ],
    },
    BN: {
      eyebrow: "মূল সক্ষমতা ও ফিচারসমূহ",
      title: "ক্রমবর্ধমান ব্যবসার প্রয়োজনীয় সব টুলস, একটিমাত্র প্ল্যাটফর্মে",
      description:
        "বাংলাদেশের রিটেইল শপ, হোলসেলার ও মাল্টি-ব্রাঞ্চ ব্যবসার বাস্তব চাহিদার কথা মাথায় রেখে তৈরি।",
      features: [
        {
          title: "দ্রুত POS বিলিং ও চেকআউট",
          description:
            "কীবোর্ড শর্টকাট, বারকোড স্ক্যানার বা টাচস্ক্রিনে দ্রুততম বিলিং। সরাসরি থার্মাল রিসিট প্রিন্ট এবং কাস্টমারকে তাৎক্ষণিক SMS ভাউচার প্রেরণ।",
        },
        {
          title: "ইনভেন্টরি ও মাল্টি-ব্রাঞ্চ স্টক",
          description:
            "সব ব্রাঞ্চ ও গোডাউনের লাইভ স্টক ট্র্যাকিং। স্টক শেষ হওয়ার আগেই সতর্কবার্তা এবং এক ব্রাঞ্চ থেকে অন্য ব্রাঞ্চে পণ্য ট্রান্সফার।",
        },
        {
          title: "কেনাকাটা ও সাপ্লায়ার খাতা",
          description:
            "সাপ্লায়ারদের থেকে পণ্য ক্রয়ের হিসাব, বাকি ও পেমেন্ট ট্র্যাকিং এবং স্বয়ংক্রিয় প্রফিট মার্জিন ক্যালকুলেশন।",
        },
        {
          title: "কাস্টমার বাকি ও SMS রিমাইন্ডার",
          description:
            "প্রতিটি কাস্টমারের নিখুঁত ডিজিটাল বাকির খাতা। মাত্র এক ক্লিকে সরাসরি মোবাইলে ভদ্র ও পেশাদার SMS তাগাদা প্রেরণ।",
        },
        {
          title: "দৈনিক লাভ-ক্ষতি ও সেলস রিপোর্ট",
          description:
            "দৈনিক বিক্রয়, লাভ-ক্ষতি, সর্বোচ্চ বিক্রিত পণ্য এবং স্টক ভ্যালুয়েশনের পূর্ণাঙ্গ রিপোর্ট — যা যেকোনো সাধারণ ব্যবসায়ী সহজেই বুঝতে পারেন।",
        },
        {
          title: "স্টাফ হাজিরা ও বেতন ম্যানেজমেন্ট",
          description:
            "কর্মচারীদের প্রোফাইল, দৈনিক হাজিরা ট্র্যাকিং, বিক্রয় কমিশন হিসাব এবং দিনশেষে বা মাসশেষে নির্ভুল বেতন প্রদান।",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section ref={ref} id="features" className="py-8 sm:py-28 bg-white border-y border-slate-200/80">
      {/* Exact match to 1152px Navbar pill with max-w-6xl and lg:px-0 on desktop */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Heading with Animated Loop Icon & Brand Purple Pill (Scroll Triggered) */}
        <div className={`max-w-5xl mx-auto text-center mb-6 sm:mb-16 ${isInView ? "animate-features-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Sparkles stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
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

        {/* 6 Feature Cards Grid with Staggered Entrance (Scroll Triggered - 2 Cards per row on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {t.features.map((feature, idx) => {
            const iconPath = section3Icons[idx] || "/Section 3 icon/Checkout-01.svg";
            const animClass = isInView ? `animate-feature-card-${idx + 1}` : "opacity-0";

            return (
              <Card
                key={idx}
                hoverEffect
                className={`p-3.5 sm:p-9 rounded-[20px] sm:rounded-[32px] min-h-[210px] sm:min-h-[280px] flex flex-col justify-start border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 group ${animClass}`}
              >
                {/* Large Left-Aligned Distinct Vector Icon with No Background & Bigger Dimensions */}
                <div className="mb-3 sm:mb-6 flex justify-start">
                  <div className="relative w-9 h-9 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={iconPath}
                      alt={feature.title}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                {/* Title & Description with spacious typographic hierarchy */}
                <h3 className="text-[14px] sm:text-[22px] font-bold text-navy-900 mb-1.5 sm:mb-3 tracking-tight text-left leading-snug transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-base leading-relaxed text-left transition-all duration-300">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
