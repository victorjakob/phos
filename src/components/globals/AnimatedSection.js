"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.section>
  );
}
