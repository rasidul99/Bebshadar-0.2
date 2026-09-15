"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "EN" | "BN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("BN");

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("bebshadar_lang");
      if (saved === "EN" || saved === "BN") {
        setLanguage(saved);
      }
    } catch {
      // ignore storage error
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "EN" ? "BN" : "EN";
      try {
        localStorage.setItem("bebshadar_lang", next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSetLanguage = (lang: Language) => {
    try {
      localStorage.setItem("bebshadar_lang", lang);
    } catch {
      // ignore
    }
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
