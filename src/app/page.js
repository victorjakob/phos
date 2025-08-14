import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import WhatIsPhosSection from "@/components/sections/WhatIsPhosSection";
import WhyMusicSection from "@/components/sections/WhyMusicSection";
import TheMomentSection from "@/components/sections/TheMomentSection";
import HowToJoinSection from "@/components/sections/HowToJoinSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main
      className="min-h-screen text-[#F5F7FA] relative"
      role="main"
      aria-label="PHOS Global Peace Movement"
    >
      {/* Hero Section - Main landing area */}
      <section aria-labelledby="hero-heading">
        <HeroSection />
      </section>

      {/* Vision Section - Mission statement */}
      <section aria-labelledby="vision-heading">
        <VisionSection />
      </section>

      {/* What is PHOS Section - Information about the movement */}
      <section aria-labelledby="what-is-phos-heading">
        <WhatIsPhosSection />
      </section>

      {/* Why Music Section - Explanation of music's role */}
      <section aria-labelledby="why-music-heading">
        <WhyMusicSection />
      </section>

      {/* The Moment Section - Countdown and timing */}
      <section aria-labelledby="the-moment-heading">
        <TheMomentSection />
      </section>

      {/* How to Join Section - Call to action */}
      <section aria-labelledby="how-to-join-heading">
        <HowToJoinSection />
      </section>

      {/* Closing Section - Final message */}
      <section aria-labelledby="closing-heading">
        <ClosingSection />
      </section>

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#F5C542] text-[#0B0F1A] px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </main>
  );
}
