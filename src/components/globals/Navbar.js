"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Transform scroll progress to background blur
  const backgroundBlur = useTransform(scrollY, [0, 100], [0, 10]);
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    // Only handle scroll visibility on home page
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show PHOS wordmark after 200px scroll (when leaving hero section)
      if (currentScrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
      style={{
        backdropFilter: `blur(${backgroundBlur}px)`,
        backgroundColor: `rgba(11, 15, 26, ${backgroundOpacity})`,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Left: PHOS Wordmark - Link to home, visibility depends on page */}
      <motion.div
        className="text-[#F5F7FA] font-display text-xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link
          href="/"
          className="hover:text-[#F5C542] transition-colors duration-300"
        >
          PHOS
        </Link>
      </motion.div>

      {/* Right: Language Toggle + CTA */}
      <div className="flex items-center space-x-4">
        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full border border-[#F5C542] text-[#F5C542] text-sm font-medium shadow-sm hover:shadow-md bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === "en" ? "ÍS" : "EN"}
        </motion.button>

        {/* CTA Button */}
        <Link href="/join">
          <motion.button
            className="px-4 py-2 rounded-full bg-[#F5C542] text-[#0B0F1A] text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#F5C542]/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "I'm In" : "Ég er með"}
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
