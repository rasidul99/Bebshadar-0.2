"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Sparkles, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const { language } = useLanguage();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "-30px 0px" });

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    businessType: "Super Shop",
  });
  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    { id: "Super Shop", labelEN: "Super Shop", labelBN: "সুপার শপ" },
    { id: "Pharmacy", labelEN: "Pharmacy", labelBN: "ফার্মেসি" },
    { id: "Fashion", labelEN: "Fashion", labelBN: "ফ্যাশন" },
    { id: "Electronics", labelEN: "Electronics", labelBN: "ইলেকট্রনিক্স" },
    { id: "Other", labelEN: "Other", labelBN: "অন্যান্য" },
  ];

  const content = {
    EN: {
      eyebrow: "Let's Connect",
      title: "Let’s level up your business, together",
      reachPrefix: "You can reach us anytime via",
      email: "hello@bebshadar.com",
      description:
        "Fill out the quick form and our business advisor will reach out within minutes to help you setup your POS & inventory system.",
      nameLabel: "Name",
      namePlaceholder: "e.g. Tanvir Ahmed",
      businessNameLabel: "Business Name",
      businessNamePlaceholder: "e.g. Al-Madina Super Shop",
      phoneLabel: "Phone number",
      phonePlaceholder: "017XXXXXXXX",
      businessTypeLabel: "Business Type",
      submitBtn: "Get Free Consultation",
      successTitle: "Thank You!",
      successDesc:
        "We have received your details. Our team will contact you shortly via phone & WhatsApp.",
      trust1: "Zero setup cost & free onboarding",
      trust2: "Same-day operational deployment",
      trust3: "24/7 dedicated support team",
    },
    BN: {
      eyebrow: "যোগাযোগ করুন",
      title: "একসাথে আপনার ব্যবসাকে নিয়ে চলুন নতুন উচ্চতায়",
      reachPrefix: "যেকোনো প্রয়োজনে সরাসরি আমাদের ইমেইল করতে পারেন:",
      email: "hello@bebshadar.com",
      description:
        "নিচের তথ্যগুলো পূরণ করুন, আমাদের বিজনেস কনসালটেন্ট দ্রুত আপনার সাথে যোগাযোগ করে সম্পূর্ণ ফ্রিতে ডেমো ও সেটআপে সাহায্য করবেন।",
      nameLabel: "আপনার নাম",
      namePlaceholder: "যেমন: তানভীর আহমেদ",
      businessNameLabel: "ব্যবসার নাম",
      businessNamePlaceholder: "যেমন: আল-মদিনা সুপার শপ",
      phoneLabel: "মোবাইল নম্বর",
      phonePlaceholder: "০১XXXXXXXXX",
      businessTypeLabel: "ব্যবসার ধরন",
      submitBtn: "ফ্রি পরামর্শ ও ডেমো রিকোয়েস্ট পাঠান",
      successTitle: "ধন্যবাদ!",
      successDesc:
        "আপনার তথ্য আমরা পেয়েছি। আমাদের প্রতিনিধি খুব শীঘ্রই আপনার নম্বরে কল বা হোয়াটসঅ্যাপে যোগাযোগ করবেন।",
      trust1: "সম্পূর্ণ ফ্রি অনবোর্ডিং ও কোনো হিডেন চার্জ নেই",
      trust2: "একদিনের মধ্যেই পুরো সিস্টেম চালু করার নিশ্চয়তা",
      trust3: "২৪/৭ সার্বক্ষণিক টেকনিক্যাল সহায়তা",
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contact" className="py-8 sm:py-28 bg-[#F7F9FC] border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(112,72,232,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container aligned with Navbar max-w-6xl */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Email Card & Trust Items (Scroll Triggered) */}
          <div className={`lg:col-span-6 text-left space-y-4 sm:space-y-6 ${isInView ? "animate-contact-left" : "opacity-0"}`}>
            
            {/* Eyebrow Capsule (Brand Purple with animated Sparkles stroke loop) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200/70 bg-brand-50/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs select-none transition-all duration-300">
              <div className="icon-stroke-loop text-brand-600 w-4 h-4 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span>{t.eyebrow}</span>
            </div>

            {/* Master Headline */}
            <h2 className="text-[24px] sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight leading-[1.2] transition-all duration-300">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-[14px] sm:text-base leading-relaxed max-w-xl transition-all duration-300">
              {t.description}
            </p>

            {/* Styled Email Contact Box */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3.5 max-w-md group transition-all duration-200 hover:border-brand-300 hover:shadow-md">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {t.reachPrefix}
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="text-sm sm:text-lg font-bold text-brand-700 hover:text-brand-800 transition-colors font-mono"
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* Trust Checklist */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-[12px] sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.trust1}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12px] sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.trust2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12px] sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.trust3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form Card (Scroll Triggered) */}
          <div className={`lg:col-span-6 ${isInView ? "animate-contact-card" : "opacity-0"}`}>
            <div className="bg-white rounded-[24px] sm:rounded-[36px] p-5 sm:p-9 border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.02)] relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1.5">
                      {t.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Business Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1.5">
                      {t.businessNameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder={t.businessNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-1.5">
                      {t.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Business Type Chips */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-950 mb-2">
                      {t.businessTypeLabel}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {businessTypes.map((type) => {
                        const isSelected = formData.businessType === type.id;
                        const label = language === "BN" ? type.labelBN : type.labelEN;

                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setFormData({ ...formData, businessType: type.id })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all select-none cursor-pointer ${
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
                      className="w-full relative px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-[#8E65FF] via-[#7544F7] to-[#5F2BEA] text-white text-sm sm:text-base font-semibold ring-[3px] ring-purple-600/25 hover:ring-purple-600/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.15),0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-200 group overflow-hidden select-none cursor-pointer inline-flex items-center justify-center"
                    >
                      <div className="relative overflow-hidden h-[22px] flex flex-col justify-center">
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
              ) : (
                /* Success Feedback State */
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">
                    {t.successTitle}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                    {t.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 pt-2 cursor-pointer"
                  >
                    <span>Send another request</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
