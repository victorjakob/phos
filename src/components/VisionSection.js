import AnimatedSection from "./globals/AnimatedSection";

const content = {
  en: {
    header: "A Moment to Realign Humanity",
    body: "We live in a time of turning — an age calling for a great reset of the human spirit. PHOS is that moment. A day to look up from the noise, align with the solar system, and remember the greater picture we are part of. On August 12, 2026, we invite the world to pause. To breathe. To listen. To allow a wave of peace to move through every heart.",
  },
  is: {
    header: "Stund til að endurstilla mannkynið",
    body: "Við lifum á tímamótum — þar sem þörf er á djúpri endurstillingu mannsandans. PHOS er sú stund. Dagur til að líta upp úr amstrinu, samstilla okkur við sólkerfið og muna að við erum hluti af stærri heild. 12. ágúst 2026 bjóðum við heiminum að staldra við. Að anda. Að hlusta. Að leyfa friðarbylgju að flæða í gegnum hvert hjarta.",
  },
};

export default function VisionSection({ language }) {
  const t = content[language];

  return (
    <AnimatedSection id="vision" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-elegant mb-8 text-[#F5F7FA]">
          {t.header}
        </h2>
        <p className="text-lg md:text-xl font-body text-[#B0B6C4] max-w-3xl mx-auto">
          {t.body}
        </p>
      </div>
    </AnimatedSection>
  );
}
