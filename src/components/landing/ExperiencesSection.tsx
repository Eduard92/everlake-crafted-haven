import { motion } from "framer-motion";
import { useState } from "react";
import bonfireImg from "@/assets/experiences-bonfire.webp";
import picnicImg from "@/assets/experiences-picnic.webp";
import firesideImg from "@/assets/experiences-fireside.webp";
import paintingImg from "@/assets/experiences-painting.webp";
import kayakImg from "@/assets/experiences-kayak.webp";
import bikingImg from "@/assets/experiences-biking.webp";
import yogaImg from "@/assets/experiences-yoga.webp";
import massageImg from "@/assets/experiences-massage.webp";
import cinemaImg from "@/assets/experiences-cinema.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const ExperiencesSection = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    { image: kayakImg, title: t("exp.kayak.title"), desc: t("exp.kayak.desc") },
    { image: bonfireImg, title: t("exp.bonfire.title"), desc: t("exp.bonfire.desc") },
    { image: yogaImg, title: t("exp.yoga.title"), desc: t("exp.yoga.desc") },
    { image: cinemaImg, title: t("exp.cinema.title"), desc: t("exp.cinema.desc") },
    { image: massageImg, title: t("exp.massage.title"), desc: t("exp.massage.desc") },
    { image: picnicImg, title: t("exp.picnic.title"), desc: t("exp.picnic.desc") },
    { image: bikingImg, title: t("exp.biking.title"), desc: t("exp.biking.desc") },
    { image: paintingImg, title: t("exp.painting.title"), desc: t("exp.painting.desc") },
    { image: firesideImg, title: t("exp.fireside.title"), desc: t("exp.fireside.desc") },
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 6);

  const activities = [
    t("act.smores"), t("act.hammock"), t("act.bbq"), t("act.massage"),
    t("act.cinema"), t("act.hiking"), t("act.biking"), t("act.birds"),
    t("act.painting"), t("act.jacuzzi"), t("act.picnic"), t("act.rocks"),
  ];

  return (
    <section id="experiences" className="bg-background py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4 md:mb-4">{t("exp.badge")}</p>
            <h2 className="text-editorial text-3xl md:text-5xl text-foreground leading-[1.1] md:leading-[1.05] mb-4 md:mb-0">
              {t("exp.title")} <span className="text-editorial-italic">{t("exp.titleItalic")}</span>
            </h2>
          </div>
          <p className="font-body text-[15px] md:text-sm text-muted-foreground max-w-md leading-[1.65] md:leading-relaxed">{t("exp.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visibleExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15 }}
              className={`group ${i % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="overflow-hidden mb-5">
                <img src={exp.image} alt={exp.title} className="w-full h-[340px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={840} />
              </div>
              <h3 className="text-editorial text-xl text-foreground mb-2">{exp.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        {experiences.length > 6 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-body text-xs tracking-[0.2em] uppercase text-everlake-moss hover:text-everlake-gold transition-colors border-b border-everlake-moss/30 hover:border-everlake-gold pb-1"
            >
              {showAll ? t("exp.showLess") : t("exp.showAll").replace("{count}", String(experiences.length))}
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 border-t border-border pt-8"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {activities.map((activity) => (
              <span key={activity} className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/60 hover:text-everlake-gold transition-colors cursor-default">
                {activity}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
