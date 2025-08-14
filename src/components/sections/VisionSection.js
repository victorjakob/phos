"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    header: "A Moment to Realign Humanity",
    body: "We live in a time of turning—an age calling for a reset of the human spirit. PHOS is that moment: a day to look up from the noise, align with the solar system, and remember the greater whole we belong to. On August 12, 2026, we invite the world to pause. To breathe. To listen. To let a wave of peace move through every heart.",
  },
  is: {
    header: "Stund til að endurstilla mannkynið",
    body: "Við lifum á tímamótum—tímum sem kalla á endurstillingu mannsandans. PHOS er sú stund: dagur til að líta upp úr amstrinu, samstilla okkur við sólkerfið og muna að við erum hluti af stærri heild. 12. ágúst 2026 bjóðum við heiminum að staldra við. Að anda. Að hlusta. Að leyfa friðarbylgju að flæða í gegnum hvert hjarta.",
  },
};

export default function VisionSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="vision" className="py-16 px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl tracking-tight md:text-4xl lg:text-5xl font-elegant mb-6 text-[#F5F7FA]"
          style={{
            lineHeight: "1.1",
            fontWeight: "300",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          {t.header}
        </motion.h2>

        <motion.div
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#F5C542] to-transparent mx-auto mb-8 opacity-60"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />

        <motion.p
          className="text-base md:text-lg font-body text-[#d1d5de] max-w-2xl mx-auto"
          style={{
            lineHeight: "1.6",
            fontWeight: "300",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {t.body}
        </motion.p>
      </div>
    </section>
  );
}
