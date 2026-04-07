import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

interface VipGateProps {
  onUnlock: () => void;
}

const VipGate = ({ onUnlock }: VipGateProps) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [vipEmails, setVipEmails] = useState<Set<string>>(new Set());
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/vip-list.csv")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split("\n").slice(1); // skip header
        const emails = new Set(lines.map((l) => l.trim().toLowerCase()).filter(Boolean));
        setVipEmails(emails);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      const trimmed = email.trim().toLowerCase();
      if (!trimmed) return;
      if (vipEmails.has(trimmed)) {
        localStorage.setItem("everlake-vip-email", trimmed);
        onUnlock();
      } else {
        setError(t("gate.error"));
      }
    },
    [email, vipEmails, onUnlock, t]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(200,10%,8%)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-4 flex w-full max-w-md flex-col items-center text-center"
      >
        {/* Logo / Brand */}
        <h1
          className="mb-2 text-4xl font-light tracking-[0.25em] md:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(40,33%,96%)" }}
        >
          EVERLAKE
        </h1>
        <div
          className="mb-10 h-px w-16"
          style={{ backgroundColor: "hsl(38,60%,55%)" }}
        />

        {/* Heading */}
        <p
          className="mb-2 text-xs font-medium uppercase tracking-[0.3em]"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(38,60%,55%)" }}
        >
          {t("gate.badge")}
        </p>
        <h2
          className="mb-8 text-lg font-light leading-relaxed md:text-xl"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(40,20%,80%)" }}
        >
          {t("gate.heading")}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder={t("gate.placeholder")}
            className="w-full rounded-none border px-4 py-3 text-sm tracking-wide outline-none transition-colors focus:border-[hsl(38,60%,55%)]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "transparent",
              borderColor: "hsl(200,8%,25%)",
              color: "hsl(40,33%,96%)",
            }}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-xs font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "hsl(38,60%,55%)",
              color: "hsl(200,10%,8%)",
            }}
          >
            {t("gate.button")}
          </button>
        </form>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "hsl(0,60%,60%)" }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default VipGate;
