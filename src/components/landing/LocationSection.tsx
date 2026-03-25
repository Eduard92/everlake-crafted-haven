import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  const routes = [
    { time: "50 minutes", from: "Atlanta, GA" },
    { time: "3.5 hours", from: "Savannah, GA" },
    { time: "3 hours", from: "Chattanooga, TN" },
  ];

  return (
    <section className="bg-background py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106258.4!2d-83.9!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45d0deceeb871%3A0x3f0c8b7b8d2f3e3!2sCovington%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-[350px] md:h-[450px] border-0 grayscale contrast-[1.1] opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Everlake location map"
            />
            <div className="absolute inset-0 pointer-events-none border border-everlake-sand/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4">{t("loc.badge")}</p>
          <h2 className="text-editorial text-3xl md:text-4xl text-foreground leading-[1.1] mb-6">
            {t("loc.title")} <span className="text-editorial-italic">{t("loc.titleItalic")}</span>
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t("loc.subtitle") }} />

          <div className="space-y-4">
            {routes.map((route) => (
              <div key={route.from} className="flex items-center gap-4">
                <span className="text-editorial text-everlake-gold text-lg w-28 shrink-0">{route.time}</span>
                <span className="font-body text-sm text-muted-foreground">{t("loc.from")} {route.from}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
