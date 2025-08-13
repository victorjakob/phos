import LogoAnimation from "./LogoAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    // Content is now handled by LogoAnimation component
  },
  is: {
    // Content is now handled by LogoAnimation component
  },
};

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center">
        <LogoAnimation />
      </div>
    </section>
  );
}
