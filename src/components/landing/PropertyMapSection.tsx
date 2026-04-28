import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const PropertyMapSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-dark py-24 md:py-36 overflow-hidden">
      <div className="px-8 md:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-3 md:mb-4">{t("map.badge")}</p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.1] md:leading-[1.05] mb-5 md:mb-4">
            {t("map.title1")}<br />
            <span className="text-editorial-italic">{t("map.title2")}</span>
          </h2>
          <p className="font-body text-everlake-ivory/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            {t("map.phase1")}
          </p>
          <div className="inline-flex flex-col items-center gap-1 border border-everlake-gold/30 rounded-sm px-6 py-3">
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-everlake-gold">{t("map.phase2Badge")}</span>
            <span className="font-body text-sm md:text-base text-everlake-ivory/90 tracking-wide">{t("map.phase2")}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-16 max-w-6xl mx-auto"
      >
        <div className="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/1130962377?background=1&autoplay=1&muted=1&loop=1&autopause=0" allow="autoplay; fullscreen" loading="lazy" title="Everlake Property Map" />
        </div>
      </motion.div>
    </section>
  );
};

export default PropertyMapSection;
