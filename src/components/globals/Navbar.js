"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    // Set navbar visible on non-home pages
    setIsVisible(!isHomePage);
  }, [isHomePage]);

  // Always render the component, but conditionally show content
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
      style={{
        backdropFilter: `blur(${backgroundBlur}px)`,
        backgroundColor: `rgba(11, 15, 26, ${backgroundOpacity})`,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Left: PHOS Logo - Link to home, visibility depends on page */}
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
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <Image
            src="/phos-logo.png"
            alt="PHOS Logo"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
      </motion.div>

      {/* Right: Language Toggle + CTA */}
      <div className="flex items-center space-x-4">
        {/* Language Toggle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full border border-[#F5C542] text-[#F5C542] text-sm font-medium shadow-sm hover:shadow-md bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            {language === "en" ? "EN" : "IS"}
          </button>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/join">
            <button className="px-4 py-2 rounded-full bg-[#F5C542] text-[#0B0F1A] text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#F5C542]/90">
              {language === "en" ? "Sign Up" : "Skrá sig"}
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
