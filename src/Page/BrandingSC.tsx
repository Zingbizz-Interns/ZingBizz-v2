"use client";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import BrandingHero from "@/components/branding/BrandingHero";
import ScAbout from "@/components/branding/studio-cafe/ScAbout";
import ScApproach from "@/components/branding/studio-cafe/ScApproach";
import ScLogoSection from "@/components/branding/studio-cafe/ScLogoSection";
import ScPaletteSection from "@/components/branding/studio-cafe/ScPaletteSection";
import ScApplications from "@/components/branding/studio-cafe/ScApplications";

export default function BrandingSCPage() {
  return (
    <main className="min-h-screen bg-[#EAE5D7] text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <BrandingHero
        imageSrc="/branding/studiocafe/herosection.jpg"
        imageAlt="Studio Cafe Hero"
        scrollTargetId="about"
        scrollLabel="Scroll to About section"
      />
      <ScAbout />
      <ScApproach />
      <ScLogoSection />
      <ScPaletteSection />
      <ScApplications />
      <Footer />
    </main>
  );
}
