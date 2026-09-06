"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const content = {
    EN: {
      eyebrow: "Got Questions?",
      titleLine1: "Frequently Asked",
      titleLine2: "Questions",
      subtitle: "Get answers to common questions here",
      faqs: [
        {
          q: "Do I need special hardware or expensive POS machines to use Bebshadar?",
          a: "No special hardware required! Bebshadar runs smoothly in any web browser on standard desktops, laptops, tablets, or even smartphones. It connects seamlessly with standard thermal receipt printers, barcode scanners, and cash drawers you already have.",
        },
        {
          q: "Can I manage multiple shops, branches, and warehouses under one account?",
          a: "Yes! Bebshadar is built from the ground up for multi-branch operations. You can track stock, sales, cash balances, and staff performance for each branch independently or view unified consolidated reports in one central dashboard.",
        },
        {
          q: "How does customer due (Baki) tracking and SMS notification work?",
          a: "Every customer can have their own digital ledger. When a sale is made with partial or no payment, the balance is logged. You can view total dues at any moment and send customized SMS payment reminders directly to their phone with a single click.",
        },
        {
          q: "Will my staff need extensive training to use Bebshadar?",
          a: "Not at all. The billing interface is intentionally designed to be as straightforward as a smartphone or calculator. Most retail staff learn how to scan, bill, and print receipts within 15 minutes of onboarding.",
        },
      ],
    },
    BN: {
      eyebrow: "সাধারণ জিজ্ঞাসা",
      titleLine1: "সচরাচর জিজ্ঞাসিত",
      titleLine2: "প্রশ্ন ও উত্তর",
      subtitle: "ব্যবসাদ্বার সম্পর্কিত সব সাধারণ প্রশ্নের স্পষ্ট উত্তর এখানে দেওয়া হলো",
      faqs: [
        {
          q: "ব্যবসাদ্বার ব্যবহার করতে কি দামি POS মেশিন বা বিশেষ ডিভাইসের প্রয়োজন আছে?",
          a: "কোনো বিশেষ বা দামি হার্ডওয়্যারের প্রয়োজন নেই! আপনার দোকানে থাকা সাধারণ কম্পিউটার, ল্যাপটপ, ট্যাবলেট বা স্মার্টফোনের যেকোনো ব্রাউজারেই ব্যবসাদ্বার স্মুথভাবে চলে। এছাড়া যেকোনো সাধারণ থার্মাল রিসিট প্রিন্টার, বারকোড স্ক্যানার ও ক্যাশ ড্রয়ারের সাথে এটি খুব সহজেই কানেক্ট হয়ে যায়।",
        },
        {
          q: "আমি কি একটি অ্যাকাউন্ট থেকেই একাধিক দোকান, ব্রাঞ্চ ও গোডাউন পরিচালনা করতে পারব?",
          a: "হ্যাঁ, অবশ্যই! ব্যবসাদ্বার মূলত মাল্টি-ব্রাঞ্চ বিজনেসের জন্যই ডিজাইন করা হয়েছে। আপনি আলাদা আলাদা ব্রাঞ্চের স্টক, বিক্রয়, ক্যাশ ও কর্মচারীদের হিসাব আলাদাভাবে দেখতে পারবেন এবং মূল ড্যাশবোর্ডে পুরো ব্যবসার কেন্দ্রীয় সমন্বিত রিপোর্ট এক ক্লিকেই দেখতে পাবেন।",
        },
        {
          q: "কাস্টমারের বাকি খাতা ও SMS তাগাদা পাঠানোর সুবিধাটি কীভাবে কাজ করে?",
          a: "প্রতিটি কাস্টমারের জন্য স্বয়ংক্রিয় ডিজিটাল খাতা তৈরি হয়। আংশিক বা বাকিতে বিক্রয় করলে বকেয়া ব্যালেন্স যুক্ত হয়ে যায়। আপনি যেকোনো সময় মোট বকেয়া দেখতে পারবেন এবং মাত্র এক ক্লিকে কাস্টমারের মোবাইলে সম্মানজনক SMS রিমাইন্ডার পাঠিয়ে দ্রুত টাকা আদায় করতে পারবেন।",
        },
        {
          q: "আমার দোকানের কর্মচারীদের কি ব্যবসাদ্বার ব্যবহার শিখতে দীর্ঘ ট্রেনিং লাগবে?",
          a: "একদমই না। সফটওয়্যারের বিলিং স্ক্রিনটি ক্যালকুলেটরের মতোই সহজ ও ব্যবহারবান্ধব করে তৈরি। যেকোনো সাধারণ সেলসম্যান বা ক্যাশিয়ার মাত্র ১৫ মিনিটের ভেতরেই বারকোড স্ক্যান করা, বিল তৈরি ও রিসিট প্রিন্ট করা শিখে নিতে পারেন।",
        },
      ],
    },
  };

  const t = content[language];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="py-8 sm:py-28 bg-white relative overflow-hidden">
      {/* Container aligned with Navbar width (max-w-6xl) */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start relative">
          
          {/* Left Column: Heading & Eyebrow Pill over Video Layer (Scroll Triggered) */}
          <div className={`lg:col-span-6 text-left relative pt-0 ${isInView ? "animate-faq-header" : "opacity-0"}`}>
            
            {/* 1. Video Underneath All Text Layers (Shifted 20px down) */}
            <div className="absolute top-[92px] sm:top-[100px] left-0 sm:-left-6 w-[400px] sm:w-[540px] h-[400px] sm:h-[540px] pointer-events-none select-none z-0 flex items-center justify-center">
              <video
                src="/faq-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain scale-[1.3] sm:scale-[1.4] mix-blend-multiply opacity-90 [mask-image:radial-gradient(circle_at_center,black_70%,transparent_98%)]"
              />
            </div>

            {/* 2. Text Content */}
            <div className="relative z-10 pb-6 sm:pb-64 lg:pb-72 pt-0">
              {/* Eyebrow Pill with Animated Question Mark Loop Icon */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs select-none transition-all duration-300">
                <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <span>{t.eyebrow}</span>
              </div>

              {/* Headline */}
              <h2 className="text-[24px] sm:text-4xl text-navy-950 font-bold tracking-tight leading-[1.2] mb-3 transition-all duration-300">
                {t.titleLine1} <br className="hidden sm:inline" />
                {t.titleLine2}
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-[14px] sm:text-base leading-relaxed font-medium max-w-md transition-all duration-300">
                {t.subtitle}
              </p>
            </div>

          </div>

          {/* Right Column: Clean Accordion Stack on top (Scroll Triggered) */}
          <div className={`lg:col-span-6 space-y-3.5 sm:space-y-4 relative z-10 ${isInView ? "animate-faq-list" : "opacity-0"}`}>
            {t.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl sm:rounded-[22px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-gradient-to-br from-[#F5F3FF] via-[#F8FAFC] to-[#EEF2FF] border-brand-300 shadow-[0_8px_25px_-6px_rgba(117,68,247,0.15)] ring-1 ring-brand-500/15"
                      : "bg-[#FAFAFC]/90 backdrop-blur-md hover:bg-white border-slate-200/85 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className={`w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg focus:outline-none cursor-pointer select-none transition-colors duration-200 ${
                      isOpen ? "text-brand-900" : "text-navy-950 hover:text-brand-700"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-brand-100/80 text-brand-700 rotate-180 shadow-2xs"
                          : "bg-slate-100/80 text-slate-600 rotate-0"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-700 text-[12px] sm:text-[15px] leading-relaxed border-t border-brand-200/50 pt-3.5 sm:pt-4 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
