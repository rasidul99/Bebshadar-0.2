"use client";

import React, { createContext, useContext, useState } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  openModal: (defaultPlan?: string) => void;
  closeModal: () => void;
  selectedPlan: string;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (defaultPlan = "") => {
    setSelectedPlan(defaultPlan);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider value={{ isOpen, openModal, closeModal, selectedPlan }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
