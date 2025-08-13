import AnimatedSection from "./globals/AnimatedSection";
import CountdownTimer from "./CountdownTimer";

const content = {
  en: {
    header: "Out of the Shadow, a Light for a New Time Will Rise",
    body: "On this day, the moon will pass before the sun, and the Earth will pause in shadow. Sun, moon, and Earth in perfect alignment — a cosmic sign of balance, stillness, and renewal. It is the perfect threshold for a new beginning.",
  },
  is: {
    header: "Úr skugganum mun ljós nýrra tíma rísa",
    body: "Á þessum degi gengur tunglið fyrir sólina og jörðin staldra við í skugga. Sól, tungl og jörð mætast í fullkominni línu — alheimstákn um jafnvægi, kyrrð og nýtt upphaf. Kjörin stund til að hefja nýjan tíma.",
  },
};

export default function TheMomentSection({ language }) {
  const t = content[language];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10 bg-[#1a1f2e]/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-elegant mb-8 text-[#F5F7FA]">
          {t.header}
        </h2>
        <p className="text-lg md:text-xl font-body text-[#B0B6C4] mb-12 max-w-3xl mx-auto">
          {t.body}
        </p>
        <CountdownTimer />
      </div>
    </AnimatedSection>
  );
}
