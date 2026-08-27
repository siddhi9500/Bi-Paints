import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutOverviewSection from "@/components/sections/AboutOverviewSection";
import ChairmanMessageSection from "@/components/sections/ChairmanMessageSection";
import AboutJourneySection from "@/components/sections/AboutJourneySection";
import VisionMissionValuesSection from "@/components/sections/VisionMissionValuesSection";
import AboutSustainabilitySection from "@/components/sections/AboutSustainabilitySection";

export const metadata: Metadata = {
  title: "About BI Group – Engineering Solutions Built To Last",
  description:
    "Founded in 2012, BI Group is a diversified Indian industrial conglomerate spanning paints, home solutions, agriculture, homeopathy, electronics, and engineering.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutOverviewSection />
      <ChairmanMessageSection />
      <AboutJourneySection />
      <VisionMissionValuesSection />
      <AboutSustainabilitySection />
    </>
  );
}
