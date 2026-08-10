import type { Metadata } from "next";
import WhatWeDoHeroSection from "@/components/sections/WhatWeDoHeroSection";
import WhatWeDoIntroSection from "@/components/sections/WhatWeDoIntroSection";
import WhatWeDoVerticalPanelsSection from "@/components/sections/WhatWeDoVerticalPanelsSection";
import WhatWeDoImpactGridSection from "@/components/sections/WhatWeDoImpactGridSection";
import WhatWeDoTabbedSolutionsSection from "@/components/sections/WhatWeDoTabbedSolutionsSection";
import WhatWeDoColourJourneySection from "@/components/sections/WhatWeDoColourJourneySection";
import WhatWeDoInnovationSection from "@/components/sections/WhatWeDoInnovationSection";
import WhatWeDoQualitySection from "@/components/sections/WhatWeDoQualitySection";
import WhatWeDoPeopleSection from "@/components/sections/WhatWeDoPeopleSection";
import WhatWeDoJourneyTimelineSection from "@/components/sections/WhatWeDoJourneyTimelineSection";
import WhatWeDoSustainabilitySection from "@/components/sections/WhatWeDoSustainabilitySection";
import WhatWeDoPresenceSection from "@/components/sections/WhatWeDoPresenceSection";
import WhatWeDoPartnershipsSection from "@/components/sections/WhatWeDoPartnershipsSection";
import WhatWeDoDiscoverSection from "@/components/sections/WhatWeDoDiscoverSection";
import WhatWeDoFinalCtaSection from "@/components/sections/WhatWeDoFinalCtaSection";

export const metadata: Metadata = {
  title: "What We Do | BI Group",
  description:
    "Explore BI Group's businesses, impact, innovation, quality standards, journey, sustainability commitments and nationwide presence.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHeroSection />
      <WhatWeDoIntroSection />
      <WhatWeDoVerticalPanelsSection />
      <WhatWeDoImpactGridSection />
      <WhatWeDoTabbedSolutionsSection />
      <WhatWeDoColourJourneySection />
      <WhatWeDoInnovationSection />
      <WhatWeDoQualitySection />
      <WhatWeDoPeopleSection />
      <WhatWeDoJourneyTimelineSection />
      <WhatWeDoSustainabilitySection />
      <WhatWeDoPresenceSection />
      <WhatWeDoPartnershipsSection />
      <WhatWeDoDiscoverSection />
      <WhatWeDoFinalCtaSection />
    </>
  );
}
