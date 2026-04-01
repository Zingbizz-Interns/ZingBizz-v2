"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PvApplication() {
    const imgVariants = {
        hidden: { opacity: 0, scaleY: 0.95 },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section className="w-full bg-white flex flex-col px-6 md:px-12 lg:px-[80px] pt-[40px] md:pt-[60px] pb-[60px] md:pb-[80px] gap-[40px]">
            {/* Text Header */}
            <div className="flex flex-col gap-[16px] max-w-[800px]">
                <p
                    className="leading-[150%] tracking-[0%]"
                    style={{
                        fontFamily: "Urbanist",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#292929",
                    }}
                >
                    The identity system is designed to work effectively across multiple industrial touchpoints, including machinery branding, product documentation, and digital platforms.
                </p>

                <p
                    className="leading-[150%] tracking-[0%]"
                    style={{
                        fontFamily: "Urbanist",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#292929",
                    }}
                >
                    The simplified geometry ensures clarity at both large and small scales, making the symbol highly versatile for real-world applications.
                </p>
            </div>

            {/* Applications Grid */}
            <div className="flex flex-col gap-[30px] w-full">
                {/* Row 1: Brochure / Catalogue Mockup */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/prabivac/catalogue_mockup.jpg"
                        alt="Prabivac Brochure Mockup"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 2: Branded Tape Mockup */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/prabivac/tape_mockup.jpg"
                        alt="Prabivac Branded Tape"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 3: Branded carton Mockup */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/prabivac/carton_mockup.jpg"
                        alt="Prabivac Branded Carton"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 4: Branded hero */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/prabivac/hero.jpg"
                        alt="Prabivac hero"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 5: Branded Laptop Website Mockup */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/prabivac/laptop_website_mockup.jpg"
                        alt="Prabivac Branded Laptop Website"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
            </div>
        </section>
    );
}
