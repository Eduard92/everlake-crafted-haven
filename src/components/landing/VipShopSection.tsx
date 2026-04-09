import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { useLanguage } from "@/i18n/LanguageContext";
import ShopifyProducts from "@/components/ShopifyProducts";
import VipUpgradeDialog from "./VipUpgradeDialog";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/14Q6D_RgAJY8eOuc_GhIFSISO5w_MVDfyc-JecfvwTSo/export?format=csv&gid=1903356590";

const VipShopSection = () => {
  const { t, lang } = useLanguage();
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [vipEmails, setVipEmails] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showUpgrade, setShowUpgrade] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("everlake-vip-email");
    const purchased = localStorage.getItem("everlake-vip-purchased");
    if (savedEmail || purchased) {
      setUnlocked(true);
    }
  }, []);

  // Fetch VIP list
  useEffect(() => {
    if (unlocked) return;
    fetch(SHEET_CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split("\n").slice(1);
        const emails = new Set(
          lines
            .map((l) => {
              const cols = l.split(",");
              return cols[3]?.trim().toLowerCase();
            })
            .filter((e) => e && e.includes("@"))
        );
        setVipEmails(emails);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [unlocked]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      const trimmed = email.trim().toLowerCase();
      if (!trimmed) return;
      if (vipEmails.has(trimmed)) {
        localStorage.setItem("everlake-vip-email", trimmed);
        // Track VIP email verified
        const fbq = (window as any).fbq;
        if (typeof fbq === 'function') {
          fbq('track', 'CompleteRegistration', { content_name: 'VIP Email Verified' });
        }
        setUnlocked(true);
      } else {
        // Track non-VIP email attempt
        const fbq = (window as any).fbq;
        if (typeof fbq === 'function') {
          fbq('track', 'Lead', { content_name: 'Non-VIP Email Attempt' });
        }
        setShowUpgrade(true);
      }
    },
    [email, vipEmails]
  );

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

        {unlocked ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6"
          >
            <ShopifyProducts
              storeUrl="0vis13-xd.myshopify.com"
              storefrontToken="10408f0a1519159f72acd7ed028aaac0"
              lang={lang}
              subtitle=""
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-md mx-auto"
          >
            <p
              className="text-center text-sm mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,70%)" }}
            >
              {t("shopgate.prompt")}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder={t("gate.placeholder")}
                disabled={loading}
                className="flex-1 rounded-none border px-4 py-3 text-sm tracking-wide outline-none transition-colors focus:border-[hsl(38,60%,55%)]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: "transparent",
                  borderColor: "hsl(200,8%,25%)",
                  color: "hsl(40,33%,96%)",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="py-3 px-6 text-xs font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-90 disabled:opacity-50 shrink-0"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: "hsl(38,60%,55%)",
                  color: "hsl(200,10%,8%)",
                }}
              >
                {t("shopgate.unlock")}
              </button>
            </form>
            {error && (
              <p
                className="mt-3 text-center text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(0,60%,60%)" }}
              >
                {error}
              </p>
            )}
          </motion.div>
        )}
      </div>

      <VipUpgradeDialog open={showUpgrade} onOpenChange={setShowUpgrade} />
    </section>
  );
};

export default VipShopSection;
