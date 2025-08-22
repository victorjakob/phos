"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    header: "Tune In to PHOS",
    subtitle: "Join the global audience on August 12, 2026",
    description:
      "Be part of this historic moment when the world comes together for peace through music and light. We'll send you updates as the event approaches.",
  },
  is: {
    header: "Stilltu þig inn í PHOS",
    subtitle: "Vertu hluti af alþjóðlegu áhorfi 12. ágúst 2026",
    description:
      "Vertu hluti af þessari sögulegu stund þegar heimurinn kemur saman fyrir frið í gegnum tónlist og ljós. Við sendum þér uppfærslur þegar atburðurinn nálgast.",
  },
};

export default function TuneInContent() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl md:text-4xl font-elegant text-[#F5F7FA] mb-4">
        {t.header}
      </h1>
      <p className="text-lg font-elegant text-[#F5C542] mb-6">{t.subtitle}</p>
      <p className="text-base font-body text-[#d1d5de] leading-relaxed">
        {t.description}
      </p>
    </motion.div>
  );
}
