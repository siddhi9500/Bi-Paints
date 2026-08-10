import type { Metadata } from "next";
import JourneyHeroSection from "@/components/sections/JourneyHeroSection";
import JourneyTimelineSection from "@/components/sections/JourneyTimelineSection";
import JourneyVisionSection from "@/components/sections/JourneyVisionSection";

export const metadata: Metadata = {
  title: "Our Journey – BI Group",
  description:
    "From a ₹100 paint shop in Surat to one of India's most ambitious paint manufacturing companies — the BI Group story.",
};

export default function JourneyPage() {
  return (
    <>
      <JourneyHeroSection />
      <JourneyTimelineSection />
      <JourneyVisionSection />
    </>
  );
}
