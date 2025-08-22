"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    backToMain: "Back to Main",
  },
  is: {
    backToMain: "Aftur á aðalsíðu",
  },
};

export default function TuneInHeader() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="pt-8 pb-12">
      <Link
        href="/main"
        className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.backToMain}
      </Link>
    </div>
  );
}
