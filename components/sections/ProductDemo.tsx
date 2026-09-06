"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Play, CheckCircle, X } from "lucide-react";

export function ProductDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  useEffect(() => {
    const handlePlayDemo = () => {
      setIsPlaying(true);
    };
    window.addEventListener("play-demo-video", handlePlayDemo);
    return () => window.removeEventListener("play-demo-video", handlePlayDemo);
  }, []);

  const content = {
    EN: {
      eyebrow: "Interactive Demo",
      title: "Watch how Bebshadar streamlines your business",
      description:
        "A complete walkthrough of instant POS billing, live multi-branch inventory, and automated customer baki tracking.",
      ctaText: "Click to Watch 2-Minute Product Tour",
      pill1: "POS Checkout",
      pill2: "SMS Due Recovery",
      pill3: "Multi-branch Stock",
    },
    BN: {
      eyebrow: "ইন্টারেক্টিভ ভিডিও ডেমো",
      title: "ভিডিওতে দেখুন কীভাবে ব্যবসাদ্বার আপনার ব্যবসাকে সহজ করে",
      description:
        "দ্রুত POS বিলিং, লাইভ মাল্টি-ব্রাঞ্চ স্টক এবং কাস্টমার বাকির খাতার সম্পূর্ণ ভিডিও নির্দেশিকা।",
      ctaText: "২ মিনিটের প্রোডাক্ট ভিডিও ট্যুর দেখতে ক্লিক করুন",
      pill1: "POS দ্রুত বিলিং",
      pill2: "SMS বাকি রিকভারি",
      pill3: "মাল্টি-ব্রাঞ্চ স্টক",
    },
  };

  const t = content[language];

  return (
    <section ref={ref} id="demo" className="relative py-8 sm:py-28 bg-white border-y border-slate-200/80 overflow-hidden">
      
      {/* 1. FULL WIDTH SECTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/dfvsdvdvs.png"
          alt="Section Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. FOREGROUND CONTENT CONTAINER (max-w-6xl matching Navbar width) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Heading with Animated Video Loop Icon & Brand Purple Pill (Scroll Triggered) */}
        <div className={`max-w-5xl mx-auto text-center mb-6 sm:mb-12 ${isInView ? "animate-demo-header" : "opacity-0"}`}>
          {/* Eyebrow Capsule (Brand Purple with animated Play/Video stroke loop) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
            <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
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

        {/* Centered Clean Video Player Frame (Scroll Triggered) */}
        <div className={`relative w-full flex items-center justify-center pt-2 pb-4 sm:pt-4 sm:pb-6 ${isInView ? "animate-demo-frame" : "opacity-0"}`}>
          <div className="relative w-[92%] sm:w-[85%] max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(10,24,52,0.35),0_0_1px_1px_rgba(255,255,255,0.4)] border border-slate-200/90 aspect-video bg-navy-950 flex items-center justify-center group transition-transform duration-300 hover:scale-[1.01]">
            
            {!isPlaying ? (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer flex items-center justify-center"
              >
                {/* Provided Video Thumbnail Background Image */}
                <Image
                  src="/demo-video-thumbnail.png"
                  alt="Interactive Demo Video Thumbnail"
                  fill
                  priority
                  className="object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                {/* Subtle gradient hover overlay */}
                <div className="absolute inset-0 bg-navy-950/15 group-hover:bg-navy-950/5 transition-colors" />

                {/* 3D Pulsing Play Button */}
                <div className="relative z-10 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(true);
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-brand-700 shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group-hover:bg-brand-50 cursor-pointer"
                    aria-label="Play Walkthrough Video"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-brand-600 translate-x-0.5 text-brand-600" />
                  </button>
                </div>
              </div>
            ) : (
              /* YouTube Embed Video Player with Autoplay */
              <div className="relative w-full h-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed/xoIAIn_8zSo?autoplay=1&rel=0&modestbranding=1"
                  title="Bebshadar Interactive Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-2xl sm:rounded-3xl"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer shadow-md"
                  title="Close Video"
                  aria-label="Close Video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
