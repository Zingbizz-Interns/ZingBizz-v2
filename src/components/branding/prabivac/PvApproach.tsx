"use client";

import { motion } from "framer-motion";

export default function PvApproach() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <section className="w-full bg-[#DADFE5] relative">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-[80px] py-[60px] md:py-[80px] lg:py-[100px] mx-auto flex flex-col items-center justify-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.h3
              variants={textVariants}
              className="font-bold text-[#4A4A4A] text-sm md:text-base tracking-widest uppercase"
              style={{ fontFamily: "Urbanist" }}
            >
              APPROACH
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="font-semibold text-[#2E2E2E] text-[26px] md:text-4xl lg:text-[40px] leading-[1.35] tracking-tight"
              style={{ fontFamily: "Urbanist" }}
            >
              The visual identity of Prabivac Pumps is <br className="hidden md:block" />
              centered around one thing, their pumps.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Design Inspired Segment */}
      <section className="w-full bg-white relative">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-[80px] lg:py-24 py-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">
            {/* Left Column */}
            <motion.div
              className="w-full lg:w-[50%] flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h3
                variants={textVariants}
                className="font-semibold text-[#2E2E2E] text-base md:text-lg tracking-[0.05em] uppercase"
                style={{ fontFamily: "Urbanist" }}
              >
                DESIGN INSPIRED BY ENGINEERING
              </motion.h3>

              <div className="flex flex-col gap-4">
                <motion.p
                  variants={textVariants}
                  className="font-normal text-[#4A4A4A] text-base md:text-lg lg:text-[18px] leading-[160%] md:leading-[32px] tracking-[0.02em]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  The logo symbol is derived from the fundamental working principle of a vacuum pump — the rotational mechanism that creates pressure differentials to move gases.
                </motion.p>

                <motion.p
                  variants={textVariants}
                  className="font-normal text-[#4A4A4A] text-base md:text-lg lg:text-[18px] leading-[160%] md:leading-[32px] tracking-[0.02em]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  The abstract form represents the cyclical motion and internal chamber structure found within vacuum pump systems. By simplifying this mechanical concept into a geometric symbol, the mark communicates both movement and engineering precision.
                </motion.p>

                <motion.p
                  variants={textVariants}
                  className="font-normal text-[#4A4A4A] text-base md:text-lg lg:text-[18px] leading-[160%] md:leading-[32px] tracking-[0.02em]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  The result is a symbol that visually reflects the brand’s technical foundation while remaining clean and memorable.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="w-full lg:w-[50%] flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textVariants}
            >
              <img
                src="/branding/prabivac/logo.jpg"
                alt="Design Inspired By Engineering"
                className="w-full h-auto object-contain max-w-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* 3-Column Logo Grid Segment */}
      <section className="w-full bg-white relative">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-[80px] pb-12 lg:pb-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] w-full items-stretch">
            {/* Left Column */}
            <motion.div
              className="w-full h-full flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/branding/prabivac/pumps%20logo1.png"
                alt="Prabivac Pumps Logo Variations 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Middle Column */}
            <motion.div
              className="w-full h-full bg-[#DADFE5] p-8 lg:p-12 xl:p-16 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="max-w-[420px] mx-auto w-full">
                <p
                  className="font-normal text-[#4A4A4A] text-sm md:text-base lg:text-[15px] xl:text-[16px] leading-[160%] md:leading-[1.8] tracking-[0.02em] mb-8"
                  style={{ fontFamily: "Urbanist" }}
                >
                  The geometry creates a balanced structure that feels both technical and fluid, reinforcing the idea of controlled mechanical movement.
                </p>
                <ul className="flex flex-col gap-4 lg:gap-5">
                  {[
                    "Symmetrical engineering-inspired structure",
                    "Continuous flow representing motion",
                    "Simplified geometry for scalability"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 lg:whitespace-nowrap">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#0099FF] shrink-0" />
                      <span
                        className="font-normal text-[#4A4A4A] text-sm md:text-base lg:text-[15px] xl:text-[16px] leading-[160%] md:leading-[1.8] tracking-[0.02em]"
                        style={{ fontFamily: "Urbanist" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="w-full h-full flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/branding/prabivac/pumps%20logo2.png"
                alt="Prabivac Pumps Logo Variations 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typography Segment */}
      <section className="w-full bg-white relative">
        <div className="w-full max-w-[1000px] px-6 md:px-12 lg:px-0 pb-[60px] md:pb-[80px] lg:pb-[100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content (Urbanist) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 lg:pe-8"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <h3 className="font-bold text-[#4A4A4A] text-sm md:text-base tracking-widest uppercase mb-2">
              TYPOGRAPHY
            </h3>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              The typography complements the symbol with a bold, highly legible sans-serif style, Roboto.
            </p>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              The clean, geometric letterforms communicate precision, reliability, and industrial strength, aligning with the brand’s engineering-focused identity.
            </p>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              The uppercase styling adds presence and authority, making the brand name highly visible in industrial environments.
            </p>
          </motion.div>

          {/* Right Content (Roboto) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 justify-items-center"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {/* Top Row: Light */}
            <span className="font-light text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#000000] leading-none">Aa</span>
            <span className="font-light text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#9A9A9A] leading-none">Aa</span>
            <span className="font-light text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#DEDEDE] leading-none">Aa</span>

            {/* Middle Row: Semi Bold */}
            <span className="font-semibold text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#000000] leading-none">Aa</span>
            <span className="font-semibold text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#9A9A9A] leading-none">Aa</span>
            <span className="font-semibold text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#DEDEDE] leading-none">Aa</span>

            {/* Bottom Row: Black */}
            <span className="font-black text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#000000] leading-none">Aa</span>
            <span className="font-black text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#9A9A9A] leading-none">Aa</span>
            <span className="font-black text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px] text-[#DEDEDE] leading-none">Aa</span>
          </motion.div>
        </div>
      </section>

      {/* Colour System Segment */}
      <section className="w-full bg-[#D9D9D9] relative">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-[80px] py-[60px] md:py-[80px] lg:py-[100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-5 pt-3"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <h3 className="font-bold text-[#4A4A4A] text-sm md:text-base tracking-widest uppercase mb-2">
              COLOUR SYSTEM
            </h3>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              The brand uses a deep blue background paired with a bright blue accent.
            </p>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              Deep Blue represents reliability, engineering excellence, and industrial trust.
              Bright Blue introduces a sense of energy and motion, reinforcing the dynamic nature of vacuum pump systems.
            </p>
            <p className="font-normal text-[#4A4A4A] text-sm md:text-[15px] lg:text-[16px] leading-[1.8] tracking-[0.02em]">
              This contrast ensures strong visibility across both digital and physical applications.
            </p>
          </motion.div>

          {/* Right Content — Colour Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-0"
          >
            {/* Top Row — 2 blocks */}
            <div className="grid grid-cols-2 gap-0">
              <div className="h-[150px] md:h-[200px] lg:h-[220px]" style={{ backgroundColor: '#DADFE5' }} />
              <div className="h-[150px] md:h-[200px] lg:h-[220px]" style={{ backgroundColor: '#FFFFFF' }} />
            </div>
            {/* Bottom Row — 3 blocks */}
            <div className="grid grid-cols-3 gap-0">
              <div className="h-[150px] md:h-[200px] lg:h-[220px]" style={{ backgroundColor: '#353535' }} />
              <div className="h-[150px] md:h-[200px] lg:h-[220px]" style={{ backgroundColor: '#000035' }} />
              <div className="h-[150px] md:h-[200px] lg:h-[220px]" style={{ backgroundColor: '#0099FF' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pattern Image Section */}
      <section className="w-full bg-white relative">
        <img
          src="/branding/prabivac/pattern.jpg"
          alt="Prabivac Brand Pattern"
          className="w-full h-auto object-cover"
        />
      </section>
    </>
  );
}
