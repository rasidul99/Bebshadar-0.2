"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Globe, Sparkles, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useLeadModal } from "@/context/LeadModalContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { language: lang, toggleLanguage } = useLanguage();
  const { openModal } = useLeadModal();

  const navItems =
    lang === "BN"
      ? [
          { label: "ফিচারসমূহ", href: "#features" },
          { label: "কার জন্য", href: "#industries" },
          { label: "ডেমো", href: "#demo" },
          { label: "প্রাইসিং", href: "#pricing" },
          { label: "প্রশ্নোত্তর", href: "#faq" },
        ]
      : [
          { label: "Features", href: "#features" },
          { label: "Who it's for", href: "#industries" },
          { label: "Demo", href: "#demo" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 6) {
        // Scrolling DOWN -> Hide navbar smoothly (unless mobile menu is open)
        if (!mobileMenuOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 6) {
        // Scrolling UP -> Show navbar smoothly
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Active section indicator detection
      const scrollPos = currentScrollY + 200;
      const sections = ["faq", "pricing", "demo", "industries", "features"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key or resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trialText = lang === "BN" ? "ফ্রি ট্রায়াল" : "Free Trial";
  const trialTextFull = lang === "BN" ? "ফ্রি ট্রায়াল শুরু করুন" : "Start Free Trial";

  return (
    <header
      className={`fixed top-3 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 pointer-events-none transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-28 sm:-translate-y-32"
      }`}
    >
      {/* Full-screen Dark & Blurred Backdrop for Background (Extends beyond all edges to cover top gap) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed -top-20 -bottom-20 -left-20 -right-20 w-[150vw] h-[150vh] bg-navy-950/45 backdrop-blur-md z-30 transition-opacity duration-300 pointer-events-auto"
          aria-hidden="true"
        />
      )}

      {/* Main Navbar Pill (High z-index: z-50, stays 100% sharp and NEVER blurred) */}
      <div className="relative z-50 w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto bg-white/90 hover:bg-white backdrop-blur-2xl backdrop-saturate-150 rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 border border-white/80 ring-1 ring-brand-600/10 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(255,255,255,0.6),inset_0_1px_1.5px_rgba(255,255,255,0.9)] transition-all duration-300">
        
        {/* Left: Brand Identity (Mobile: Clean SVG Icon | Desktop: Full Typography Logo) */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Bebshadar Home"
        >
          {/* Mobile Icon Logo */}
          <div className="block sm:hidden relative w-7 h-7 transition-transform group-hover:scale-105 active:scale-95">
            <Image
              src="/bebshadar-icon.svg"
              alt="Bebshadar Icon"
              width={28}
              height={28}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* Desktop Full Logo */}
          <div className="hidden sm:block relative h-8 sm:h-9 w-32 sm:w-36 transition-transform group-hover:scale-105">
            <Image
              src="/logo-bright-bg.png"
              alt="Bebshadar Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium font-sora transition-all ${
                  isActive
                    ? "bg-slate-100 text-navy-950 font-bold"
                    : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Language Toggle + 3D Purple CTA + Mobile Hamburger) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Language Switcher Pill */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200/80 text-navy-950 text-xs font-sora font-semibold transition-all shadow-2xs select-none cursor-pointer"
            title="Switch Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span className="text-[11px] font-bold">{lang === "EN" ? "বাংলা" : "ENG"}</span>
          </button>

          {/* 3D Purple Pill Free Trial Button */}
          <button
            type="button"
            onClick={() => openModal()}
            className="relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-xs sm:text-sm font-sora font-semibold ring-[3px] ring-purple-600/20 hover:ring-purple-600/35 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15)] transition-all duration-200 group overflow-hidden select-none cursor-pointer"
          >
            <div className="relative overflow-hidden h-[18px] sm:h-[20px] flex flex-col justify-center">
              {/* Default text (Mobile: Compact 'ফ্রি ট্রায়াল', Desktop: Full 'ফ্রি ট্রায়াল শুরু করুন') */}
              <div className="flex items-center gap-1 sm:gap-1.5 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                <span className="sm:hidden">{trialText}</span>
                <span className="hidden sm:inline">{trialTextFull}</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </div>

              {/* Duplicate text on Hover */}
              <div className="absolute inset-0 flex items-center gap-1 sm:gap-1.5 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white whitespace-nowrap">
                <span className="sm:hidden">{trialText}</span>
                <span className="hidden sm:inline">{trialTextFull}</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </div>
            </div>
          </button>

          {/* Mobile Menu Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100/90 hover:bg-slate-200 border border-slate-200/80 text-navy-950 flex items-center justify-center transition-all shadow-2xs active:scale-90 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-navy-950 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="w-4 h-4 text-navy-950" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown (Senior UI/UX Frosted Glass Card) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-3 right-3 max-w-md mx-auto bg-white/95 backdrop-blur-2xl backdrop-saturate-150 rounded-[28px] border border-white/90 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25),0_0_1px_1px_rgba(255,255,255,0.8)] p-4 sm:p-5 space-y-3 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200 z-50">
          
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-1">
            <div className="flex items-center gap-2">
              <Image
                src="/bebshadar-icon.svg"
                alt="Bebshadar"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-bold text-navy-950 font-sora">ব্যবসাদ্বার</span>
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
              Cloud POS & ERP
            </span>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold font-sora transition-all flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-brand-50 text-brand-700 font-bold border border-brand-200/70"
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-100/80"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-transform group-hover:translate-x-0.5 ${
                      isActive ? "text-brand-600" : ""
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
