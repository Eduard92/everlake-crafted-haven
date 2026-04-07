import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import HideawaysSection from "@/components/landing/HideawaysSection";
import ExperiencesSection from "@/components/landing/ExperiencesSection";
import VipShopSection from "@/components/landing/VipShopSection";
import LocationSection from "@/components/landing/LocationSection";
import FaqSection from "@/components/landing/FaqSection";
import GallerySection from "@/components/landing/GallerySection";
import PropertyMapSection from "@/components/landing/PropertyMapSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("vip") === "unlocked") {
      localStorage.setItem("everlake-vip-purchased", "true");
      // Clean URL
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <HideawaysSection />
      <VipShopSection />
      <ExperiencesSection />
      <PropertyMapSection />
      <LocationSection />
      <FaqSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
