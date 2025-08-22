"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const content = {
  en: {
    header: "United, we are stronger.",
    body: "We are like photons. Alone and out of sync, our light scatters and fades. But when we align, our energy becomes focused.. clearer, stronger & powerful enough to change the world.",
    emphasis:
      "Harmony unites our light, which can cut through the shadows of the world.",
  },

  is: {
    header: "Sameinuð erum við sterkari.",
    body: "Þegar ljóseindir (photons) ferðast ósamstillt, þá dreifast þær - eins og dauf, óskýr lýsing. En þegar þær fara saman, í samfösu, þá myndast laser - Ljós sem er samhæft, beint, tærara og öflugra en venjulegt ljós.",
    emphasis:
      "Samhljómurinn sameinar ljós okkar sem getur skorið í gegnum skugga heimsins.",
  },
};

export default function WhyMusicSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10 overflow-hidden bg-gradient-to-t from-transparent via-[#4ade80]/5 to-transparent">
      {/* Sacred Geometry - Simple Circle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple Circle Background - Animated and Subtly Illuminated */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: [1, 0.9, 1],
            scale: [1.1, 1.05, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Very subtle illumination glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5C542]/2 via-[#F5C542]/3 to-[#F5C542]/2 rounded-full blur-xl scale-110" />

          {/* Simple Circle - Responsive sizing */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] border border-[#F5C542]/15 rounded-full relative z-10" />

          {/* Minimal inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5C542]/1 via-transparent to-[#F5C542]/1 rounded-full blur-md scale-102" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F5C542] rounded-full opacity-30"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#F5C542]/5 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-elegant mb-12 text-[#F5F7FA]"
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

        <motion.p
          className="text-base md:text-lg font-body text-[#d1d5de] max-w-3xl mx-auto mb-16"
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
            delay: 0.3,
          }}
        >
          {t.body}
        </motion.p>

        {/* Why Music emphasis line - Enhanced with animations */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {/* Content container */}
          <div className="relative p-8 rounded-3xl group-hover:border-[#F5C542]/40 transition-all duration-300">
            <motion.p
              className="text-lg md:text-xl font-elegant text-[#F5C542] leading-relaxed"
              style={{
                lineHeight: "1.5",
                fontWeight: "100",
              }}
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              {t.emphasis}
            </motion.p>
          </div>

          {/* Animated corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#F5C542]/30 rounded-tl-3xl"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#F5C542]/30 rounded-br-3xl"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
