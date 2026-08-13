import type { Metadata } from "next";
import WhereWeAreHeroSection from "@/components/sections/WhereWeAreHeroSection";
import WhereWeAreGlobalFootprintSection from "@/components/sections/WhereWeAreGlobalFootprintSection";
import WhereWeAreIndiaPresenceSection from "@/components/sections/WhereWeAreIndiaPresenceSection";
import WhereWeAreManufacturingSection from "@/components/sections/WhereWeAreManufacturingSection";
import WhatWeDoFinalCtaSection from "@/components/sections/WhatWeDoFinalCtaSection";

export const metadata: Metadata = {
  title: "Where We Are | BI Group",
  description:
    "Explore BI Group's manufacturing footprint, domestic distribution network and international export markets.",
};

export default function WhereWeArePage() {
  return (
    <>
      <WhereWeAreHeroSection />
      <WhereWeAreGlobalFootprintSection />
      <WhereWeAreIndiaPresenceSection />
      <WhereWeAreManufacturingSection />
      <WhatWeDoFinalCtaSection />
    </>
  );
}
