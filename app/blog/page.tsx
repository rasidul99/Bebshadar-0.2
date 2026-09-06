"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelEN: "All Insights", labelBN: "সকল আর্টিকেল" },
    { id: "Inventory Guide", labelEN: "Inventory Guide", labelBN: "ইনভেন্টরি গাইড" },
    { id: "Pricing & ROI", labelEN: "Pricing & ROI", labelBN: "প্রাইসিং ও বাজেট" },
    { id: "Software Comparison", labelEN: "Software Comparison", labelBN: "সফটওয়্যার তুলনা" },
  ];

  const content = {
    EN: {
      eyebrow: "Knowledge Hub",
      title: "Retail Insights & Business Growth Guides",
      subtitle:
        "Practical frameworks, inventory optimization guides, and cloud POS billing best practices tailored for Bangladeshi entrepreneurs.",
    },
    BN: {
      eyebrow: "ব্যবসার জ্ঞান ও গাইড",
      title: "রিটেইল টিপস ও ব্যবসা বৃদ্ধির সেরা কৌশল",
      subtitle:
        "বাংলাদেশের দোকানদার ও এসএমই উদ্যোক্তাদের জন্য প্রমাণিত ব্যবসায়িক টিপস, স্টক নিয়ন্ত্রণ এবং দ্রুত বাকির টাকা আদায়ের নির্দেশিকা।",
    },
  };

  const t = content[language];

  const filteredPosts =
    selectedCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.categoryEN === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          
          {/* Section Header */}
          <div className="max-w-3xl text-left mb-10 sm:mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <span>{t.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18]">
              {t.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const label = language === "BN" ? cat.labelBN : cat.labelEN;

              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                    isSelected
                      ? "bg-brand-600 text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {filteredPosts.map((post) => {
              const title = language === "BN" ? post.titleBN : post.titleEN;
              const date = language === "BN" ? post.dateBN : post.dateEN;

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-4 bg-slate-100 shadow-sm border border-slate-200/60">
                    <Image
                      src={post.image}
                      alt={title}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors text-left leading-snug tracking-tight mb-2">
                    {title}
                  </h3>

                  {/* Date */}
                  <span className="text-xs sm:text-[13px] font-medium text-slate-400 text-left transition-colors group-hover:text-brand-600">
                    {date}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </main>

      {/* 2. Footer */}
      <Footer />
    </div>
  );
}
