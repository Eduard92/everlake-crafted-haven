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

const experiences = [
  {
    image: kayakImg,
    title: "Canoeing & Kayaking",
    desc: "Paddle peacefully along the lake with scenic views all around.",
  },
  {
    image: bonfireImg,
    title: "Lakeside Bonfires",
    desc: "S'mores by the fire pit as the stars come alive above the lake.",
  },
  {
    image: yogaImg,
    title: "Forest Yoga",
    desc: "Morning sessions overlooking the water. Breathe deep, let go.",
  },
  {
    image: cinemaImg,
    title: "Cinema Under the Trees",
    desc: "A private outdoor movie experience surrounded by nature and starlight.",
  },
  {
    image: massageImg,
    title: "Couple's Massage",
    desc: "Unwind together on our forest deck with a rejuvenating couples massage.",
  },
  {
    image: picnicImg,
    title: "Lakeside Picnics",
    desc: "Spread out by the water with a curated picnic basket and blankets.",
  },
  {
    image: bikingImg,
    title: "Biking Trails",
    desc: "Explore winding trails through the forest and along the lake's edge.",
  },
  {
    image: paintingImg,
    title: "Painting by the Pond",
    desc: "Let the landscape inspire your creativity with a paint-and-sip session.",
  },
  {
    image: firesideImg,
    title: "Fireside Relaxation",
    desc: "Cozy up with your favorite person and enjoy the warmth of a woodland fire.",
  },
];

const ExperiencesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 6);

  return (
    <section id="experiences" className="bg-background py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4">
              On-Property
            </p>
            <h2 className="text-editorial text-3xl md:text-5xl text-foreground leading-[1.05]">
              Experiences <span className="text-editorial-italic">& Adventures</span>
            </h2>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
            Everlake is more than a place to stay — it's a place to truly experience nature and reconnect with those who matter most.
          </p>
        </motion.div>

        {/* Experience cards — asymmetric masonry-style grid */}
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
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-[340px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={840}
                />
              </div>
              <h3 className="text-editorial text-xl text-foreground mb-2">{exp.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Show more / less toggle */}
        {experiences.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-body text-xs tracking-[0.2em] uppercase text-everlake-moss hover:text-everlake-gold transition-colors border-b border-everlake-moss/30 hover:border-everlake-gold pb-1"
            >
              {showAll ? "Show Less" : `Show All ${experiences.length} Experiences`}
            </button>
          </motion.div>
        )}

        {/* Activity list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 border-t border-border pt-8"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {[
              "S'mores Making", "Hammock Lounging", "BBQ Grilling", "Couple's Massage",
              "Cinema Under the Trees", "Hiking Trails", "Biking", "Bird Watching",
              "Painting by the Pond", "Jacuzzi", "Picnic Kits", "Rock Skipping"
            ].map((activity) => (
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
