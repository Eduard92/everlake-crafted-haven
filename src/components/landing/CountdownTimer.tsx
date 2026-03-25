import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const TARGET_DATE = new Date("2026-04-27T00:00:00").getTime();

const CountdownTimer = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      expired: diff === 0,
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.expired) {
    return (
      <p className="font-body text-sm tracking-[0.15em] uppercase text-everlake-gold mt-8">
        {t("countdown.expired")}
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: t("countdown.days") },
    { value: timeLeft.hours, label: t("countdown.hours") },
    { value: timeLeft.minutes, label: t("countdown.minutes") },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 mt-8">
      {units.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 border border-everlake-gold/30 rounded-sm bg-everlake-warm-black/50"
        >
          <span className="font-display text-2xl md:text-3xl text-everlake-gold leading-none">
            {String(value).padStart(2, "0")}
          </span>
          <span className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-everlake-ivory/50 mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
