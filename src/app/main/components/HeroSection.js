"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const content = {
  en: {
    tagline: "— A Global Pause for Peace —",
    mantra: "One Circle. One Light. One World.",
    globalPause: "Global Pause for Peace",
    date: "August 12, 2026",
    location: "Viðey",
    cta1: "Join the Movement",
    cta2: "Learn More",
  },
  is: {
    tagline: "— Alheims kyrrðarstund —",
    mantra: "Einn hringur. Eitt ljós. Einn heimur.",
    globalPause: "alheims kyrrðarstund fyrir frið",
    date: "12. Ágúst 2026",
    location: "Viðey",
    cta1: "Taktu þátt",
    cta2: "Lesa meira",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = content[language];
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isExiting) return; // Prevent multiple clicks

    setIsExiting(true);
    console.log("Click detected! Starting immersive transition...");

    // Wait for exit animation to complete, then navigate
    setTimeout(() => {
      try {
        router.push("/main");
      } catch (error) {
        console.log("Router error, trying window.location...");
        window.location.href = "/main";
      }
    }, 1200); // Match the exit animation duration
  };

  // Alternative: also handle key presses for accessibility
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleClick(e);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isExiting]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Click overlay - transparent layer that captures all clicks */}
      <div
        className="absolute inset-0 z-20 cursor-pointer bg-transparent transition-colors duration-200"
        onClick={handleClick}
        onMouseDown={handleClick}
        aria-label="Click anywhere to continue to full site"
        tabIndex={0}
        role="button"
      />

      {/* Logo Animation - More Dramatic Entrance */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-0 z-30 cursor-pointer"
        style={{ transformOrigin: "63% 23%" }} // hotspot inside the image
        initial={{ opacity: 0, scale: 0.3, y: 50 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 8 : 1,
          y: isExiting ? 0 : -80,
        }}
        transition={{
          duration: isExiting ? 1.2 : 4.5,
          ease: isExiting ? "easeIn" : [0.25, 0.46, 0.45, 0.94],
        }}
        onClick={handleClick}
      >
        <motion.div
          whileHover={{
            scale: isExiting ? 1 : 1.03,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
          style={{
            filter: "brightness(1.1)",
          }}
        >
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-40"
            animate={{
              opacity: isExiting ? 0 : 0.4,
              scale: isExiting ? 1.5 : 1,
            }}
            transition={{ duration: isExiting ? 0.8 : 0.3 }}
          />

          {/* Elegant inner ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#F5C542]/20"
            animate={{
              opacity: isExiting ? 0 : 1,
              scale: isExiting ? 1.2 : 1,
            }}
            transition={{ duration: isExiting ? 0.6 : 0.3 }}
          />

          {/* Subtle floating light particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            whileHover={{
              opacity: isExiting ? 0 : 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#F5C542] rounded-full opacity-30"
                style={{
                  left: `${30 + (i % 3) * 20}%`,
                  top: `${30 + Math.floor(i / 3) * 20}%`,
                }}
                animate={{
                  y: [0, -8, 0],
                  opacity: isExiting ? 0 : [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.8,
                  repeat: isExiting ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>

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
        className="text-5xl md:text-4xl lg:text-5xl font-display text-[#F5F7FA] text-center mb-6 z-30 relative"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? -50 : 0,
          scale: isExiting ? 0.8 : 1,
        }}
        transition={{
          duration: isExiting ? 0.8 : 1.2,
          delay: isExiting ? 0 : 2.0,
          ease: "easeOut",
        }}
      >
        PHOS
      </motion.h1>

      {/* Additional Text Elements - Enhanced with new content */}
      <div className="text-center space-y-4 z-30 relative">
        {/* Global Pause for Peace */}
        <motion.div
          className="text-lg md:text-xl lg:text-2xl font-elegant text-[#F5C542] relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? -30 : 0,
          }}
          transition={{
            duration: isExiting ? 0.6 : 0.8,
            delay: isExiting ? 0.2 : 3.0,
            ease: "easeOut",
          }}
        >
          <span className="inline-block">{t.globalPause}</span>
        </motion.div>

        {/* Date and Location - August 12, 2026 • Viðey on same line */}
        <motion.div
          className="text-base md:text-lg lg:text-xl font-elegant text-[#F5F7FA] relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? -30 : 0,
          }}
          transition={{
            duration: isExiting ? 0.6 : 0.8,
            delay: isExiting ? 0.4 : 3.4,
            ease: "easeOut",
          }}
        >
          <span className="inline-block">{t.date}</span>
          <span className="text-[#F5C542] mx-3 text-lg">•</span>
          <span className="inline-block">{t.location}</span>
        </motion.div>
      </div>

      {/* Click anywhere indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-30">
        <motion.div
          className="text-[#F5C542] text-sm font-light opacity-80 animate-pulse"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? 50 : 0,
          }}
          transition={{
            duration: isExiting ? 0.4 : 0.8,
            delay: isExiting ? 0.6 : 4.5,
            ease: "easeOut",
          }}
        >
          Click anywhere to continue
        </motion.div>
      </div>
    </div>
  );
}
