"use client";
import { motion } from "framer-motion";
import Button from "../globals/Button";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    quote: "PHOS is not just an event—it's a heartbeat.",
    subline: "From the heart of Iceland to the heart of the world.",
    finalCta: "Join the Movement",
  },
  is: {
    quote: "PHOS er ekki bara viðburður—það er hjartsláttur.",
    subline: "Frá hjarta Íslands til hjarta heimsins.",
    finalCta: "Taktu þátt í hreyfingunni",
  },
};

export default function ClosingSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          className="text-3xl md:text-4xl font-elegant italic mb-6 text-[#F5F7FA]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </motion.blockquote>

        <motion.p
          className="text-lg md:text-xl font-body text-[#B0B6C4] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          {t.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Button>{t.finalCta}</Button>
        </motion.div>
      </div>
    </section>
  );
}
