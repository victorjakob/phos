import AnimatedSection from "./globals/AnimatedSection";

const content = {
  en: {
    header: "Light. Music. Unity.",
    iconBlocks: {
      concert:
        "A Global Concert for Peace: Artists across every continent, playing together in one great heartbeat.",
      alignment:
        "Alignment with the Cosmos: Timed with a solar eclipse — a symbol of harmony, stillness, and transformation.",
      light:
        "One Light, One Heartbeat: A shared frequency that bridges borders, faiths, and cultures.",
    },
  },
  is: {
    header: "Ljós. Tónlist. Samstaða.",
    iconBlocks: {
      concert:
        "Alþjóðlegir tónleikar fyrir frið: Listafólk um allan heim spilar saman í einu hjartslætti.",
      alignment:
        "Samstilling við alheiminn: Tímsett með sólmyrkva — tákn kyrrðar, jafnvægis og umbreytingar.",
      light:
        "Eitt ljós, einn hjartsláttur: Sameiginleg tíðni sem tengir saman lönd, trú og menningu.",
    },
  },
};

export default function WhatIsPhosSection({ language }) {
  const t = content[language];

  const iconItems = [
    {
      title: t.iconBlocks.concert,
      desc: t.iconBlocks.concert,
    },
    {
      title: t.iconBlocks.alignment,
      desc: t.iconBlocks.alignment,
    },
    {
      title: t.iconBlocks.light,
      desc: t.iconBlocks.light,
    },
  ];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10 bg-[#1a1f2e]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-elegant mb-12 text-center text-[#F5F7FA]">
          {t.header}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {iconItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0B0F1A]/80 to-[#1a1f2e]/80 border border-[#F5C542]/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5C542] to-[#F5F7FA] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-[#0B0F1A]">✨</span>
              </div>
              <h3 className="text-xl font-caption mb-3 text-[#F5F7FA]">
                {item.title}
              </h3>
              <p className="text-[#B0B6C4] font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
