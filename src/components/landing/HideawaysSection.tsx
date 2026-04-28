import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import cabinInterior from "@/assets/cabin-interior.webp";
import cabinExterior from "@/assets/cabin-exterior.webp";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackEvent } from "@/lib/analytics";

const HideawaysSection = () => {
  const { t } = useLanguage();
  const cabinIframeRef = useRef<HTMLIFrameElement | null>(null);
  const [overlayHidden, setOverlayHidden] = useState(false);

  // Cabin Tour Vimeo tracking: first play + 25/50/75/100% milestones via postMessage API.
  useEffect(() => {
    const iframe = cabinIframeRef.current;
    if (!iframe) return;
    let played = false;
    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();

    const post = (method: string) => {
      try {
        iframe.contentWindow?.postMessage(JSON.stringify({ method }), "*");
      } catch {}
    };

    const onReady = () => {
      post("addEventListener:play");
      post("addEventListener:timeupdate");
      post("addEventListener:ended");
    };

    const onMessage = (e: MessageEvent) => {
      if (!iframe.contentWindow || e.source !== iframe.contentWindow) return;
      let data: any = e.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); } catch { return; }
      }
      if (data?.event === "ready") onReady();
      if (data?.event === "play" && !played) {
        played = true;
        setOverlayHidden(true);
        trackEvent("video_play", { video: "cabin_tour", video_id: "1143138281" });
      }
      if (data?.event === "timeupdate" && data?.data) {
        const percent = Math.floor((data.data.percent || 0) * 100);
        for (const m of milestones) {
          if (percent >= m && !fired.has(m)) {
            fired.add(m);
            trackEvent("video_progress", {
              video: "cabin_tour",
              video_id: "1143138281",
              percent: m,
            });
          }
        }
      }
      if (data?.event === "ended" && !fired.has(100)) {
        fired.add(100);
        trackEvent("video_progress", {
          video: "cabin_tour",
          video_id: "1143138281",
          percent: 100,
        });
      }
    };

    window.addEventListener("message", onMessage);
    // Some browsers fire ready before listener attached — ping for state.
    post("ping");
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleOverlayPlay = () => {
    trackEvent("video_play_overlay_click", {
      video: "cabin_tour",
      video_id: "1143138281",
    });
    const iframe = cabinIframeRef.current;
    try {
      iframe?.contentWindow?.postMessage(JSON.stringify({ method: "play" }), "*");
    } catch {}
    setOverlayHidden(true);
  };

  const features = [
    { title: t("hideaways.feat1Title"), desc: t("hideaways.feat1Desc") },
    { title: t("hideaways.feat2Title"), desc: t("hideaways.feat2Desc") },
    { title: t("hideaways.feat3Title"), desc: t("hideaways.feat3Desc") },
  ];

  return (
    <section id="hideaways" className="section-dark py-24 md:py-36 overflow-hidden">
      <div className="px-8 md:px-16 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4 md:mb-4">
            {t("hideaways.badge")}
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.1] md:leading-[1.05]">
            {t("hideaways.title")} <span className="text-editorial-italic">{t("hideaways.titleItalic")}</span>
          </h2>
        </motion.div>
      </div>

      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <img src={cabinExterior} alt="Modern Everlake cabin nestled in Georgia forest" className="w-full h-[400px] md:h-[600px] object-cover" loading="lazy" width={1024} height={1024} />
          <p className="font-body text-xs tracking-[0.15em] uppercase text-everlake-ivory/40 mt-4">{t("hideaways.imgLabel1")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 md:pb-16"
        >
          <img src={cabinInterior} alt="Luxury cabin interior with warm wood finishes" className="w-full h-[300px] md:h-[450px] object-cover" loading="lazy" width={1024} height={1024} />
          <p className="font-body text-xs tracking-[0.15em] uppercase text-everlake-ivory/40 mt-4">{t("hideaways.imgLabel2")}</p>
        </motion.div>
      </div>

      <div className="px-8 md:px-16 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-6 text-center">{t("hideaways.tourBadge")}</p>
          <div className="vimeo-wrapper relative">
            <iframe
              ref={cabinIframeRef}
              src="https://player.vimeo.com/video/1143138281?title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
              title="Everlake Cabin Tour"
            />
            {!overlayHidden && (
              <button
                type="button"
                onClick={handleOverlayPlay}
                aria-label={t("hideaways.playOverlay")}
                className="absolute inset-0 z-10 flex items-center justify-center bg-everlake-warm-black/30 hover:bg-everlake-warm-black/40 transition-colors group"
              >
                <span className="flex items-center gap-3 px-6 py-3 border border-everlake-gold/60 bg-everlake-warm-black/70 backdrop-blur-sm rounded-sm group-hover:border-everlake-gold transition-colors">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" className="text-everlake-gold">
                    <path d="M0 0L14 8L0 16V0Z" />
                  </svg>
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-everlake-ivory">
                    {t("hideaways.playOverlay")}
                  </span>
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="px-8 md:px-16 mt-20 md:mt-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <h3 className="text-editorial text-lg text-everlake-ivory mb-3">{item.title}</h3>
              <p className="font-body text-sm text-everlake-ivory/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HideawaysSection;
