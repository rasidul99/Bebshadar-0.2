"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export function IndustriesSection() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const content = {
    EN: {
      eyebrow: "Industry Specific Solutions",
      title: "Built for every kind of business that buys, stocks & sells",
      subtitle:
        "Tailored features and workflows calibrated for Bangladesh's most common retail, wholesale, and service sectors.",
      industries: [
        {
          image: "/Section 6 icons/Grocery.png",
          width: 500,
          height: 500,
          title: "Grocery Stores & Supershops",
          desc: "Barcode scanning, scale integration, expiry alerts, and multi-counter POS billing.",
        },
        {
          image: "/Section 6 icons/Pharmacies.png",
          width: 500,
          height: 500,
          title: "Pharmacies & Drugstores",
          desc: "Batch number lookup, expiry tracking, doctor prescription, and license records.",
        },
        {
          image: "/Section 6 icons/Restaurants.png",
          width: 500,
          height: 500,
          title: "Restaurants & Bakeries",
          desc: "KOT kitchen display, table order billing, recipe costing, and takeaway parcels.",
        },
        {
          image: "/Section 6 icons/Auto Parts.png",
          width: 500,
          height: 500,
          title: "Auto Parts & Garages",
          desc: "Part serial tracking, vehicle fitment search, mechanic job cards, and invoices.",
        },
        {
          image: "/Section 6 icons/Electronics.png",
          width: 560,
          height: 500,
          title: "Electronics & Repair Shops",
          desc: "IMEI warranty lookup, digital service tickets, technician jobs, and accessories.",
        },
        {
          image: "/Section 6 icons/Manufacturing.png",
          width: 560,
          height: 500,
          title: "Manufacturing & Wholesale",
          desc: "Raw material buying, batch recipe tracking, bulk carton packing, and credit dues.",
        },
        {
          image: "/Section 6 icons/Multi-Branch.png",
          width: 684,
          height: 500,
          title: "Multi-Branch Retail Chains",
          desc: "Central catalog, branch stock requisitions, staff access roles, and analytics.",
        },
        {
          image: "/Section 6 icons/Online & Offline Brands.png",
          width: 684,
          height: 500,
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
          image: "/Section 6 icons/Grocery.png",
          width: 500,
          height: 500,
          title: "মুদি দোকান ও সুপারশপ",
          desc: "বারকোড স্ক্যানিং, ডিজিটাল ওজন স্কেল সংযোগ, মেয়াদোত্তীর্ণ এলার্ট এবং মাল্টি-কাউন্টার দ্রুত বিলিং।",
        },
        {
          image: "/Section 6 icons/Pharmacies.png",
          width: 500,
          height: 500,
          title: "ফার্মেসি ও ড্রাগস্টোর",
          desc: "ওষুধের ব্যাচ নম্বর ও মেয়াদ ট্র্যাকিং, ডাক্তারের প্রেসক্রিপশন ভিউ এবং সরকার-নির্ধারিত লাইসেন্স রেকর্ড।",
        },
        {
          image: "/Section 6 icons/Restaurants.png",
          width: 500,
          height: 500,
          title: "রেস্টুরেন্ট ও বেকারি",
          desc: "কিচেন KOT ডিসপ্লে, টেবিল অর্ডার ম্যানেজমেন্ট, আইটেম রেসিপি খরচ এবং দ্রুত পার্সেল বিলিং।",
        },
        {
          image: "/Section 6 icons/Auto Parts.png",
          width: 500,
          height: 500,
          title: "অটো পার্টস ও গ্যারেজ",
          desc: "যন্ত্রাংশের সিরিয়াল/SKU ট্র্যাকিং, গাড়ি ফিটমেন্ট সার্চ, মেকানিক জব কার্ড ও সার্ভিস ইনভয়েস।",
        },
        {
          image: "/Section 6 icons/Electronics.png",
          width: 560,
          height: 500,
          title: "ইলেকট্রনিক্স ও মোবাইল শপ",
          desc: "IMEI ও ওয়ারেন্টি সার্চ, ডিজিটাল সার্ভিস টিকিট, টেকনিশিয়ান কাজ এবং এক্সেসরিজ ম্যানেজমেন্ট।",
        },
        {
          image: "/Section 6 icons/Manufacturing.png",
          width: 560,
          height: 500,
          title: "ম্যানুফ্যাকচারিং ও পাইকারি ব্যবসা",
          desc: "কাঁচামাল ক্রয়, ব্যাচ উৎপাদন রেসিপি (BOM), কার্টুন প্যাকিং এবং পাইকারি বাকির খাতা।",
        },
        {
          image: "/Section 6 icons/Multi-Branch.png",
          width: 684,
          height: 500,
          title: "মাল্টি-আউটলেট রিটেইল চেইন",
          desc: "সেন্ট্রাল ক্যাটালগ, ইন্টার-ব্রাঞ্চ স্টক রিকুইজিশন, স্টাফ রোল কন্ট্রোল এবং সেন্ট্রাল সেলস রিপোর্ট।",
        },
        {
          image: "/Section 6 icons/Online & Offline Brands.png",
          width: 684,
          height: 500,
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
            const animClass = isInView ? `animate-industry-card-${idx + 1}` : "opacity-0";

            return (
              <div
                key={idx}
                className={`relative p-[1.5px] rounded-[18px] sm:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(112,72,232,0.35)] flex flex-col justify-between h-full ${animClass}`}
              >
                {/* Default static border */}
                <div className="absolute inset-0 rounded-[18px] sm:rounded-3xl border border-slate-800/90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Animated Rotating Glowing Border Outline on Hover (Dual Layer: Ambient Glow + Sharp Beam) */}
                <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover:opacity-80 blur-[6px] animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#7048E8_315deg,#A78BFA_345deg,#FFFFFF_360deg)] opacity-0 group-hover:opacity-100 animate-border-rotate transition-opacity duration-300 pointer-events-none z-0" />

                {/* Card Body with Cinematic Gradient */}
                <div className="relative z-10 w-full h-full rounded-[16.5px] sm:rounded-[22.5px] bg-gradient-to-br from-black from-20% via-[#0B1224] via-65% to-[#16213A] group-hover:via-[#0F1930] group-hover:to-[#1D2B4A] p-3.5 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_-10px_rgba(0,0,0,0.7)] transition-all duration-300">
                  <div className="flex flex-col flex-1">
                    {/* High-Resolution PNG Industry Icon (Uniform Height Across All Cards) */}
                    <div className="mb-3 sm:mb-6 h-12 sm:h-16 lg:h-[72px] flex items-center justify-start">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        width={ind.width}
                        height={ind.height}
                        className="h-12 sm:h-16 lg:h-[72px] w-auto object-contain transition-transform duration-300 origin-left group-hover:scale-110"
                      />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
