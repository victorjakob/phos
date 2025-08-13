"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CountdownTimer() {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-12T12:00:00Z"); // August 12, 2026

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: language === "en" ? "Days" : "Dagar" },
    {
      value: timeLeft.hours,
      label: language === "en" ? "Hours" : "Klukkustundir",
    },
    {
      value: timeLeft.minutes,
      label: language === "en" ? "Minutes" : "Mínútur",
    },
    {
      value: timeLeft.seconds,
      label: language === "en" ? "Seconds" : "Sekúndur",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4 sm:px-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
          className="group"
        >
          {/* Main timer card - subtle and clean with golden hint */}
          <div className="bg-gradient-to-br from-[#F5F7FA]/5 via-[#F5C542]/3 to-[#F5F7FA]/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-[#F5C542]/15 group-hover:border-[#F5C542]/25 transition-all duration-300">
            {/* Number - clean and readable with golden tint */}
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-[#F5F7FA] mb-1 sm:mb-2 font-light"
              key={unit.value}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>

            {/* Label - subtle and elegant with golden accent */}
            <div className="text-xs sm:text-sm font-elegant text-[#F5C542]/70 font-light tracking-wide leading-tight">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
