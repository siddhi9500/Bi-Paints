import HeroCarouselSection from "@/components/sections/HeroCarouselSection";
import VerticalsSection from "@/components/sections/VerticalsSection";
import ProductApplicationSection from "@/components/sections/ProductApplicationSection";
import CareerBannerSection from "@/components/sections/CareerBannerSection";
import KitchenShowcaseSection from "@/components/sections/KitchenShowcaseSection";
import SustainabilityBannerSection from "@/components/sections/SustainabilityBannerSection";
import TrustedPartnersSection from "@/components/sections/TrustedPartnersSection";

export default function Home() {
  return (
    <>
      <HeroCarouselSection />
      <VerticalsSection />
      <ProductApplicationSection />
      <CareerBannerSection />
      <KitchenShowcaseSection />
      <SustainabilityBannerSection />
      <TrustedPartnersSection />
    </>
  );
}
