import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LeadModalProvider } from "@/context/LeadModalContext";
import { LeadModal } from "@/components/modal/LeadModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bebshadar — Modern Business Management & POS Software for Bangladesh",
  description:
    "One connected system to run your whole business — sales, multi-branch inventory, customer dues (baki), HRM, supplier ledgers, manufacturing and accounts in Bangladesh.",
  keywords: [
    "POS Bangladesh",
    "Bebshadar",
    "Inventory Management Software Bangladesh",
    "Accounting Software BD",
    "Super Shop POS",
    "Pharmacy Software",
    "Baki Management SMS",
    "Business ERP Dhaka",
  ],
  openGraph: {
    title: "Bebshadar — Business Management Software for Bangladesh",
    description:
      "POS billing, real-time multi-branch stock, customer dues, and financial reports in one unified dashboard.",
    url: "https://bebshadar.com",
    siteName: "Bebshadar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${hindSiliguri.variable}`}>
      <body className="antialiased bg-[#F7F9FC] text-slate-900 selection:bg-brand-100 selection:text-brand-700 min-h-screen font-sans">
        <LanguageProvider>
          <LeadModalProvider>
            {children}
            <LeadModal />
          </LeadModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
