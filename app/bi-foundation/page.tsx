import type { Metadata } from "next";
import BiFoundationHeroSection from "@/components/sections/BiFoundationHeroSection";
import BiFoundationPurposeSection from "@/components/sections/BiFoundationPurposeSection";
import BiFoundationFocusSection from "@/components/sections/BiFoundationFocusSection";
import BiFoundationFeaturedSection from "@/components/sections/BiFoundationFeaturedSection";
import BiFoundationClosingCtaSection from "@/components/sections/BiFoundationClosingCtaSection";

export const metadata: Metadata = {
  title: "BI Foundation | BI Group",
  description:
    "BI Foundation is the CSR wing of BI Group, working towards education, environment, community and well-being initiatives across India.",
};

export default function BiFoundationPage() {
  return (
    <>
      <BiFoundationHeroSection />
      <BiFoundationPurposeSection />
      <BiFoundationFocusSection />
      <BiFoundationFeaturedSection />
      <BiFoundationClosingCtaSection />
    </>
  );
}
