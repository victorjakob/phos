"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    header: "Light. Music. Unity.",
    iconBlocks: {
      concert:
        "A Global Concert for Peace — Artists across continents playing in one heartbeat.",
      alignment:
        "Alignment with the Cosmos — Timed with a solar eclipse; a symbol of stillness, balance, transformation.",
      light:
        "One Light, One Heartbeat — A shared frequency bridging borders, faiths, and cultures.",
    },
  },
  is: {
    header: "Ljós. Tónlist. Samstaða.",
    iconBlocks: {
      concert:
        "Alþjóðlegir tónleikar fyrir frið — Listafólk á heimsálfum spilar í einum hjartslætti.",
      alignment:
        "Samstilling við alheiminn — Tímsett með sólmyrkva; tákn kyrrðar, jafnvægis og umbreytingar.",
      light:
        "Eitt ljós, einn hjartsláttur — Sameiginleg tíðni sem tengir saman lönd, trú og menningu.",
    },
  },
};

export default function WhatIsPhosSection() {
  const { language } = useLanguage();
  const t = content[language];

  const iconItems = [
    {
      text: t.iconBlocks.concert,
      icon: "🎵",
    },
    {
      text: t.iconBlocks.alignment,
      icon: "🌑",
    },
    {
      text: t.iconBlocks.light,
      icon: "✨",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-elegant mb-16 text-center text-[#F5F7FA]"
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

        <div className="grid md:grid-cols-3 gap-12">
          {iconItems.map((item, index) => (
            <motion.div
              key={index}
              className="text-center group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3 + index * 0.2,
              }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5C542]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F5C542] to-[#F5F7FA] rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#F5C542]/20 to-transparent rounded-full mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative">
                <p
                  className="text-lg md:text-xl font-elegant text-[#F5F7FA] leading-tight"
                  style={{
                    lineHeight: "1.4",
                    fontWeight: "400",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
