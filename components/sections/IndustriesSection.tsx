"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import {
  ShoppingBag,
  Pill,
  Utensils,
  Car,
  Smartphone,
  Factory,
  Building2,
  Truck,
} from "lucide-react";

export function IndustriesSection() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const iconConfig: Record<string, { icon: React.ReactNode; bgClass: string }> = {
    ShoppingBag: {
      icon: <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-brand-600",
    },
    Pill: {
      icon: <Pill className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-teal-600",
    },
    Utensils: {
      icon: <Utensils className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-amber-500",
    },
    Car: {
      icon: <Car className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-blue-600",
    },
    Smartphone: {
      icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-purple-600",
    },
    Factory: {
      icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-rose-600",
    },
    Building2: {
      icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-indigo-600",
    },
    Truck: {
      icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2]" />,
      bgClass: "bg-emerald-600",
    },
  };

  const content = {
    EN: {
      eyebrow: "Industry Specific Solutions",
      title: "Built for every kind of business that buys, stocks & sells",
      subtitle:
        "Tailored features and workflows calibrated for Bangladesh's most common retail, wholesale, and service sectors.",
      industries: [
        {
          icon: "ShoppingBag",
          title: "Grocery Stores & Supershops",
          desc: "Barcode scanning, scale integration, expiry alerts, and multi-counter POS billing.",
        },
        {
          icon: "Pill",
          title: "Pharmacies & Drugstores",
          desc: "Batch number lookup, expiry tracking, doctor prescription, and license records.",
        },
        {
          icon: "Utensils",
          title: "Restaurants & Bakeries",
          desc: "KOT kitchen display, table order billing, recipe costing, and takeaway parcels.",
        },
        {
          icon: "Car",
          title: "Auto Parts & Garages",
          desc: "Part serial tracking, vehicle fitment search, mechanic job cards, and invoices.",
        },
        {
          icon: "Smartphone",
          title: "Electronics & Repair Shops",
          desc: "IMEI warranty lookup, digital service tickets, technician jobs, and accessories.",
        },
        {
          icon: "Factory",
          title: "Manufacturing & Wholesale",
          desc: "Raw material buying, batch recipe tracking, bulk carton packing, and credit dues.",
        },
        {
          icon: "Building2",
          title: "Multi-Branch Retail Chains",
          desc: "Central catalog, branch stock requisitions, staff access roles, and analytics.",
        },
        {
          icon: "Truck",
          title: "Online & Offline Brands",
          desc: "WooCommerce store sync, courier parcel tracking, inventory updates, and orders.",
        },
      ],
    },
    BN: {
      eyebrow: "নির্দিষ্ট খাতের ব্যবসায়িক সমাধান",
      title: "ক্রয়, স্টক ও বিক্রয় করে এমন যেকোনো ব্যবসার জন্য প্রস্তুত",
      subtitle:
        "বাংলাদেশের খুচরা দোকান, পাইকারি ব্যবসা ও সার্ভিসিং সেক্টরের বাস্তব চাহিদার সাথে মিলিয়ে বিশেষভাবে তৈরি।",
      industries: [
        {
          icon: "ShoppingBag",
          title: "মুদি দোকান ও সুপারশপ",
          desc: "বারকোড স্ক্যানিং, ডিজিটাল ওজন স্কেল সংযোগ, মেয়াদোত্তীর্ণ এলার্ট এবং মাল্টি-কাউন্টার দ্রুত বিলিং।",
        },
        {
          icon: "Pill",
          title: "ফার্মেসি ও ড্রাগস্টোর",
          desc: "ওষুধের ব্যাচ নম্বর ও মেয়াদ ট্র্যাকিং, ডাক্তারের প্রেসক্রিপশন ভিউ এবং সরকার-নির্ধারিত লাইসেন্স রেকর্ড।",
        },
        {
          icon: "Utensils",
          title: "রেস্টুরেন্ট ও বেকারি",
          desc: "কিচেন KOT ডিসপ্লে, টেবিল অর্ডার ম্যানেজমেন্ট, আইটেম রেসিপি খরচ এবং দ্রুত পার্সেল বিলিং।",
        },
        {
          icon: "Car",
          title: "অটো পার্টস ও গ্যারেজ",
          desc: "যন্ত্রাংশের সিরিয়াল/SKU ট্র্যাকিং, গাড়ি ফিটমেন্ট সার্চ, মেকানিক জব কার্ড ও সার্ভিস ইনভয়েস।",
        },
        {
          icon: "Smartphone",
          title: "ইলেকট্রনিক্স ও মোবাইল শপ",
          desc: "IMEI ও ওয়ারেন্টি সার্চ, ডিজিটাল সার্ভিস টিকিট, টেকনিশিয়ান কাজ এবং এক্সেসরিজ ম্যানেজমেন্ট।",
        },
        {
          icon: "Factory",
          title: "ম্যানুফ্যাকচারিং ও পাইকারি ব্যবসা",
          desc: "কাঁচামাল ক্রয়, ব্যাচ উৎপাদন রেসিপি (BOM), কার্টুন প্যাকিং এবং পাইকারি বাকির খাতা।",
        },
        {
          icon: "Building2",
          title: "মাল্টি-আউটলেট রিটেইল চেইন",
          desc: "সেন্ট্রাল ক্যাটালগ, ইন্টার-ব্রাঞ্চ স্টক রিকুইজিশন, স্টাফ রোল কন্ট্রোল এবং সেন্ট্রাল সেলস রিপোর্ট।",
        },
        {
          icon: "Truck",
          title: "অনলাইন ও অফলাইন শপ",
          desc: "WooCommerce ওয়েবসাইট সিঙ্ক, কুরিয়ার পার্সেল ট্র্যাকিং, স্বয়ংক্রিয় স্টক আপডেট এবং অর্ডার প্রসেসিং।",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section ref={ref} id="industries" className="py-8 sm:py-28 bg-[#0A0E1A] relative overflow-hidden border-y border-slate-800/80">
      
      {/* Ambient Dark Mesh / Radial Purple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(112,72,232,0.18),transparent_70%)] pointer-events-none" />

      {/* Container aligned with max-w-6xl Navbar width */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Dark Mode Section Heading with Store/Building Animated Line Icon (Scroll Triggered) */}
        <div className={`flex flex-col items-center text-center max-w-5xl mx-auto mb-6 sm:mb-18 space-y-2.5 sm:space-y-4 ${isInView ? "animate-industries-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Store/Business stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/90 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-400 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V11m14 10V11m-9 10v-4a2 2 0 0 1 4 0v4" />
              </svg>
            </div>
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.2] transition-all duration-300">
            {t.title}
          </h2>

          <p className="text-[14px] sm:text-base lg:text-[16px] text-slate-400 leading-relaxed max-w-4xl mx-auto transition-all duration-300">
            {t.subtitle}
          </p>
        </div>

        {/* 8 Dark Cards Grid with Vibrant Icons & High Contrast (Scroll Triggered - 2 Cards per row on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {t.industries.map((ind, idx) => {
            const config = iconConfig[ind.icon] || {
              icon: <ShoppingBag className="w-5 h-5 sm:w-8 sm:h-8 text-white" />,
              bgClass: "bg-brand-600",
            };
            const animClass = isInView ? `animate-industry-card-${idx + 1}` : "opacity-0";

            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-7 rounded-[18px] sm:rounded-3xl border border-slate-800/90 bg-[#12192B]/95 hover:bg-[#16213A] hover:border-brand-500/50 flex flex-col justify-between h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(112,72,232,0.25)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${animClass}`}
              >
                <div className="flex flex-col flex-1">
                  {/* Large 4x Scaled Flat Solid Icon Box with Continuous Line Stroke Draw Loop Animation */}
                  <div className="mb-3 sm:mb-6 flex justify-start">
                    <div
                      className={`w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md icon-stroke-loop ${config.bgClass}`}
                    >
                      {config.icon}
                    </div>
                  </div>

                  {/* Equal-height Title Container */}
                  <div className="min-h-[40px] sm:min-h-[54px] flex items-start mb-1.5 sm:mb-2.5">
                    <h3 className="text-[14px] sm:text-xl font-bold text-white tracking-tight leading-[1.25] group-hover:text-brand-300 transition-colors">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Equal-height Description Container */}
                  <p className="text-slate-400 text-[11px] sm:text-sm leading-relaxed flex-1 transition-all duration-300">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
