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
import QAViewportToggle from "@/components/QAViewportToggle";

const Index = () => {
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
      <QAViewportToggle />
    </div>
  );
};

export default Index;
