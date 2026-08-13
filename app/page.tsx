import HeroCarouselSection from "@/components/sections/HeroCarouselSection";
import VerticalsSection from "@/components/sections/VerticalsSection";
import BusinessPortfolioSection from "@/components/sections/BusinessPortfolioSection";
import CareerBannerSection from "@/components/sections/CareerBannerSection";
import KitchenShowcaseSection from "@/components/sections/KitchenShowcaseSection";
import SustainabilityBannerSection from "@/components/sections/SustainabilityBannerSection";
import TrustedPartnersSection from "@/components/sections/TrustedPartnersSection";

export default function Home() {
  return (
    <>
      <HeroCarouselSection />
      <VerticalsSection />
      <BusinessPortfolioSection />
      <CareerBannerSection />
      <KitchenShowcaseSection />
      <SustainabilityBannerSection />
      <TrustedPartnersSection />
    </>
  );
}
