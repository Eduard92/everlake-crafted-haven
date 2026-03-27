import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { useLanguage } from "@/i18n/LanguageContext";
import ShopifyProducts from "@/components/ShopifyProducts";

const VipShopSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="vip-shop" className="section-dark pt-8 md:pt-12 pb-24 md:pb-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">{t("vip.badge")}</p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.05] mb-6">
            {t("vip.title1")}<br />
            <span className="text-editorial-italic">{t("vip.title2")}<br />{t("vip.title3")}</span>
          </h2>
          <p className="font-body text-sm text-everlake-ivory/50 max-w-lg mx-auto leading-relaxed">{t("vip.subtitle")}</p>
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <ShopifyProducts
            storeUrl="0vis13-xd.myshopify.com"
            storefrontToken="10408f0a1519159f72acd7ed028aaac0"
            lang={lang}
            subtitle=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VipShopSection;
