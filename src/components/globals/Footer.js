"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const content = {
  en: {
    contact: "Get in Touch",
    subtitle:
      "If you're interested in participating, supporting the project, or getting more information:",
    email: "phos@phos.is",
    website: "www.phos.is",
    brand: "PHOS",
    address: "Address: Iceland - the heart of light",
    separator:
      "_________________________________________________________________________________",
    description: "PHOS is not just an event - it's a movement.",
    description2: "It's a call to the heart, to harmony, and to light.",
    description3:
      "Out of darkness, light of new times will rise. PHOS is that moment.",
  },
  is: {
    contact: "Hafðu samband",
    subtitle:
      "Ef þú hefur áhuga á að taka þátt, styðja verkefnið eða fá frekari upplýsingar:",
    email: "phos@phos.is",
    website: "www.phos.is",
    brand: "PHOS",
    address: "Aðsetur: Ísland - hjarta ljóssins",
    separator:
      "_________________________________________________________________________________",
    description: "PHOS er ekki bara viðburður - það er hreyfing.",
    description2: "Það er boð til hjartans, til samhljómsins og til ljóssins.",
    description3:
      "Úr myrkrinu mun ljós nýrra tíma renna upp. PHOS er sú stund.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="py-20 px-6 text-center text-[#B0B6C4] relative z-10 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/95 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Description - Now First */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg md:text-xl font-body text-[#D1D5DE] leading-relaxed font-light"
              style={{
                lineHeight: "1.7",
                fontWeight: "300",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.description}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-body text-[#D1D5DE] leading-relaxed font-light"
              style={{
                lineHeight: "1.7",
                fontWeight: "300",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t.description2}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-body text-[#D1D5DE] leading-relaxed font-light"
              style={{
                lineHeight: "1.7",
                fontWeight: "300",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t.description3}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Elegant Separator */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#F5C542]/40 to-transparent mx-auto mb-4" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#F5C542]/20 to-transparent mx-auto mb-4" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F5C542]/10 to-transparent mx-auto" />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-elegant text-[#F5F7FA] mb-6"
            style={{
              lineHeight: "1.1",
              fontWeight: "300",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {t.contact}
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl font-body text-[#D1D5DE] mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              lineHeight: "1.6",
              fontWeight: "300",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.p
              className="text-xl md:text-2xl font-body text-[#F5C542] font-medium tracking-wide hover:text-[#F5C542]/80 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {t.email}
            </motion.p>
            <p className="text-sm md:text-base font-body text-[#B0B6C4] opacity-80">
              {t.website}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
