"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DOT_SIZE = 51.61;
const DOTS_PER_ROW = 14;

function DotRow({ className = "" }: { className?: string }) {
    return (
        <div className={`flex justify-between w-full ${className}`}>
            {Array.from({ length: DOTS_PER_ROW }).map((_, i) => (
                <motion.div
                    key={i}
                    className="rounded-full flex-shrink-0"
                    style={{
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        backgroundColor: "#F85419",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                />
            ))}
        </div>
    );
}

export default function TCApproach() {
    return (
        <section
            id="tc-approach"
            className="w-full bg-white overflow-hidden"
            style={{ fontFamily: "Urbanist" }}
        >
            {/* Top text section */}
            <div className="flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 lg:px-[80px] pt-8 md:pt-12 lg:pt-[60px] pb-8 md:pb-12 lg:pb-[50px] gap-4 lg:gap-0">
                {/* Left — Title & Subtitle */}
                <div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-[42px] leading-[100%] tracking-[0%] font-semibold text-[#021B2A]"
                    >
                        Techcora
                    </h2>
                    <p
                        className="mt-2 lg:mt-[11px] text-xl md:text-2xl lg:text-[28px] leading-snug lg:leading-[40.6px] tracking-[0%] font-semibold text-[#021B2A]"
                    >
                        Branding
                    </p>
                </div>

                {/* Right — Description */}
                <p
                    className="text-base lg:text-lg leading-relaxed lg:leading-[26px] tracking-[2%] max-w-full lg:max-w-[738px] font-normal text-[#001929]"
                >
                    Techcora is an ambitious company in India which is planning to build a
                    group of world-changing companies from India in Software, Robotics,
                    Rockets, and Energy. We helped them to craft an edgy brand identity
                    which translates their bold vision.
                </p>
            </div>

            {/* Dot grid section — hidden on mobile, visible on lg */}
            <div className="hidden lg:flex px-[80px] flex-col gap-[30px] pb-[30px]">
                {/* Row 1 */}
                <DotRow />

                {/* Row 2 */}
                <DotRow />

                {/* Rows 3–4 combined: 3 dots stacked on each side, text centered */}
                <div className="flex w-full">
                    {/* Left column: 2 rows of 3 dots each */}
                    <div className="flex flex-col justify-between flex-shrink-0">
                        {[0, 1].map((row) => (
                            <div key={`left-${row}`} className="flex gap-[35px]">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={`r${row + 3}l-${i}`}
                                        className="rounded-full"
                                        style={{
                                            width: DOT_SIZE,
                                            height: DOT_SIZE,
                                            backgroundColor: "#F85419",
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Center: APPROACH label + heading */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <span
                            className="uppercase text-center tracking-[3%] text-lg font-semibold leading-[30px] text-[#021B2A]"
                        >
                            APPROACH
                        </span>
                        <h3
                            className="text-center leading-[100%] tracking-[0%] mt-[8px] text-[42px] font-semibold text-[#021B2A]"
                        >
                            The inspiration of this identity
                            <br />
                            emerged from the team&rsquo;s deep dive
                            <br />
                            into the core of technology.
                        </h3>
                    </div>

                    {/* Right column: 2 rows of 3 dots each */}
                    <div className="flex flex-col justify-between flex-shrink-0">
                        {[0, 1].map((row) => (
                            <div key={`right-${row}`} className="flex gap-[35px]">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={`r${row + 3}r-${i}`}
                                        className="rounded-full"
                                        style={{
                                            width: DOT_SIZE,
                                            height: DOT_SIZE,
                                            backgroundColor: "#F85419",
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 5 */}
                <DotRow />
            </div>

            {/* Mobile/Tablet Approach section — visible on mobile, hidden on lg */}
            <div className="flex lg:hidden flex-col items-center px-6 md:px-12 py-8 md:py-12 gap-4">
                <span
                    className="uppercase text-center tracking-[3%] text-base md:text-lg font-semibold leading-[30px] text-[#021B2A]"
                >
                    APPROACH
                </span>
                <h3
                    className="text-center text-2xl md:text-3xl font-semibold text-[#021B2A] leading-tight"
                >
                    The inspiration of this identity emerged from the team&rsquo;s deep dive
                    into the core of technology.
                </h3>
            </div>

            {/* Identity Communication Section — dark rectangle */}
            <div
                className="mx-6 md:mx-12 lg:mx-[80px] mt-8 md:mt-12 lg:mt-[60px] relative overflow-hidden flex flex-col lg:flex-row min-h-[280px] lg:min-h-[325px]"
                style={{
                    backgroundColor: "#0A0A0A",
                }}
            >
                {/* Left text content */}
                <div className="relative z-10 flex flex-col px-6 md:px-12 lg:px-[80px] py-8 md:py-12 lg:py-[60px]">
                    <h3
                        className="text-2xl md:text-[28px] lg:text-[32px] leading-tight lg:leading-[100%] tracking-[0%] font-semibold text-[#F85419] max-w-full lg:max-w-[472px]"
                        style={{
                            fontFamily: "Urbanist",
                        }}
                    >
                        The identity needed to communicate
                    </h3>

                    <ul className="mt-6 lg:mt-[30px] flex flex-col gap-3 lg:gap-[16px]">
                        {["Technical depth", "Structured thinking", "Scalability", "Future-readiness"].map((item) => (
                            <li key={item} className="flex items-center gap-3 lg:gap-[14px]">
                                <span
                                    className="rounded-full flex-shrink-0 w-3 h-3 lg:w-4 lg:h-4 bg-[#F85419]"
                                />
                                <span
                                    className="tracking-[2%] text-sm lg:text-base font-normal text-white"
                                    style={{
                                        fontFamily: "Urbanist",
                                    }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right image — hidden on mobile, positioned on desktop */}
                <div
                    className="hidden lg:block absolute"
                    style={{
                        width: 732,
                        height: 265,
                        top: 60,
                        left: 518,
                    }}
                >
                    <Image
                        src="/branding/techcora/dotsWorld.png"
                        alt="Techcora dots world visualization"
                        fill
                        className="object-cover object-top-left"
                        sizes="732px"
                    />
                </div>

                {/* Mobile-friendly image version */}
                <div className="lg:hidden relative w-full h-[200px] md:h-[250px]">
                    <Image
                        src="/branding/techcora/dotsWorld.png"
                        alt="Techcora dots world visualization"
                        fill
                        className="object-cover object-left-top"
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
}
