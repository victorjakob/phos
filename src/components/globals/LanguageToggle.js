"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded-full border border-[#F5C542] text-[#F5C542] font-medium shadow-sm hover:shadow-md bg-transparent backdrop-blur-sm"
        aria-label={`Switch to ${language === "en" ? "Icelandic" : "English"}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        {language === "en" ? "IS" : "EN"}
      </motion.button>
    </div>
  );
}
