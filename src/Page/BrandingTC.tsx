"use client";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import BrandingHero from "@/components/branding/BrandingHero";
import TCApproach from "@/components/branding/techcora/TCApproach";
import TCLogo from "@/components/branding/techcora/TCLogo";
import TCApplication from "@/components/branding/techcora/TCApplication";

export default function BrandingTCPage() {
    return (
        <main className="min-h-screen bg-[#EAE5D7] text-white font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <BrandingHero
                imageSrc="/branding/techcora/buildingSign.jpg"
                imageAlt="Techcora Hero"
                scrollTargetId="tc-approach"
                scrollLabel="Scroll to Approach section"
            />

            <TCApproach />
            <TCLogo />
            <TCApplication />

            <Footer />
        </main>
    );
}
