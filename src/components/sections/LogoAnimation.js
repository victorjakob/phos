"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    tagline: "— A Global Pause for Peace —",
    mantra: "One Circle. One Light. One World.",
    cta1: "Join the Movement",
    cta2: "Learn More",
  },
  is: {
    tagline: "— Alheims kyrrðarstund —",
    mantra: "Einn hringur. Eitt ljós. Einn heimur.",
    cta1: "Taktu þátt",
    cta2: "Lesa meira",
  },
};

export default function LogoAnimation() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Logo Animation - More Dramatic Entrance */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-0"
        initial={{ opacity: 0, scale: 0.3, y: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: -40,
        }}
        transition={{
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5C542]/20 to-transparent rounded-full blur-xl opacity-60" />

          <Image
            src="/phos-logo.png"
            alt="PHOS Logo"
            width={256}
            height={256}
            className="w-full h-full object-contain relative z-10"
            priority
          />
        </motion.div>
      </motion.div>

      {/* PHOS Text - Centerpiece */}
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-display text-[#F5F7FA] text-center mb-6"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 2.0,
          ease: "easeOut",
        }}
      >
        PHOS
      </motion.h1>

      {/* Additional Text Elements - Smaller and below */}
      <div className="text-center space-y-3">
        {/* Tagline - Super Cool Enhanced Effects */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 2.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className="text-lg md:text-xl lg:text-2xl font-elegant font-bold relative z-10 bg-gradient-to-r from-[#F5C542] via-[#F5F7FA] to-[#F5C542] bg-clip-text text-transparent"
            whileHover={{
              scale: 1.08,
              filter: "brightness(1.2)",
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 197, 66, 0.8)",
                  "0 0 30px rgba(245, 197, 66, 1)",
                  "0 0 20px rgba(245, 197, 66, 0.8)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {t.tagline}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Tagline 2 - Enhanced with cool effects */}
        <motion.div
          className="text-base md:text-lg lg:text-xl font-elegant text-[#F5F7FA] relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 3.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 15px rgba(245, 247, 250, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            {t.mantra}
          </motion.span>
        </motion.div>

        {/* CTAs - Spring Enhanced */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 5.2,
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="px-6 py-3 text-base font-medium transition-all duration-300 focus:outline-none text-[#F5C542] hover:text-[#F5F7FA] relative group overflow-hidden block"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                {t.cta1}
              </span>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5C542]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="px-6 py-3 text-base font-medium transition-all duration-300 focus:outline-none text-[#B0B6C4] hover:text-[#F5F7FA] relative group overflow-hidden block"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                {t.cta2}
              </span>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B0B6C4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
