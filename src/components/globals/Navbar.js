"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const content = {
  en: {
    sections: [
      { id: "vision", label: "Vision" },
      { id: "what-is-phos", label: "What is PHOS" },
      { id: "why-together", label: "Why Together" },
      { id: "why-music", label: "Why Music" },
      { id: "the-moment", label: "The Moment" },
      { id: "be-part", label: "Be Part" },
      { id: "contact", label: "Contact" },
    ],
    cta: "I'm In",
  },
  is: {
    sections: [
      { id: "vision", label: "Sýn" },
      { id: "what-is-phos", label: "Hvað er PHOS" },
      { id: "why-together", label: "Af hverju saman" },
      { id: "why-music", label: "Af hverju tónlist" },
      { id: "the-moment", label: "Stundin" },
      { id: "be-part", label: "Vertu með" },
      { id: "contact", label: "Samskipti" },
    ],
    cta: "Ég er með",
  },
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll progress to background blur
  const backgroundBlur = useTransform(scrollY, [0, 100], [0, 10]);
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar after 200px scroll (when leaving hero section)
      if (currentScrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
      style={{
        backdropFilter: `blur(${backgroundBlur}px)`,
        backgroundColor: `rgba(11, 15, 26, ${backgroundOpacity})`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Left: PHOS Wordmark */}
      <motion.div
        className="text-[#F5F7FA] font-display text-xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        PHOS
      </motion.div>

      {/* Center: Section Anchors (Desktop only) */}
      <motion.div
        className="hidden lg:flex items-center space-x-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.sections.map((section, index) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="text-[#F5F7FA] text-sm font-medium transition-all duration-300 hover:text-[#F5C542] relative group"
          >
            {section.label}
            {/* Soft gold underline on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5C542] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </motion.div>

      {/* Right: Language Toggle + CTA */}
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full border border-[#F5C542] text-[#F5C542] text-sm font-medium shadow-sm hover:shadow-md bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === "en" ? "ÍS" : "EN"}
        </motion.button>

        {/* Primary CTA */}
        <Link
          href="#"
          className="px-4 py-2 rounded-full bg-[#F5C542] text-[#0B0F1A] text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#F5C542]/90"
        >
          {t.cta}
        </Link>
      </motion.div>
    </motion.nav>
  );
}
