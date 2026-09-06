"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { BLOG_POSTS } from "@/data/blogPosts";

export function BlogSection() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const content = {
    EN: {
      eyebrow: "Latest Insights & Guides",
      title: "Grow your business with expert retail insights",
      subtitle:
        "Proven growth strategies, inventory management best practices, and POS billing tips tailored for business owners in Bangladesh.",
      exploreBtn: "Explore All Articles",
    },
    BN: {
      eyebrow: "ব্যবসার দরকারি টিপস ও গাইড",
      title: "বিশেষজ্ঞদের পরামর্শে ব্যবসা বড় করুন আরও সহজে",
      subtitle:
        "বাংলাদেশের রিটেইল শপ ও এসএমই উদ্যোক্তাদের জন্য প্রমাণিত ব্যবসায়িক কৌশল, স্টক ম্যানেজমেন্ট এবং দ্রুত বাকির টাকা আদায়ের সেরা উপায়সমূহ।",
      exploreBtn: "সবগুলো আর্টিকেল দেখুন",
    },
  };

  const t = content[language];

  // Track active slide on mobile scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || clientWidth;
    const index = Math.round(scrollLeft / (cardWidth + 16));
    setActiveSlide(Math.min(Math.max(index, 0), BLOG_POSTS.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
    scrollContainerRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <section ref={ref} id="blog" className="py-8 sm:py-28 bg-white border-y border-slate-200/80 overflow-hidden">
      {/* Aligned with Navbar width (max-w-6xl) */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header with Title and "View All" Link (Scroll Triggered) */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-16 gap-4 sm:gap-6 ${isInView ? "animate-blog-header" : "opacity-0"}`}>
          <div className="text-left max-w-2xl">
            {/* Eyebrow Capsule (Brand Purple with animated BookOpen stroke loop) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 sm:mb-4 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs select-none transition-all duration-300">
              <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="text-[24px] sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-[1.2] transition-all duration-300">
              {t.title}
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-[14px] sm:text-base leading-relaxed transition-all duration-300">
              {t.subtitle}
            </p>
          </div>

          {/* View All Articles Action */}
          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs text-xs sm:text-sm font-semibold text-slate-800 hover:text-brand-700 transition-all duration-200 group cursor-pointer"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MOBILE VIEW: Interactive Horizontal Snap Carousel (< md)
           ═══════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 pb-4 pt-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BLOG_POSTS.map((post, idx) => {
              const title = language === "BN" ? post.titleBN : post.titleEN;
              const date = language === "BN" ? post.dateBN : post.dateEN;
              const category = language === "BN" ? post.categoryBN : post.categoryEN;

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col group cursor-pointer bg-white rounded-3xl p-3.5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  {/* Rounded Cover Image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-3 bg-slate-100 shadow-xs border border-slate-200/60">
                    <Image
                      src={post.image}
                      alt={title}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Category Pill Tag on Image */}
                    <div className="absolute top-2.5 left-2.5 bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                      {category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold text-navy-900 group-hover:text-brand-600 transition-colors text-left leading-snug tracking-tight mb-2 line-clamp-2">
                    {title}
                  </h3>

                  {/* Date & Read More Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-400 mt-auto">
                    <span>{date}</span>
                    <span className="text-brand-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      {language === "BN" ? "পড়ুন" : "Read"} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Interactive Progress Indicators (Segmented Dots) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {BLOG_POSTS.map((_, stepIdx) => (
              <button
                key={stepIdx}
                type="button"
                onClick={() => scrollToSlide(stepIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === stepIdx
                    ? "w-8 bg-brand-600 shadow-xs"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${stepIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP VIEW: 3-Column Grid (md:)
           ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {BLOG_POSTS.map((post, idx) => {
            const title = language === "BN" ? post.titleBN : post.titleEN;
            const date = language === "BN" ? post.dateBN : post.dateEN;
            const animClass = isInView ? `animate-blog-card-${idx + 1}` : "opacity-0";

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`flex flex-col group cursor-pointer ${animClass}`}
              >
                {/* 1. Clean Rounded Cover Image with Smooth Hover Scale */}
                <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-4 bg-slate-100 shadow-sm border border-slate-200/60">
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 2. Bold Clean Title */}
                <h3 className="text-[16px] sm:text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors text-left leading-snug tracking-tight mb-1.5">
                  {title}
                </h3>

                {/* 3. Publication Date (Below Title) */}
                <span className="text-[12px] sm:text-[13px] font-medium text-slate-400 text-left transition-colors group-hover:text-brand-600">
                  {date}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
