import HeroSection from "@/app/main/components/HeroSection";

export default function Home() {
  return (
    <main
      className="min-h-screen text-[#F5F7FA] relative cursor-pointer"
      role="main"
      aria-label="PHOS Global Peace Movement"
    >
      {/* Hero Section - Main landing area */}
      <section aria-labelledby="hero-heading" className="relative z-10">
        <HeroSection />
      </section>
    </main>
  );
}
