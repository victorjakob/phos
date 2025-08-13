import AnimatedSection from "./globals/AnimatedSection";
import Button from "./globals/Button";

const content = {
  en: {
    header: "From Iceland, to the World",
    body: "PHOS is in motion — a call to artists, leaders, and visionaries to unite. If this speaks to your heart, you are already part of the movement.",
    waysToJoin: {
      tuneIn: "Tune In — Join the global audience on August 12, 2026.",
      collaborate:
        "Collaborate — Artists, leaders, and changemakers: bring your voice, your light.",
      support: "Support — Help us build the stage for this moment in history.",
    },
    cta: "I'm In → Email sign-up form.",
  },
  is: {
    header: "Frá Íslandi til heimsins",
    body: "PHOS er á ferð — ákall til listamanna, leiðtoga og framtíðarsýnismanna um að sameinast. Ef þetta talar til hjarta þíns, ertu þegar hluti af hreyfingunni.",
    waysToJoin: {
      tuneIn:
        "Stilltu þig inn — Vertu þátttakandi í alþjóðlegum áhorfendahópnum 12. ágúst 2026.",
      collaborate:
        "Samstarf — Listafólk, leiðtogar og umbreytendur: deilið rödd ykkar og ljósi.",
      support:
        "Stuðningur — Hjálpaðu okkur að reisa svið þessa augnabliks í sögunni.",
    },
    cta: "Ég er með → Skráningareyðublað.",
  },
};

export default function HowToJoinSection({ language }) {
  const t = content[language];

  const joinItems = [
    {
      title: "Tune In",
      desc: t.waysToJoin.tuneIn,
    },
    {
      title: "Collaborate",
      desc: t.waysToJoin.collaborate,
    },
    {
      title: "Support",
      desc: t.waysToJoin.support,
    },
  ];

  return (
    <AnimatedSection id="join" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-elegant mb-8 text-[#F5F7FA]">
          {t.header}
        </h2>
        <p className="text-lg md:text-xl font-body text-[#B0B6C4] mb-12 max-w-3xl mx-auto">
          {t.body}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {joinItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0B0F1A]/80 to-[#1a1f2e]/80 border border-[#F5C542]/20"
            >
              <h3 className="text-xl font-caption mb-3 text-[#F5F7FA]">
                {item.title}
              </h3>
              <p className="text-[#B0B6C4] font-body">{item.desc}</p>
            </div>
          ))}
        </div>
        <Button>{t.cta}</Button>
      </div>
    </AnimatedSection>
  );
}
