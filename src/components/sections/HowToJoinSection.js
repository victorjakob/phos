"use client";
import Button from "../globals/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

const content = {
  en: {
    header: "How to be part of PHOS",
    body: "PHOS is in motion — a call to artists, leaders, and visionaries to unite. If this speaks to your heart, you are already part of the movement.",
    waysToJoin: {
      tuneIn: {
        title: "Tune In",
        desc: "Join the global audience on August 12, 2026",
      },
      collaborate: {
        title: "Collaborate",
        desc: "Artists, leaders, changemakers: bring your voice and light",
      },
      support: {
        title: "Support",
        desc: "Help us build the movement and the stage for this moment",
      },
    },
    cta: "I'm In",
  },
  is: {
    header: "Hvernig á að vera hluti af PHOS",
    body: "PHOS er á ferð — ákall til listamanna, leiðtoga og framtíðarsýnismanna um að sameinast. Ef þetta talar til hjarta þíns, ertu þegar hluti af hreyfingunni.",
    waysToJoin: {
      tuneIn: {
        title: "Stilltu þig inn",
        desc: "Vertu hluti af alþjóðlegu áhorfi 12. ágúst 2026",
      },
      collaborate: {
        title: "Samstarf",
        desc: "Listafólk, leiðtogar og umbreytendur: deilið rödd ykkar og ljósi",
      },
      support: {
        title: "Stuðningur",
        desc: "Hjálpaðu okkur að byggja hreyfinguna og sviðið fyrir þessa stund",
      },
    },
    cta: "Ég er með",
  },
};

export default function HowToJoinSection() {
  const { language } = useLanguage();
  const t = content[language];

  const joinItems = [
    {
      title: t.waysToJoin.tuneIn.title,
      desc: t.waysToJoin.tuneIn.desc,
    },
    {
      title: t.waysToJoin.collaborate.title,
      desc: t.waysToJoin.collaborate.desc,
    },
    {
      title: t.waysToJoin.support.title,
      desc: t.waysToJoin.support.desc,
    },
  ];

  return (
    <section id="join" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-elegant mb-8 text-[#F5F7FA]"
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
          className="text-base md:text-lg font-body text-[#D1D5DE] mb-16 max-w-3xl mx-auto"
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

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {joinItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#F5F7FA]/5 via-[#F5C542]/3 to-[#F5F7FA]/5 backdrop-blur-sm border border-[#F5C542]/15 hover:border-[#F5C542]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.7 + index * 0.1,
              }}
              whileHover={{
                scale: 1.01,
                y: -2,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5C542]/5 via-transparent to-[#F5C542]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Content container */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-elegant text-[#F5C542] font-medium tracking-wide mb-4">
                  {item.title}
                </h3>
                <p
                  className="text-[#B0B6C4] font-body leading-relaxed"
                  style={{
                    lineHeight: "1.6",
                    fontWeight: "300",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Subtle corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-[#F5C542]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-150" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.0,
          }}
        >
          <Link href="/join">
            <Button>{t.cta}</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
