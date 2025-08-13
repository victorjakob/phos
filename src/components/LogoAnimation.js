"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoAnimation() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Logo Animation - Positioned higher */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 "
        initial={{ opacity: 0, scale: 0.5, y: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: -80,
        }}
        transition={{
          duration: 2.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/phos-logo.png"
            alt="PHOS Logo"
            width={256}
            height={256}
            className="w-full h-full object-contain"
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
          delay: 1.5,
          ease: "easeOut",
        }}
      >
        PHoS
      </motion.h1>

      {/* Additional Text Elements - Smaller and below */}
      <div className="text-center space-y-3">
        {/* Date - Gold, smaller */}
        <motion.div
          className="text-lg md:text-xl lg:text-2xl font-elegant text-[#F5C542]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.0,
            ease: "easeOut",
          }}
        >
          August 12, 2026
        </motion.div>

        {/* Tagline 1 - White, smaller */}
        <motion.div
          className="text-sm md:text-base lg:text-lg font-body text-[#B0B6C4]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.3,
            ease: "easeOut",
          }}
        >
          — A Global Pause for Peace —
        </motion.div>

        {/* Tagline 2 - White, smaller */}
        <motion.div
          className="text-base md:text-lg lg:text-xl font-elegant text-[#F5F7FA]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.6,
            ease: "easeOut",
          }}
        >
          One Circle. One Light. One World.
        </motion.div>
      </div>
    </div>
  );
}
