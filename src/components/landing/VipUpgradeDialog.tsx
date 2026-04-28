import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Check, Crown, X } from "lucide-react";

interface VipUpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VipUpgradeDialog = ({ open, onOpenChange }: VipUpgradeDialogProps) => {
  const { t } = useLanguage();

  const pathA = [t("upgrade.pathA1"), t("upgrade.pathA2"), t("upgrade.pathA3")];
  const pathB = [t("upgrade.pathB1"), t("upgrade.pathB2"), t("upgrade.pathB3")];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="border-none p-0 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "hsl(200,10%,10%)" }}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 text-white/40 hover:text-white/80 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="px-6 md:px-8 py-8 md:py-10 text-center">
          <DialogTitle className="sr-only">{t("upgrade.title")}</DialogTitle>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "hsl(38,60%,55%,0.15)" }}
            >
              <Crown size={28} style={{ color: "hsl(38,60%,55%)" }} />
            </div>

            <p
              className="text-xs font-medium uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(38,60%,55%)" }}
            >
              {t("upgrade.badge")}
            </p>

            <h2
              className="text-2xl md:text-3xl font-light mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "hsl(40,33%,96%)" }}
            >
              {t("upgrade.title")}
            </h2>

            <p
              className="text-sm leading-relaxed mb-6 max-w-md mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,70%)" }}
            >
              {t("upgrade.subtitle")}
            </p>
          </motion.div>

          {/* Two Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
            {/* Path A — Pay $50 Now */}
            <div
              className="rounded-lg p-5 border"
              style={{
                borderColor: "hsl(38,60%,55%,0.3)",
                backgroundColor: "hsl(38,60%,55%,0.06)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(38,60%,55%)" }}
              >
                {t("upgrade.pathA")}
              </p>
              <div className="space-y-3">
                {pathA.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "hsl(38,60%,55%,0.2)" }}
                    >
                      <Check size={12} style={{ color: "hsl(38,60%,55%)" }} />
                    </div>
                    <span
                      className="text-sm leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,85%)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Path B — Wait & Do Nothing */}
            <div
              className="rounded-lg p-5 border"
              style={{
                borderColor: "hsl(0,0%,30%,0.3)",
                backgroundColor: "hsl(0,0%,100%,0.02)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(0,30%,60%)" }}
              >
                {t("upgrade.pathB")}
              </p>
              <div className="space-y-3">
                {pathB.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "hsl(0,30%,50%,0.15)" }}
                    >
                      <X size={12} style={{ color: "hsl(0,30%,55%)" }} />
                    </div>
                    <span
                      className="text-sm leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,10%,55%)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reframe */}
          <p
            className="text-sm font-medium mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(38,60%,55%)" }}
          >
            {t("upgrade.reframe")}
          </p>

          {/* CTA */}
          <a
            href="https://stay.everlakegeorgia.com/reservation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              const fbq = (window as any).fbq;
              if (typeof fbq === 'function') {
                fbq('trackCustom', 'InitiateVIPRegistration', { content_name: 'VIP Access Reserve CTA' });
              }
            }}
            className="block w-full py-3.5 text-xs font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-90 text-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "hsl(38,60%,55%)",
              color: "hsl(200,10%,8%)",
            }}
          >
            {t("upgrade.cta")}
          </a>

          <p
            className="mt-4 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,50%)" }}
          >
            {t("upgrade.footnote")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VipUpgradeDialog;
