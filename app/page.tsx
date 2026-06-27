import HeroSection from "@/components/sections/HeroSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import BusinessAreasSection from "@/components/sections/BusinessAreasSection";
import ServiceHighlightsSection from "@/components/sections/ServiceHighlightsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import NewsSection from "@/components/sections/NewsSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import TrustedProjectsSection from "@/components/sections/TrustedProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessAreasSection />
      <TrustedProjectsSection />
      <ServiceHighlightsSection />
      <ProductsSection />
      <SolutionsSection />
      <GlobalFootprintSection />
      <NewsSection />
      <ClientLogosSection />
    </>
  );
}
