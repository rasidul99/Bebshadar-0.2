"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Star, Play, X, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; author: string; role: string } | null>(null);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth > 768 ? 440 : 320;
      const targetLeft =
        direction === "left"
          ? Math.max(0, sliderRef.current.scrollLeft - scrollAmount)
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }
  };

  const content = {
    EN: {
      eyebrow: "Real Owner Feedback",
      title: "Loved by business owners in Bangladesh",
      description:
        "Real feedback and video stories from store founders and retail chains scaling with Bebshadar.",
      testimonials: [
        {
          quote:
            "Managing apparel variants and stock in manual ledgers was painful. After 4 months with Bebshadar, our inventory, sales reports, and profits are 100% accurate. We run our business stress-free!",
          author: "Sharil Fashion Mart",
          role: "Owner, Sharil Fashion Mart",
          city: "Dhaka",
          rating: 5,
          avatar: "/testimonials/sharil-owner.png",
          hasVideo: true,
          videoId: "wUeg0Lkx3r0",
          videoThumb: "/sharil-fashion-testimonial.png",
          videoDuration: "3:40",
        },
        {
          quote:
            "The Bebshadar team traveled to Gaibandha to set up our super shop POS machines, barcode scanners, and thermal printers on-site. Their hands-on training and dedicated support made launching our store effortless!",
          author: "Bulbul Ahmed",
          role: "Owner, Super Shop",
          city: "Gaibandha",
          rating: 5,
          avatar: "/testimonials/bulbul-owner.png",
          hasVideo: true,
          videoId: "tnpBdJ1yFSQ",
          videoThumb: "/gaibandha-super-shop-thumb.png",
          videoDuration: "1:48",
        },
        {
          quote:
            "Bebshadar made managing our 3 grocery super-outlets effortless. Cash mismatch dropped to zero and we can see live inventory across branches from our phones.",
          author: "Rafiqul Islam",
          role: "Founder, Al-Madina Super Shop",
          city: "Dhaka, Mirpur",
          rating: 5,
          avatar: "/testimonials/owner1.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/fgsdf.png",
          videoDuration: "1:45",
        },
        {
          quote:
            "The customer baki management and automated SMS reminders alone recovered over ৳ 1,80,000 in overdue accounts within our first two months!",
          author: "Kamrul Hassan",
          role: "Managing Director, Bengal Hardware & Parts",
          city: "Chittagong",
          rating: 5,
          avatar: "/testimonials/owner2.jpg",
          hasVideo: false,
        },
        {
          quote:
            "We run both a physical showroom and an online store. The WooCommerce live sync prevents overselling and saves our team hours of manual stock updates.",
          author: "Tanzirul Alam",
          role: "Founder, Urban Electronics & Care",
          city: "Sylhet",
          rating: 5,
          avatar: "/testimonials/owner3.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/sfbcb.png",
          videoDuration: "2:10",
        },
        {
          quote:
            "Managing batch numbers and drug expiry dates used to be a nightmare. Bebshadar alerts us 60 days before expiry, completely saving us from dead stock losses.",
          author: "Dr. Mahmudul Haque",
          role: "Owner, CarePoint Pharmacy Ltd.",
          city: "Dhaka, Dhanmondi",
          rating: 5,
          avatar: "/testimonials/owner4.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/adva.png",
          videoDuration: "1:30",
        },
        {
          quote:
            "Kitchen display KOT and rapid takeaway billing speeded up our order cycle by 40%. Cashiers learned the entire POS system in less than 15 minutes.",
          author: "Farhan Chowdhury",
          role: "Co-Founder, FoodLand Cafe & Bakery",
          city: "Uttara, Dhaka",
          rating: 5,
          avatar: "/testimonials/owner5.jpg",
          hasVideo: false,
        },
        {
          quote:
            "The multi-variant size and color inventory management is a lifesaver for our fashion boutique. Generating barcodes for 5,000 apparel items was instant.",
          author: "Nasrin Akhter",
          role: "Proprietor, Elegance Fashion House",
          city: "Rajshahi",
          rating: 5,
          avatar: "/testimonials/owner6.jpg",
          hasVideo: false,
        },
        {
          quote:
            "We track over 12,000 vehicle spare parts across 2 garage workshops. Job tickets and mechanic labor calculations are now completely automated.",
          author: "Kabir Hossain",
          role: "Managing Partner, Royal Auto Works",
          city: "Khulna",
          rating: 5,
          avatar: "/testimonials/owner7.jpg",
          hasVideo: false,
        },
        {
          quote:
            "From raw wheat purchase to flour milling batch cost deductions, Bebshadar's BOM recipe module gave us exact per-kg production profit margins.",
          author: "Shamsul Arefin",
          role: "Director, Green Agro & Feed Mill",
          city: "Bogra",
          rating: 5,
          avatar: "/testimonials/owner8.jpg",
          hasVideo: false,
        },
        {
          quote:
            "Our courier delivery integration and customer SMS order dispatch updates increased our repeat purchase rate by 35% across all 64 districts.",
          author: "Saiful Islam",
          role: "Founder, Glamour Cosmetics BD",
          city: "Dhaka, Gulshan",
          rating: 5,
          avatar: "/testimonials/owner9.jpg",
          hasVideo: false,
        },
      ],
    },
    BN: {
      eyebrow: "সফল ব্যবসায়ীদের প্রতিক্রিয়া",
      title: "বাংলাদেশের হাজারো ব্যবসা প্রতিষ্ঠানের বিশ্বস্ত সঙ্গী",
      description:
        "ব্যবসাদ্বার ব্যবহার করে ব্যবসা সফলভাবে পরিচালনা করছেন এমন উদ্যোক্তাদের বাস্তব অভিজ্ঞতা ও ভিডিও রিভিউ।",
      testimonials: [
        {
          quote:
            "আগে খাতা-কলমে পণ্যের স্টক ও ভ্যারিয়েশন মেলানো খুব কঠিন ছিল। ৪ মাস ধরে ব্যবসাদ্বার সফটওয়্যার ব্যবহারের ফলে স্টক, সেলস রিপোর্ট এবং লাভ-ক্ষতির হিসাব একদম নিখুঁত। এখন ব্যবসা নিয়ে সম্পূর্ণ চিন্তামুক্ত!",
          author: "শারিল ফ্যাশন মার্ট",
          role: "মালিক, শারিল ফ্যাশন মার্ট",
          city: "ঢাকা",
          rating: 5,
          avatar: "/testimonials/sharil-owner.png",
          hasVideo: true,
          videoId: "wUeg0Lkx3r0",
          videoThumb: "/sharil-fashion-testimonial.png",
          videoDuration: "৩:৪০",
        },
        {
          quote:
            "ব্যবসাদ্বার টিম গাইবান্ধায় এসে সরাসরি আমাদের নতুন সুপার শপের POS মেশিন, স্ক্যানার ও প্রিন্টার সেটআপ করে দিয়েছে এবং হাতে-কলমে ট্রেনিং দিয়েছে। তাদের সার্বক্ষণিক সাপোর্ট ও অনবোর্ডিং সেবায় আমরা অত্যন্ত সন্তুষ্ট!",
          author: "বুলবুল আহমেদ",
          role: "স্বত্বাধিকারী, সুপার শপ",
          city: "গাইবান্ধা",
          rating: 5,
          avatar: "/testimonials/bulbul-owner.png",
          hasVideo: true,
          videoId: "tnpBdJ1yFSQ",
          videoThumb: "/gaibandha-super-shop-thumb.png",
          videoDuration: "১:৪৮",
        },
        {
          quote:
            "আমাদের ৩টি গ্রোসারি সুপার শপ পরিচালনা এখন একদম সহজ। ক্যাশ গরমিল সম্পূর্ণ শূন্যে নেমে এসেছে এবং যেকোনো ব্রাঞ্চের লাইভ স্টক আমরা মোবাইল থেকেই দেখতে পারি।",
          author: "রফিকুল ইসলাম",
          role: "প্রতিষ্ঠাতা, আল-মদিনা সুপার শপ",
          city: "মিরপুর, ঢাকা",
          rating: 5,
          avatar: "/testimonials/owner1.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/fgsdf.png",
          videoDuration: "১:৪৫",
        },
        {
          quote:
            "কাস্টমার বাকি খাতা এবং স্বয়ংক্রিয় SMS রিমাইন্ডারের মাধ্যমে প্রথম দুই মাসেই আমাদের আটকে থাকা প্রায় ১,৮০,০০০ টাকার বকেয়া আদায় হয়ে গেছে!",
          author: "কামরুল হাসান",
          role: "ব্যবস্থাপনা পরিচালক, বেঙ্গল হার্ডওয়্যার",
          city: "চট্টগ্রাম",
          rating: 5,
          avatar: "/testimonials/owner2.jpg",
          hasVideo: false,
        },
        {
          quote:
            "আমাদের ফিজিক্যাল শোরুম এবং অনলাইন ওয়েবসাইট একসাথে চলে। WooCommerce লাইভ সিঙ্ক থাকায় স্টক মেলানোর ঝামেলা দূর হয়েছে এবং প্রতিদিন কয়েক ঘণ্টা সময় বাঁচে।",
          author: "তানজিরুল আলম",
          role: "প্রতিষ্ঠাতা, আরবান ইলেকট্রনিক্স",
          city: "সিলেট",
          rating: 5,
          avatar: "/testimonials/owner3.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/sfbcb.png",
          videoDuration: "২:১০",
        },
        {
          quote:
            "ওষুধের ব্যাচ নম্বর ও মেয়াদ ট্র্যাকিং আগে খুব কঠিন ছিল। ব্যবসাদ্বার ৬০ দিন আগেই মেয়াদ শেষ হওয়ার সতর্কবার্তা দেয়, যা আমাদের বড় ধরনের লোকসান থেকে বাঁচায়।",
          author: "ডা. মাহমুদুল হক",
          role: "স্বত্বাধিকারী, কেয়ারপয়েন্ট ফার্মেসি",
          city: "ধানমন্ডি, ঢাকা",
          rating: 5,
          avatar: "/testimonials/owner4.jpg",
          hasVideo: true,
          videoId: "xoIAIn_8zSo",
          videoThumb: "/adva.png",
          videoDuration: "১:৩০",
        },
        {
          quote:
            "কিচেন KOT ডিসপ্লে এবং দ্রুত পার্সেল বিলিং আমাদের অর্ডার প্রসেসিং ৪০% বাড়িয়ে দিয়েছে। স্টাফরা মাত্র ১৫ মিনিটে পুরো পিওএস শিখে নিয়েছে।",
          author: "ফারহান চৌধুরী",
          role: "সহ-প্রতিষ্ঠাতা, ফুডল্যান্ড ক্যাফে",
          city: "উত্তরা, ঢাকা",
          rating: 5,
          avatar: "/testimonials/owner5.jpg",
          hasVideo: false,
        },
        {
          quote:
            "সাইজ ও কালার ভিত্তিক ভ্যারিয়েন্ট ইনভেন্টরি আমাদের ফ্যাশন হাউজের জন্য দারুণ কার্যকর। ৫,০০০ কাপড়ের জন্য বারকোড তৈরি ও স্ক্যানিং মুহূর্তেই করা সম্ভব হয়েছে।",
          author: "নাসরিন আক্তার",
          role: "প্রোপ্রাইটর, এলিগেন্স ফ্যাশন",
          city: "রাজশাহী",
          rating: 5,
          avatar: "/testimonials/owner6.jpg",
          hasVideo: false,
        },
        {
          quote:
            "২টি অটোমোবাইল ওয়ার্কশপে ১২,০০০ এর বেশি যন্ত্রাংশের হিসাব রাখা হয়। মেকানিকদের জব টিকিট ও শ্রমের বিলিং এখন সম্পূর্ণ অটোমেটেড।",
          author: "কবীর হোসেন",
          role: "ম্যানেজিং পার্টনার, রয়্যাল অটো ওয়ার্কস",
          city: "খুলনা",
          rating: 5,
          avatar: "/testimonials/owner7.jpg",
          hasVideo: false,
        },
        {
          quote:
            "কাঁচামাল কেনা থেকে শুরু করে মিলিং পর্যন্ত প্রতিটি ব্যাচের উৎপাদন খরচ ব্যবসাদ্বারের BOM রেসিপি মডিউলের মাধ্যমে প্রতি কেজির নিখুঁত প্রফিট মার্জিন পাওয়া যায়।",
          author: "শামসুল আরেফিন",
          role: "পরিচালক, গ্রিন এগ্রো অ্যান্ড ফিড মিল",
          city: "বগুড়া",
          rating: 5,
          avatar: "/testimonials/owner8.jpg",
          hasVideo: false,
        },
        {
          quote:
            "কুরিয়ার ডেলিভারি ও কাস্টমারদের দ্রুত SMS মেমো পাঠানোর সুবিধার কারণে ৬৪ জেলায় আমাদের নিয়মিত কাস্টমারদের অর্ডার ৩৫% বৃদ্ধি পেয়েছে।",
          author: "সাইফুল ইসলাম",
          role: "প্রতিষ্ঠাতা, গ্ল্যামার কসমেটিকস",
          city: "গুলশান, ঢাকা",
          rating: 5,
          avatar: "/testimonials/owner9.jpg",
          hasVideo: false,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section ref={ref} className="py-8 sm:py-28 bg-[#F7F9FC] overflow-hidden relative">
      {/* Main Container constrained exactly to max-w-6xl matching Navbar */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Section Header with Left Aligned Title and Right-Aligned Navigation Arrow Controls */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 sm:gap-6 ${isInView ? "animate-testimonials-header" : "opacity-0"}`}>
          <div className="text-left max-w-2xl">
            {/* Eyebrow Capsule */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 sm:mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs transition-all duration-300">
              <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="text-[24px] sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
              {t.title}
            </h2>

            <p className="mt-2 sm:mt-3 text-[14px] sm:text-lg text-slate-600 leading-relaxed transition-all duration-300">
              {t.description}
            </p>
          </div>

          {/* Navigation Arrow Controls Row */}
          <div className="shrink-0 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-navy-950 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-navy-950 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Static Scroll Slider with Left/Right Arrow Controls */}
        <div className="relative w-full">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.testimonials.map((test, idx) => {
              if (test.hasVideo && test.videoThumb) {
                return (
                  <div
                    key={idx}
                    className="w-[320px] sm:w-[580px] md:w-[620px] shrink-0 p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] border border-slate-200/85 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch justify-between select-none group snap-start transition-all duration-200 hover:shadow-md"
                  >
                    {/* Left Side: Video Thumbnail with Play Button */}
                    <div
                      onClick={() =>
                        setActiveVideo({
                          videoId: test.videoId || "xoIAIn_8zSo",
                          author: test.author,
                          role: test.role,
                        })
                      }
                      className="relative w-full sm:w-[48%] aspect-[16/10] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs cursor-pointer group/vid shrink-0 min-h-[180px]"
                    >
                      <Image
                        src={test.videoThumb}
                        alt={test.author}
                        fill
                        className="object-cover object-center opacity-90 group-hover/vid:opacity-100 group-hover/vid:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-navy-950/30 group-hover/vid:bg-navy-950/15 transition-colors" />

                      {/* 3D Pulsing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/95 text-brand-700 shadow-lg flex items-center justify-center group-hover/vid:scale-110 group-hover/vid:bg-white transition-all duration-200">
                          <Play className="w-5 h-5 fill-brand-600 text-brand-600 translate-x-0.5" />
                        </div>
                      </div>

                      {/* Video Duration Badge */}
                      {test.videoDuration && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold">
                          {test.videoDuration}
                        </div>
                      )}
                    </div>

                    {/* Right Side: Rating, Testimonial Quote & Profile Info */}
                    <div className="flex flex-col justify-between flex-1 text-left">
                      <div>
                        {/* 5 Gold Stars */}
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-slate-700 text-[12px] sm:text-[13.5px] leading-relaxed italic mb-4">
                          &ldquo;{test.quote}&rdquo;
                        </p>
                      </div>

                      {/* Profile with Real Photo */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                          <Image
                            src={test.avatar}
                            alt={test.author}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-xs sm:text-sm text-navy-900 leading-tight">
                            {test.author}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                            {test.role} &middot; {test.city}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[340px] shrink-0 p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] border border-slate-200/85 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between select-none group snap-start transition-all duration-200 hover:shadow-md text-left"
                >
                  <div>
                    {/* Top Bar: 5 Gold Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-700 text-[12px] sm:text-[14.5px] leading-relaxed italic mb-6">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  {/* Profile with Real Photo */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                      <Image
                        src={test.avatar}
                        alt={test.author}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xs sm:text-[15px] text-navy-900 leading-tight">
                        {test.author}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {test.role} &middot; {test.city}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/20">
            {/* Header with Title & Close */}
            <div className="flex items-center justify-between p-4 bg-navy-950/90 text-white border-b border-white/10">
              <div>
                <div className="font-bold text-sm sm:text-base">{activeVideo.author}</div>
                <div className="text-xs text-slate-400">{activeVideo.role}</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${activeVideo.author} Testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
