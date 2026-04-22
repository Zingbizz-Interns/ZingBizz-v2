"use client";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import BrandingHero from "@/components/branding/BrandingHero";
import PvAbout from "@/components/branding/prabivac/PvAbout";
import PvApproach from "@/components/branding/prabivac/PvApproach";
import PvApplication from "@/components/branding/prabivac/PvApplication";

export default function BrandingPVPage() {
    return (
        <main className="min-h-screen bg-[#EAE5D7] text-[#333] font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <BrandingHero
                imageSrc="/branding/prabivac/hero.jpg"
                imageAlt="Prabivac Hero"
                scrollTargetId="about"
                scrollLabel="Scroll to About section"
            />

            <PvAbout />
            <PvApproach />
            <PvApplication />

            <Footer />
        </main>
    );
}
