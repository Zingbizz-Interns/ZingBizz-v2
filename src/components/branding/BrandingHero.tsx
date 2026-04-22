"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type BrandingHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  scrollTargetId: string;
  scrollLabel?: string;
};

export default function BrandingHero({
  imageSrc,
  imageAlt = "Hero",
  scrollTargetId,
  scrollLabel = "Scroll down",
}: BrandingHeroProps) {
  return (
    <section className="w-full relative h-[50vh] min-h-[400px] md:min-h-0 md:h-screen bg-[#F5F5F5] overflow-hidden">
      <div className="w-full relative h-full flex justify-center items-center">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        <motion.button
          onClick={() => {
            const target = document.getElementById(scrollTargetId);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-[45px] left-1/2 -translate-x-1/2 z-10 w-[37px] h-[18.5px] flex items-center justify-center cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label={scrollLabel}
        >
          <svg
            width="37"
            height="19"
            viewBox="0 0 37 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L18.5 16L35 2"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
