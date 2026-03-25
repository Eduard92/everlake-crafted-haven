import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import HideawaysSection from "@/components/landing/HideawaysSection";
import ExperiencesSection from "@/components/landing/ExperiencesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import VipShopSection from "@/components/landing/VipShopSection";
import LocationSection from "@/components/landing/LocationSection";
import FaqSection from "@/components/landing/FaqSection";
import GallerySection from "@/components/landing/GallerySection";
import PropertyMapSection from "@/components/landing/PropertyMapSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <HideawaysSection />
      <HowItWorksSection />
      <ExperiencesSection />
      <PropertyMapSection />
      <VipShopSection />
      <LocationSection />
      <FaqSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
