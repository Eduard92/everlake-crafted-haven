import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lake.jpg";
import everlakeLogo from "@/assets/everlake-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image as fallback / poster */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aerial view of Everlake's private lake surrounded by autumn forest"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-everlake-warm-black/40" />
      </div>

      {/* Brand Video (Vimeo) */}
      <div className="absolute inset-0 z-[1]" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
        <iframe
          src="https://player.vimeo.com/video/1177005098?background=1&autoplay=1&muted=1&loop=1&autopause=0"
          className="h-full w-full object-cover pointer-events-none"
          style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '100%', transform: 'translate(-50%, -50%)', WebkitTransform: 'translate(-50%, -50%)' }}
          allow="autoplay; fullscreen"
          title="Everlake Brand Video"
        />
        <div className="absolute inset-0 bg-everlake-warm-black/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={everlakeLogo} alt="Everlake" className="h-8 md:h-10 w-auto brightness-0 invert" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 md:gap-8"
        >
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="font-body text-xs tracking-[0.1em] uppercase text-everlake-ivory/80 hover:text-everlake-gold transition-colors duration-300 border border-everlake-ivory/30 hover:border-everlake-gold rounded-sm px-3 py-1.5"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-[0.1em] text-everlake-ivory/80 uppercase">
            <a href="#hideaways" className="hover:text-everlake-gold transition-colors duration-300">{t("nav.hideaways")}</a>
            <a href="#experiences" className="hover:text-everlake-gold transition-colors duration-300">{t("nav.experiences")}</a>
            <a href="#vip-shop" className="hover:text-everlake-gold transition-colors duration-300">{t("nav.vipShop")}</a>
            <a href="#faq" className="hover:text-everlake-gold transition-colors duration-300">{t("nav.faq")}</a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end h-[calc(100%-80px)] pb-20 md:pb-28 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-everlake-gold mb-4">
            {t("hero.badge")}
          </p>
          <h1 className="text-editorial text-everlake-ivory text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            {t("hero.title1")}<br />
            <span className="text-editorial-italic">{t("hero.title2")}</span><br />
            {t("hero.title3")}
          </h1>
          <p className="font-body text-everlake-ivory/70 text-base md:text-lg max-w-md leading-relaxed mb-2">
            {t("hero.subtitle1")}
          </p>
          <p className="font-body text-everlake-ivory/70 text-base md:text-lg max-w-md leading-relaxed mb-8 font-medium">
            {t("hero.subtitle2")}
          </p>
          <a
            href="#vip-shop"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("vip-shop")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-block font-body text-xs md:text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-sm font-semibold text-white bg-gradient-to-r from-orange-700 via-orange-500 to-amber-600 bg-[length:200%_100%] animate-shimmer shadow-xl shadow-orange-600/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300"
          >
            {t("hero.cta")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-everlake-ivory/50 hover:text-everlake-gold transition-colors"
          >
            <span className="font-body text-[10px] tracking-[0.2em] uppercase">{t("hero.scroll")}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-8 bg-current"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
