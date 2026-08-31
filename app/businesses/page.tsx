import type { Metadata } from "next";
import BusinessesHeroBannerSection from "@/components/sections/BusinessesHeroBannerSection";
import BusinessesIntroSection from "@/components/sections/BusinessesIntroSection";
import BusinessesDirectoryGridSection from "@/components/sections/BusinessesDirectoryGridSection";

export const metadata: Metadata = {
  title: "Our Businesses | BI Group",
  description:
    "Explore BI Group's diverse portfolio of businesses — from paints and coatings to modular interiors, engineering, agriculture, homeopathy and more.",
};

export default function BusinessesPage() {
  return (
    <>
      <BusinessesHeroBannerSection />
      <BusinessesIntroSection />
      <BusinessesDirectoryGridSection />
    </>
  );
}
