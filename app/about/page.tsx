import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutStorySection from "@/components/sections/AboutStorySection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import FactsSection from "@/components/sections/FactsSection";
import TeamSection from "@/components/sections/TeamSection";
import VerticalsRecapSection from "@/components/sections/VerticalsRecapSection";

export const metadata = {
  title: "About Us — BI Group of Companies",
  description:
    "BI Group is a diversified business organization engaged in paint manufacturing, homeopathy products, and industrial solutions across India.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <GlobalFootprintSection />
      <FactsSection />
      <TeamSection />
      <VerticalsRecapSection />
    </>
  );
}
