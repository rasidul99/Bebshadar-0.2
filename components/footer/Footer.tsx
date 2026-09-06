"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Youtube, Facebook, Phone, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();

  const content = {
    EN: {
      tagline:
        "All-in-one cloud business management software tailored for retail shops, multi-branch chains, and manufacturers across Bangladesh.",
      col1Title: "Quick links",
      col1Link1: "Features",
      col1Link2: "How It Works",
      col1Link3: "Who It's For",
      col1Link4: "Specialized Modules",
      col2Title: "Product",
      col2Link1: "POS Billing & Invoicing",
      col2Link2: "Multi-Branch Stock",
      col2Link3: "Pricing Plans",
      col2Link4: "Video Demo",
      col3Title: "Support & Contact",
      col3Link1: "FAQs",
      col3Link2: "Dhaka, Bangladesh",
      col3Link3: "Privacy Policy",
      copyright: "All rights reserved.",
      backToTop: "Back to Top",
    },
    BN: {
      tagline:
        "বাংলাদেশের রিটেইল শপ, মাল্টি-আউটলেট চেইন ও ম্যানুফ্যাকচারিং ব্যবসার জন্য তৈরি ক্লাউড বিজনেস ম্যানেজমেন্ট সফটওয়্যার।",
      col1Title: "প্রয়োজনীয় লিংক",
      col1Link1: "ফিচারসমূহ",
      col1Link2: "কীভাবে কাজ করে",
      col1Link3: "কাদের জন্য",
      col1Link4: "স্পেশাল মডিউল",
      col2Title: "প্রোডাক্ট",
      col2Link1: "POS বিলিং ও ইনভয়েস",
      col2Link2: "মাল্টি-ব্রাঞ্চ স্টক",
      col2Link3: "প্যাকেজ ও মূল্য",
      col2Link4: "ভিডিও ডেমো",
      col3Title: "সাপোর্ট ও যোগাযোগ",
      col3Link1: "সাধারণ প্রশ্নোত্তর",
      col3Link2: "ঢাকা, বাংলাদেশ",
      col3Link3: "গোপনীয়তা নীতি",
      copyright: "সর্বস্বত্ব সংরক্ষিত।",
      backToTop: "উপরে যান",
    },
  };

  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Video Layer (0830.mp4) - Pure Video, No Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          src="/footer-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Frosted Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-white/28 hover:bg-white/38 backdrop-blur-2xl backdrop-saturate-150 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25),0_0_1px_1px_rgba(255,255,255,0.6),inset_0_1px_1.5px_rgba(255,255,255,0.9)] border border-white/80 transition-all duration-300">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* Column 1: Brand & Contact Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="relative h-8 sm:h-9 w-36 sm:w-40">
              <Image
                src="/logo-bright-bg.png"
                alt="Bebshadar Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-medium transition-all duration-300">
              {t.tagline}
            </p>

            {/* Direct Contact Phone & Email matching User Screenshot */}
            <div className="pt-2 space-y-2.5">
              <a
                href="tel:+8809649964949"
                className="inline-flex items-center gap-3 text-navy-950 hover:text-brand-700 font-semibold text-sm sm:text-[15px] transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/80 border border-slate-200/80 flex items-center justify-center text-brand-600 shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+8809649964949</span>
              </a>

              <div className="flex items-center">
                <a
                  href="mailto:hello@bebshadar.com"
                  className="inline-flex items-center gap-3 text-navy-950 hover:text-brand-700 font-semibold text-sm sm:text-[15px] transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-slate-200/80 flex items-center justify-center text-brand-600 shadow-2xs group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@bebshadar.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick links (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm sm:text-base font-bold text-navy-950 mb-4 transition-all duration-300">
              {t.col1Title}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#features" className="hover:text-navy-950 transition-colors">
                  {t.col1Link1}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-navy-950 transition-colors">
                  {t.col1Link2}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-navy-950 transition-colors">
                  {t.col1Link3}
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-navy-950 transition-colors">
                  {t.col1Link4}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Pages / Solutions (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm sm:text-base font-bold text-navy-950 mb-4 transition-all duration-300">
              {t.col2Title}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#features" className="hover:text-navy-950 transition-colors">
                  {t.col2Link1}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-navy-950 transition-colors">
                  {t.col2Link2}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-navy-950 transition-colors">
                  {t.col2Link3}
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-navy-950 transition-colors">
                  {t.col2Link4}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Contact (lg:col-span-3 lg:justify-self-end) */}
          <div className="lg:col-span-3 text-left lg:justify-self-end">
            <h4 className="text-sm sm:text-base font-bold text-navy-950 mb-4 transition-all duration-300">
              {t.col3Title}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#faq" className="hover:text-navy-950 transition-colors">
                  {t.col3Link1}
                </a>
              </li>
              <li>
                <a href="tel:+8809649964949" className="hover:text-navy-950 transition-colors font-semibold text-navy-950">
                  +8809649964949
                </a>
              </li>
              <li>
                <a href="mailto:hello@bebshadar.com" className="hover:text-navy-950 transition-colors font-semibold text-navy-950">
                  hello@bebshadar.com
                </a>
              </li>
              <li>
                <span className="text-slate-500">{t.col3Link2}</span>
              </li>
              <li>
                <a href="#" className="hover:text-navy-950 transition-colors">
                  {t.col3Link3}
                </a>
              </li>
            </ul>

            {/* Member of BASIS Badge placed in Column 4 */}
            <div className="pt-3.5">
              <a
                href="https://basis.org.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-2xs transition-all group cursor-pointer"
                title="Member of BASIS"
              >
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Member of
                </span>
                <div className="relative h-5 w-18 sm:w-20">
                  <Image
                    src="/BASIS.svg"
                    alt="BASIS Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Left: Social Icons | Middle: Copyright Text | Right: Back to Top */}
        <div className="pt-6 border-t border-slate-300/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          
          {/* Left: Social Icons (Facebook, YouTube, TikTok) */}
          <div className="flex items-center gap-2 justify-center md:justify-start order-2 md:order-1">
            <a
              href="https://www.facebook.com/bebshadar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg bg-white/70 hover:bg-white hover:text-blue-600 backdrop-blur-md border border-white/80 text-slate-700 flex items-center justify-center transition-all shadow-2xs group cursor-pointer"
            >
              <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://www.youtube.com/@Bebshadar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-lg bg-white/70 hover:bg-white hover:text-red-600 backdrop-blur-md border border-white/80 text-slate-700 flex items-center justify-center transition-all shadow-2xs group cursor-pointer"
            >
              <Youtube className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://www.tiktok.com/@bebshadar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-8 h-8 rounded-lg bg-white/70 hover:bg-white hover:text-black backdrop-blur-md border border-white/80 text-slate-700 flex items-center justify-center transition-all shadow-2xs group cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110 fill-current" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
              </svg>
            </a>
          </div>

          {/* Middle: Copyright Text */}
          <div className="text-center order-3 md:order-2 text-slate-600 font-medium">
            &copy; {new Date().getFullYear()} Bebshadar Technologies Ltd. {t.copyright}
          </div>

          {/* Right: Scroll to Top Button */}
          <div className="flex items-center gap-3.5 flex-wrap justify-center md:justify-end order-1 md:order-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white text-slate-700 hover:text-brand-700 border border-white/80 shadow-2xs text-xs font-semibold backdrop-blur-md transition-all group cursor-pointer select-none"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-brand-600" />
              <span>{t.backToTop}</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
