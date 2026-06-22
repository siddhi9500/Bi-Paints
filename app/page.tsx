import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import GlobalFootprintSection from "@/components/sections/GlobalFootprintSection";
import ServiceHighlightsSection from "@/components/sections/ServiceHighlightsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import NewsSection from "@/components/sections/NewsSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServiceHighlightsSection />
      <ProductsSection />
      <SolutionsSection />
      <GlobalFootprintSection />
      <NewsSection />
      <ClientLogosSection />
    </>
  );
}
