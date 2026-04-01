"use client";

import { motion } from "framer-motion";

export default function PvAbout() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="w-full bg-white relative">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-[80px] lg:py-24 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-24">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-[35%] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h2
              variants={textVariants}
              className="font-semibold text-[#021B2A] text-3xl md:text-4xl lg:text-[42px] leading-[100%] tracking-[0em]"
              style={{ fontFamily: "Urbanist" }}
            >
              Prabivac Pumps
            </motion.h2>
            <motion.div 
              variants={textVariants}
              className="flex flex-col gap-3 lg:gap-4 font-semibold text-[#021B2A] text-xl md:text-2xl lg:text-[28px] leading-[100%] tracking-[0em]"
              style={{ fontFamily: "Urbanist" }}
            >
              <div>Branding</div>
              <div>Identity</div>
              <div>Photography</div>
              <div>Website</div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-[65%] flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={textVariants}
              className="font-normal text-[#001929] text-base md:text-lg lg:text-[18px] leading-[150%] md:leading-[32px] tracking-[0.02em]"
              style={{ fontFamily: "Urbanist" }}
            >
              Prabivac Pumps, founded in 1996 in Chennai, is a well-known manufacturer of vacuum pumps that meet the different needs of industrial and scientific institutions. Their product line comprises of a variety of vacuum pumps that are renowned for their efficiency and great performance. Prabivac Pumps are committed to quality and customer satisfaction which makes them a trusted and reputable brand in the industry.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="font-normal text-[#001929] text-base md:text-lg lg:text-[18px] leading-[150%] md:leading-[32px] tracking-[0.02em]"
              style={{ fontFamily: "Urbanist" }}
            >
              Prabivac Pumps approached us to refresh their visual identity and brand language, as they aimed to revolutionize their overall brand image. We worked closely with Prabivac Pumps to understand their vision and values, and crafted a new visual identity that captured their essence while resonating with their target audience. The result was a cohesive and impactful brand identity that reflected Prabivac Pumps’s evolution and positioned them for future growth.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
