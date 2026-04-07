import { useState, useEffect } from "react";
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
import VipGate from "@/components/landing/VipGate";

const Index = () => {
  const [vipUnlocked, setVipUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("everlake-vip-email");
    if (saved) setVipUnlocked(true);
  }, []);

  if (!vipUnlocked) {
    return <VipGate onUnlock={() => setVipUnlocked(true)} />;
  }

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
