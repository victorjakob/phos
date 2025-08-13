import AnimatedSection from "./globals/AnimatedSection";

const content = {
  en: {
    header: "When Light Unites, It Becomes Unstoppable",
    body: "When light moves in chaos, it scatters. When light moves in unity, it becomes a laser — focused, clear, and powerful. We are the same. When we gather as one, our impact multiplies. Music is a pure carrier of energy — unseen, yet capable of traveling at the speed of thought. On this day, the music of PHOS becomes a bridge to a higher frequency, magnifying our shared light.",
  },
  is: {
    header: "Þegar ljós sameinast verður það óstöðvandi",
    body: "Þegar ljós ferðast ósamstillt dreifist það. Þegar ljós ferðast í einingu verður það að leysigeisla — skýru, beinu og kraftmiklu ljósi. Við erum eins. Þegar við stöndum saman margfaldast áhrifin. Tónlist er tær orkuberi — ósýnileg en fær um að ferðast með hjarta og huga á hraða hugsunar. Þennan dag verður tónlist PHOS brú til hærri tíðni sem magnar ljós okkar.",
  },
};

export default function WhyMusicSection({ language }) {
  const t = content[language];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
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
