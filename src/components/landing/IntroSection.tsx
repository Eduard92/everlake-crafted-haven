import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();

  // Parse italic markers from translation
  const renderTitle = () => {
    const raw = t("intro.title");
    const parts = raw.split(/<italic>(.*?)<\/italic>/);
    return parts.map((part, i) =>
      i % 2 === 1 ? <span key={i} className="text-editorial-italic">{part}</span> : part
    );
  };

  return (
    <section id="intro" className="section-cream py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="divider-organic mx-auto mb-6 md:mb-8" />
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-5 md:mb-8">
            {t("intro.badge")}
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-[1.1] text-everlake-charcoal mb-7 md:mb-8">
            {renderTitle()}
          </h2>
          <p className="font-body text-everlake-charcoal/60 text-[15px] md:text-lg max-w-2xl mx-auto leading-[1.65] md:leading-relaxed">
            {t("intro.subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
