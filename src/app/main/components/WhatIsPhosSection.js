"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const content = {
  en: {
    header: "Light. Music. Unity.",
    iconBlocks: {
      concert: {
        headline: "A Global Concert for Peace",
        body: "Artists across continents playing in one heartbeat.",
      },
      alignment: {
        headline: "Cosmic Alignment",
        body: "Timed with a solar eclipse; a symbol of stillness, balance, transformation.",
      },
      light: {
        headline: "One Light, One Heartbeat",
        body: "A shared frequency bridging borders, faiths, and cultures.",
      },
    },
  },
  is: {
    header: "Ljós. Tónlist. Samstaða.",
    iconBlocks: {
      concert: {
        headline: "Alþjóðlegir tónleikar fyrir frið",
        body: "Listafólk á heimsálfum spilar í einum hjartslætti.",
      },
      alignment: {
        headline: "Samstilling við alheiminn",
        body: "Tímsett með sólmyrkva; tákn kyrrðar, jafnvægis og umbreytingar.",
      },
      light: {
        headline: "Eitt ljós, einn hjartsláttur",
        body: "Sameiginleg tíðni sem tengir saman lönd, trú og menningu.",
      },
    },
  },
};

export default function WhatIsPhosSection() {
  const { language } = useLanguage();
  const t = content[language];

  const iconItems = [
    {
      text: t.iconBlocks.concert,
      icon: "/icons/note.jpeg",
      type: "image",
    },
    {
      text: t.iconBlocks.alignment,
      icon: "/icons/eclipse.jpeg",
      type: "image",
    },
    {
      text: t.iconBlocks.light,
      icon: "/icons/love.jpeg",
      type: "image",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-elegant mb-24 text-center text-[#F5F7FA]"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5C542]/5 to-transparent rounded-3xl opacity-0 transition-opacity duration-500" />

              {/* Icon container */}
              <div className="relative mb-8">
                {item.type === "image" ? (
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={96}
                    height={96}
                    className="object-cover rounded-full mx-auto transition-all duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-4xl">{item.icon}</span>
                )}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg md:text-xl lg:text-2xl font-elegant text-[#F5C542] mb-3 leading-tight">
                  {item.text.headline}
                </h3>
                <p
                  className="text-base md:text-lg font-body text-[#F5F7FA] leading-tight"
                  style={{
                    lineHeight: "1.4",
                    fontWeight: "400",
                  }}
                >
                  {item.text.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
