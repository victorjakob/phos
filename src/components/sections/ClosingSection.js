import AnimatedSection from "../globals/AnimatedSection";
import Button from "../globals/Button";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    quote: "PHOS is not just an event—it's a heartbeat.",
    subline: "From the heart of Iceland to the heart of the world.",
    finalCta: "Join the Movement",
  },
  is: {
    quote: "PHOS er ekki bara viðburður—það er hjartsláttur.",
    subline: "Frá hjarta Íslands til hjarta heimsins.",
    finalCta: "Taktu þátt í hreyfingunni",
  },
};

export default function ClosingSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10 ">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-4xl font-elegant italic mb-6 text-[#F5F7FA]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="text-lg md:text-xl font-body text-[#B0B6C4] mb-8">
          {t.subline}
        </p>
        <Button>{t.finalCta}</Button>
      </div>
    </AnimatedSection>
  );
}
