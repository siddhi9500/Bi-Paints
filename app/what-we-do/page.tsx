import type { Metadata } from "next";
import WhatWeDoHeroSection from "@/components/sections/WhatWeDoHeroSection";
import WhatWeDoIntroSection from "@/components/sections/WhatWeDoIntroSection";
import WhatWeDoTabbedSolutionsSection from "@/components/sections/WhatWeDoTabbedSolutionsSection";
import WhatWeDoColourJourneySection from "@/components/sections/WhatWeDoColourJourneySection";
import WhatWeDoInnovationSection from "@/components/sections/WhatWeDoInnovationSection";
import WhatWeDoPeopleSection from "@/components/sections/WhatWeDoPeopleSection";
import WhatWeDoPresenceSection from "@/components/sections/WhatWeDoPresenceSection";
import WhatWeDoDiscoverSection from "@/components/sections/WhatWeDoDiscoverSection";
import WhatWeDoFinalCtaSection from "@/components/sections/WhatWeDoFinalCtaSection";

export const metadata: Metadata = {
  title: "What We Do | BI Group",
  description:
    "BI Group brings together paints, coatings, and surface solutions that transform and protect homes, businesses and infrastructure.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHeroSection />
      <WhatWeDoIntroSection />
      <WhatWeDoTabbedSolutionsSection />
      <WhatWeDoColourJourneySection />
      <WhatWeDoInnovationSection />
      <WhatWeDoPeopleSection />
      <WhatWeDoPresenceSection />
      <WhatWeDoDiscoverSection />
      <WhatWeDoFinalCtaSection />
    </>
  );
}
