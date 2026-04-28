import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

interface SectionCtaProps {
  variant?: "light" | "dark";
  className?: string;
}

const SectionCta = ({ variant = "light", className = "" }: SectionCtaProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`flex justify-center mt-12 md:mt-16 ${className}`}
    >
      <a
        href="#vip-shop"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("vip-shop")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group relative inline-block font-body text-xs md:text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm font-semibold text-white bg-gradient-to-r from-orange-700 via-orange-500 to-amber-600 shadow-xl shadow-orange-600/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300"
      >
        {t("hero.cta")}
      </a>
    </motion.div>
  );
};

export default SectionCta;
