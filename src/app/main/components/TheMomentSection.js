"use client";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    header: "Why August 12, 2026?",
    body: "On this day, the moon passes before the sun and Earth pauses in shadow. Sun, moon, and Earth align in a single line—a cosmic sign of balance, stillness, and renewal. The perfect threshold for a new beginning.",
  },
  is: {
    header: "Af hverju 12. ágúst 2026?",
    body: "Þennan dag gengur tunglið fyrir sólina og jörðin staldra við í skugga. Sól, tungl og jörð mætast í beinni línu—alheimstákn um jafnvægi, kyrrð og endurnýjun. Kjörin stund til nýs upphafs.",
  },
};

export default function TheMomentSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-elegant mb-8 text-[#F5F7FA]"
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

        <motion.p
          className="text-lg md:text-xl font-body text-[#B0B6C4] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          {t.body}
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
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  );
}
