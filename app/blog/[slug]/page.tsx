"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Copy,
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useLeadModal } from "@/context/LeadModalContext";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { language } = useLanguage();
  const { openModal } = useLeadModal();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  // Language based values
  const title = language === "BN" ? post.titleBN : post.titleEN;
  const subtitle = language === "BN" ? post.subtitleBN : post.subtitleEN;
  const category = language === "BN" ? post.categoryBN : post.categoryEN;
  const date = language === "BN" ? post.dateBN : post.dateEN;
  const readTime = language === "BN" ? post.readTimeBN : post.readTimeEN;
  const authorName = language === "BN" ? post.author.nameBN : post.author.nameEN;
  const authorRole = language === "BN" ? post.author.roleBN : post.author.roleEN;
  const content = language === "BN" ? post.contentBN : post.contentEN;

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const ui = {
    EN: {
      backBtn: "All Insights & Guides",
      home: "Home",
      blog: "Blog",
      share: "Share Article",
      copied: "Link Copied!",
      keyTakeaways: "Key Takeaways for Your Business",
      authorBadge: "Author",
      ctaTitle: "Ready to scale and automate your business?",
      ctaSubtitle:
        "Join 17,000+ business owners across Bangladesh. Start your 14-day free trial today with instant setup.",
      ctaBtn: "Start 14-Day Free Trial",
      relatedTitle: "More Articles & Guides",
      relatedSubtitle: "Explore other operational strategies and retail growth tips.",
    },
    BN: {
      backBtn: "সকল আর্টিকেল ও গাইড",
      home: "হোম",
      blog: "ব্লগ",
      share: "শেয়ার করুন",
      copied: "লিংক কপি হয়েছে!",
      keyTakeaways: "আপনার ব্যবসার জন্য মূল শিক্ষণীয় বিষয়",
      authorBadge: "লেখক",
      ctaTitle: "আপনার ব্যবসাকে কি অটোমেটেড ও সহজ করতে প্রস্তুত?",
      ctaSubtitle:
        "বাংলাদেশের ১৭,০০০+ সফল উদ্যোক্তার সাথে যুক্ত হোন। আজই কোনো কার্ড ছাড়াই শুরু করুন ১৪ দিনের ফ্রি ট্রায়াল।",
      ctaBtn: "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন",
      relatedTitle: "আরও দরকারি আর্টিকেল ও গাইড",
      relatedSubtitle: "ব্যবসা পরিচালনা ও বৃদ্ধির অন্যান্য সেরা কৌশলগুলো পড়ুন।",
    },
  };

  const t = ui[language];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* 1. Sticky Auto-Hide Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        
        {/* Article Container (max-w-6xl exactly matching Navbar width) */}
        <article className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          
          {/* Top Breadcrumbs & Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 text-xs sm:text-sm">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 text-navy-950 font-semibold shadow-2xs transition-all duration-200 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{t.backBtn}</span>
            </Link>

            {/* Breadcrumb path */}
            <div className="hidden sm:flex items-center gap-2 text-slate-500 font-medium">
              <Link href="/" className="hover:text-brand-600 transition-colors">
                {t.home}
              </Link>
              <span>/</span>
              <Link href="/#blog" className="hover:text-brand-600 transition-colors">
                {t.blog}
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold truncate max-w-[200px]">
                {category}
              </span>
            </div>
          </div>

          {/* Article Header (Full Width matching Navbar) */}
          <header className="space-y-6 text-left mb-10 sm:mb-12">
            
            {/* Category Pill & Read Meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-200/80 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                {category}
              </span>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {readTime}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18]">
              {title}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-4xl">
              {subtitle}
            </p>

            {/* Author Info Bar & Social Share */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Author Profile */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-200">
                  <Image
                    src={post.author.avatar}
                    alt={authorName}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-navy-950 flex items-center gap-2">
                    <span>{authorName}</span>
                    <span className="bg-brand-50 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-200/60">
                      {t.authorBadge}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {authorRole}
                  </div>
                </div>
              </div>

              {/* Share & Copy Link Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-navy-950 text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                  title="Copy Article URL"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{t.share}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </header>

          {/* Featured Hero Banner Image (Full Navbar Width max-w-6xl) */}
          <div className="relative aspect-[21/9] sm:aspect-[2.2/1] w-full rounded-2xl sm:rounded-[32px] overflow-hidden mb-12 sm:mb-16 shadow-lg border border-slate-200/80 bg-slate-100">
            <Image
              src={post.image}
              alt={title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Article Rich Body Content (max-w-6xl) */}
          <div className="text-left space-y-10 sm:space-y-12">
            
            {/* Intro Lead Box */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              <p>{content.intro}</p>
            </div>

            {/* Content Sections */}
            {content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight leading-snug">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
                  >
                    {p}
                  </p>
                ))}

                {/* Highlight Callout Box */}
                {sec.highlightBox && (
                  <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-brand-50/70 border-l-4 border-brand-600 shadow-2xs space-y-2 my-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-700 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                      <span>{sec.highlightBox.title}</span>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-navy-950 leading-relaxed">
                      {sec.highlightBox.text}
                    </p>
                  </div>
                )}

                {/* Bullet Points Checklist */}
                {sec.bulletPoints && (
                  <div className="space-y-3.5 pt-2">
                    {sec.bulletPoints.map((bp, bpIdx) => (
                      <div
                        key={bpIdx}
                        className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 font-medium leading-relaxed"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways Summary Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-950 to-slate-900 text-white shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-300 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.keyTakeaways}</span>
              </div>
              <div className="space-y-3.5 pt-1">
                {content.takeaways.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400 shrink-0 mt-2" />
                    <p className="leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* End of Article Integrated CTA Card (Full max-w-6xl Width) */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(112,72,232,0.12)] text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Bebshadar Cloud POS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight max-w-2xl mx-auto leading-snug">
              {t.ctaTitle}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              {t.ctaSubtitle}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModal()}
                className="relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-sm sm:text-base font-semibold ring-[3px] ring-purple-600/25 hover:ring-purple-600/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15),0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-200 group overflow-hidden select-none cursor-pointer inline-flex items-center justify-center"
              >
                <div className="relative overflow-hidden h-[22px] flex flex-col justify-center">
                  <div className="flex items-center gap-2 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                    <span>{t.ctaBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 flex items-center gap-2 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white whitespace-nowrap">
                    <span>{t.ctaBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Related Articles Section (Full max-w-6xl Width) */}
          <div className="mt-20 sm:mt-24 pt-12 border-t border-slate-200/80 text-left space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                {t.relatedTitle}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {t.relatedSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-start">
              {relatedPosts.map((rPost) => {
                const rTitle = language === "BN" ? rPost.titleBN : rPost.titleEN;
                const rDate = language === "BN" ? rPost.dateBN : rPost.dateEN;

                return (
                  <Link
                    key={rPost.id}
                    href={`/blog/${rPost.slug}`}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-3.5 bg-slate-100 shadow-sm border border-slate-200/60">
                      <Image
                        src={rPost.image}
                        alt={rTitle}
                        fill
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-400 mb-1.5">
                      {rDate}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors leading-snug">
                      {rTitle}
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>

        </article>

      </main>

      {/* 2. Global Footer */}
      <Footer />
    </div>
  );
}
