"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useLeadModal } from "@/context/LeadModalContext";

export function LeadModal() {
  const { isOpen, closeModal } = useLeadModal();
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    businessType: "Super Shop",
  });
  const [submitted, setSubmitted] = useState(false);

  // Close modal on Escape key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const businessTypes = [
    { id: "Super Shop", labelEN: "Super Shop", labelBN: "সুপার শপ" },
    { id: "Pharmacy", labelEN: "Pharmacy", labelBN: "ফার্মেসি" },
    { id: "Fashion", labelEN: "Fashion", labelBN: "ফ্যাশন" },
    { id: "Electronics", labelEN: "Electronics", labelBN: "ইলেকট্রনিক্স" },
    { id: "Other", labelEN: "Other", labelBN: "অন্যান্য" },
  ];

  const content = {
    EN: {
      eyebrow: "14-Day Free Trial",
      title: "Start your 14-day free trial today",
      subtitle:
        "No credit card required. Fill out the quick details below and our team will activate your shop instantly.",
      nameLabel: "Name",
      namePlaceholder: "e.g. Tanvir Ahmed",
      businessNameLabel: "Business Name",
      businessNamePlaceholder: "e.g. Al-Madina Super Shop",
      phoneLabel: "Phone number",
      phonePlaceholder: "017XXXXXXXX",
      businessTypeLabel: "Business Type",
      submitBtn: "Activate Free Trial Now",
      successTitle: "Registration Received!",
      successDesc:
        "Thank you! Our advisor will reach out to you via WhatsApp & call in a few minutes with your login credentials.",
      closeBtn: "Close",
    },
    BN: {
      eyebrow: "১৪ দিনের ফ্রি ট্রায়াল",
      title: "আজই শুরু করুন আপনার ১৪ দিনের ফ্রি ট্রায়াল",
      subtitle:
        "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই। নিচের তথ্যগুলো পূরণ করুন, আমাদের প্রতিনিধি সাথে সাথেই আপনার শপ অ্যাক্টিভ করে দেবে।",
      nameLabel: "আপনার নাম",
      namePlaceholder: "যেমন: তানভীর আহমেদ",
      businessNameLabel: "ব্যবসার নাম",
      businessNamePlaceholder: "যেমন: আল-মদিনা সুপার শপ",
      phoneLabel: "মোবাইল নম্বর",
      phonePlaceholder: "০১XXXXXXXXX",
      businessTypeLabel: "ব্যবসার ধরন",
      submitBtn: "ফ্রি ট্রায়াল অ্যাক্টিভ করুন",
      successTitle: "আবেদন সম্পন্ন হয়েছে!",
      successDesc:
        "ধন্যবাদ! আমাদের টিম কিছুক্ষণের মধ্যে আপনার সাথে হোয়াটসঅ্যাপ বা কলে যোগাযোগ করে একাউন্ট সেটআপ সম্পন্ন করবে।",
      closeBtn: "বন্ধ করুন",
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* 1. Backdrop Overlay with Smooth Blur */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* 2. Modal Dialog Container */}
      <div className="relative w-full max-w-lg bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy-950 flex items-center justify-center transition-colors cursor-pointer select-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-left mb-6 space-y-2 pr-8">
              {/* Eyebrow Capsule */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs font-semibold tracking-wide shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>{t.eyebrow}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight leading-snug">
                {t.title}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1">
                  {t.nameLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                />
              </div>

              {/* Business Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1">
                  {t.businessNameLabel}
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder={t.businessNamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1">
                  {t.phoneLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.phonePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                />
              </div>

              {/* Business Type Chips */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1.5">
                  {t.businessTypeLabel}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {businessTypes.map((type) => {
                    const isSelected = formData.businessType === type.id;
                    const label = language === "BN" ? type.labelBN : type.labelEN;

                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setFormData({ ...formData, businessType: type.id })}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all select-none cursor-pointer ${
                          isSelected
                            ? "bg-brand-600 text-white shadow-xs ring-2 ring-brand-600/30"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button with Roll Text Hover Animation */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full relative px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-xs sm:text-sm font-semibold ring-[3px] ring-purple-600/25 hover:ring-purple-600/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15),0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-200 group overflow-hidden select-none cursor-pointer inline-flex items-center justify-center"
                >
                  <div className="relative overflow-hidden h-[20px] flex flex-col justify-center">
                    {/* Default text */}
                    <div className="flex items-center justify-center gap-2 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 whitespace-nowrap">
                      <span>{t.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Duplicate text */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white whitespace-nowrap">
                      <span>{t.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 px-2 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy-950">
              {t.successTitle}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
              {t.successDesc}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-bold transition-all cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
