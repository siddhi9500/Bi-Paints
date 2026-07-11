import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CoatingExpertiseSection from "@/components/sections/CoatingExpertiseSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import BusinessAreasSection from "@/components/sections/BusinessAreasSection";
import ServiceHighlightsSection from "@/components/sections/ServiceHighlightsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsSection from "@/components/sections/NewsSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
// import TrustedProjectsSection from "@/components/sections/TrustedProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <BusinessAreasSection />
      <ProductsSection />
      <CoatingExpertiseSection />
      <ServiceHighlightsSection />
      <TestimonialsSection />
      <NewsSection />
      {/* <TrustedProjectsSection /> */}
      {/* <SolutionsSection />
      <GlobalFootprintSection /> */}
      <ClientLogosSection />
    </>
  );
}
