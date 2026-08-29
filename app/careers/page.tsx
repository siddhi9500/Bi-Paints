import type { Metadata } from "next";
import CareerHeroSection from "@/components/sections/CareerHeroSection";
import CareerLifeAtBiSection from "@/components/sections/CareerLifeAtBiSection";
import CareerOpportunitiesSection from "@/components/sections/CareerOpportunitiesSection";
import CareerWhyBiGroupSection from "@/components/sections/CareerWhyBiGroupSection";

export const metadata: Metadata = {
  title: "Careers | BI Group",
  description:
    "Join BI Group — explore open roles across paints & coatings, engineering services and group operations, and see what life at BI Group is like.",
};

export default function CareersPage() {
  return (
    <>
      <CareerHeroSection />
      <CareerLifeAtBiSection />
      <CareerOpportunitiesSection />
      <CareerWhyBiGroupSection />
    </>
  );
}
