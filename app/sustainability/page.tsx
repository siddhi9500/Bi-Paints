import type { Metadata } from "next";
import SustainabilityHeroSection from "@/components/sections/SustainabilityHeroSection";
import SustainabilityPillarsSection from "@/components/sections/SustainabilityPillarsSection";
import SustainabilityCommitmentSection from "@/components/sections/SustainabilityCommitmentSection";
import SustainabilityZedCertificationSection from "@/components/sections/SustainabilityZedCertificationSection";

export const metadata: Metadata = {
  title: "Sustainability | BI Group",
  description:
    "BI Group's commitment to people, planet and product responsibility — from painter training academies to low-VOC coatings and our MSME Sustainable (ZED) Certification.",
};

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityHeroSection />
      <SustainabilityPillarsSection />
      <SustainabilityCommitmentSection />
      <SustainabilityZedCertificationSection />
    </>
  );
}
