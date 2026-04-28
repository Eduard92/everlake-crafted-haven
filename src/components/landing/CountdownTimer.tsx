import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const TARGET_DATE = new Date("2026-04-29T11:00:00Z").getTime();

const TIMEZONES = [
  { label: "Eastern (ET)", tz: "America/New_York" },
  { label: "Central (CT)", tz: "America/Chicago" },
  { label: "Mountain (MT)", tz: "America/Denver" },
  { label: "Pacific (PT)", tz: "America/Los_Angeles" },
  { label: "UTC", tz: "UTC" },
  { label: "London (BST)", tz: "Europe/London" },
  { label: "Madrid (CEST)", tz: "Europe/Madrid" },
  { label: "Mexico City", tz: "America/Mexico_City" },
  { label: "Bogotá", tz: "America/Bogota" },
  { label: "Tokyo (JST)", tz: "Asia/Tokyo" },
  { label: "Sydney (AEST)", tz: "Australia/Sydney" },
];

function formatTargetIn(tz: string) {
  return new Intl.DateTimeFormat("en-US", {
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
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [tz, setTz] = useState<string>("America/New_York");

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
    <div className="flex flex-col items-center mt-8">
      <p className="font-body text-xs md:text-sm tracking-[0.15em] uppercase text-everlake-gold/80 mb-4 text-center">
        Launches {formatTargetIn("America/New_York")}
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-6">
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
      <div className="mt-5 flex flex-col items-center gap-1.5">
        <label className="font-body text-[10px] tracking-[0.2em] uppercase text-everlake-ivory/40">
          Preview in timezone
        </label>
        <select
          value={tz}
          onChange={(e) => setTz(e.target.value)}
          className="bg-everlake-warm-black/60 border border-everlake-gold/30 text-everlake-ivory/80 font-body text-xs px-3 py-1.5 rounded-sm focus:outline-none focus:border-everlake-gold"
        >
          {TIMEZONES.map((z) => (
            <option key={z.tz} value={z.tz} className="bg-everlake-warm-black">
              {z.label}
            </option>
          ))}
        </select>
        <p className="font-body text-[11px] text-everlake-ivory/50 mt-1">
          {formatTargetIn(tz)}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
