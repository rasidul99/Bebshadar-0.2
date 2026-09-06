import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { SpecializedModules } from "@/components/sections/SpecializedModules";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with High-Fidelity Bebshadar Dashboard Preview */}
        <Hero />

        {/* 3. Trust & Industry Bar */}
        <TrustBar />

        {/* 4. The Problem / Traditional Hurdles */}
        <ProblemSection />

        {/* 5. Core Feature Capabilities */}
        <FeaturesGrid />

        {/* 6. Specialized Industry Modules */}
        <SpecializedModules />

        {/* 7. Product Video Demo Showcase */}
        <ProductDemo />

        {/* 8. Industries & Verticals */}
        <IndustriesSection />

        {/* 9. How It Works (4-Step Onboarding) */}
        <HowItWorks />

        {/* 10. Social Proof & Testimonials */}
        <Testimonials />

        {/* 11. Transparent Pricing Plans */}
        <PricingSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Level Up / Contact Section */}
        <ContactSection />

        {/* 14. Retail Insights & Simple Blog Section */}
        <BlogSection />

        {/* 15. High-Converting Final CTA */}
        <FinalCta />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
