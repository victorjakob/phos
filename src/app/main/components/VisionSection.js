"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const content = {
  en: {
    header: "A Moment to Realign Humanity",
    mantra: "One Circle. One Light. One World.",
    body: "We live in a time of turning—an age calling for a reset of the human spirit. PHOS is that moment: a day to look up from the noise, align with the solar system, and remember the greater whole we belong to. On August 12, 2026, we invite the world to pause. To breathe. To listen. To let a wave of peace move through every heart.",
  },
  is: {
    header: "Stund til að endurstilla mannkynið",
    mantra: "Einn hringur. Eitt ljós. Einn heimur.",
    body: "Við lifum á tímamótum—tímum sem kalla á endurstillingu mannsandans. PHOS er sú stund: dagur til að líta upp úr amstrinu, samstilla okkur við sólkerfið og muna að við erum hluti af stærri heild. 12. ágúst 2026 bjóðum við heiminum að staldra við. Að anda. Að hlusta. Að leyfa friðarbylgju að flæða í gegnum hvert hjarta.",
  },
};

export default function VisionSection() {
  const { language } = useLanguage();
  const t = content[language];
  const [showArrow, setShowArrow] = useState(true);

  // Hide arrow as soon as any scrolling is detected
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(false);
    };

    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="vision"
      className="relative z-10 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl tracking-tight md:text-4xl lg:text-5xl font-elegant mb-6 text-[#F5F7FA]"
          style={{
            lineHeight: "1.1",
            fontWeight: "300",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          {t.header}
        </motion.h2>

        {/* Mantra - One Circle. One Light. One World. */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <div className="text-lg md:text-xl lg:text-2xl font-elegant text-[#F5C542] space-y-2">
            {t.mantra.split(". ").map((part, index) => (
              <motion.div
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.8 + index * 0.3,
                }}
              >
                {part}
                {index < t.mantra.split(". ").length - 1 && (
                  <span className="mx-2 text-[#F5C542]/60">•</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#F5C542] to-transparent mx-auto mb-8 opacity-60"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            delay: 1.4,
          }}
        />

        <motion.p
          className="text-base md:text-lg font-body text-[#d1d5de] max-w-2xl mx-auto"
          style={{
            lineHeight: "1.6",
            fontWeight: "300",
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 2.0,
          }}
        >
          {t.body}
        </motion.p>
      </div>

      {/* Floating Scroll Indicator - Absolutely Positioned */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showArrow ? 1 : 0,
          y: showArrow ? 0 : 20,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 3.2, // Appears after body text (2.0s) + extra delay
        }}
      >
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          className="inline-block text-[#F5C542]/60 hover:text-[#F5C542] transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
