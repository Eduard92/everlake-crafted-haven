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

  const perks = [
    t("upgrade.perk1"),
    t("upgrade.perk2"),
    t("upgrade.perk3"),
    t("upgrade.perk4"),
    t("upgrade.perk5"),
    t("upgrade.perk6"),
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="border-none p-0 max-w-lg overflow-hidden"
        style={{ backgroundColor: "hsl(200,10%,10%)" }}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 text-white/40 hover:text-white/80 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="px-8 py-10 text-center">
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
              className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,70%)" }}
            >
              {t("upgrade.subtitle")}
            </p>
          </motion.div>

          {/* Price */}
          <div className="mb-6">
            <span
              className="text-4xl font-light"
              style={{ fontFamily: "'Playfair Display', serif", color: "hsl(38,60%,55%)" }}
            >
              $50
            </span>
            <span
              className="text-sm ml-1"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,60%)" }}
            >
              USD
            </span>
          </div>

          {/* Perks */}
          <div className="text-left space-y-3 mb-8 max-w-xs mx-auto">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "hsl(38,60%,55%,0.15)" }}
                >
                  <Check size={12} style={{ color: "hsl(38,60%,55%)" }} />
                </div>
                <span
                  className="text-sm leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,80%)" }}
                >
                  {perk}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://stay.everlakegeorgia.com/reservation"
            target="_blank"
            rel="noopener noreferrer"
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
