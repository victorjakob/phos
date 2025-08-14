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

export default function HeroSection() {
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
          <div className="absolute inset-0 rounded-full blur-xl opacity-60" />

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
      </div>
    </div>
  );
}
