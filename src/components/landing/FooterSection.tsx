import { useLanguage } from "@/i18n/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-forest py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <h2 className="text-editorial text-everlake-ivory text-2xl md:text-3xl tracking-[0.15em] uppercase mb-3">
              Everlake
            </h2>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-everlake-ivory/40">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a href="mailto:guestservices@everlakega.com" className="font-body text-sm text-everlake-ivory/60 hover:text-everlake-gold transition-colors">
              guestservices@everlakega.com
            </a>
            <a href="https://everlakega.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-everlake-ivory/60 hover:text-everlake-gold transition-colors">
              everlakega.com
            </a>
          </div>
        </div>

        <div className="border-t border-everlake-ivory/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body text-xs text-everlake-ivory/30">
            © {new Date().getFullYear()} Everlake. {t("footer.rights")}
          </p>
          <p className="font-body text-xs text-everlake-ivory/30">
            {t("footer.location")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
