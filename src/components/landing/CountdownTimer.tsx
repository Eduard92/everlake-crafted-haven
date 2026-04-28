import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const TARGET_DATE = new Date("2026-04-28T11:00:00Z").getTime();

function formatTargetIn(tz: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(TARGET_DATE);
}

const CountdownTimer = () => {
  const { t, lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: diff === 0,
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1_000);
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
    { value: timeLeft.seconds, label: t("countdown.seconds") },
  ];

  return (
    <div className="flex flex-col items-center mt-10 md:mt-12 px-2">
      <p className="font-body text-[11px] md:text-sm tracking-[0.15em] uppercase text-everlake-gold/80 mb-4 text-center">
        {t("countdown.launches")} {formatTargetIn("America/New_York", lang === "es" ? "es-ES" : "en-US")}
      </p>
      <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-6 w-full max-w-[18rem] sm:max-w-none mx-auto">
        {units.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-1 sm:flex-none flex-col items-center justify-center aspect-square sm:aspect-auto sm:w-20 sm:h-20 md:w-24 md:h-24 min-w-0 border border-everlake-gold/30 rounded-sm bg-everlake-warm-black/50"
          >
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-everlake-gold leading-none">
              {String(value).padStart(2, "0")}
            </span>
            <span className="font-body text-[9px] sm:text-[10px] md:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-everlake-ivory/60 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
