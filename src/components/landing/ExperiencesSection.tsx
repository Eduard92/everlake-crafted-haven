import { motion } from "framer-motion";
import kayakImg from "@/assets/experiences-kayak.jpg";
import fireImg from "@/assets/experiences-fire.jpg";
import yogaImg from "@/assets/experiences-yoga.jpg";

const experiences = [
  {
    image: kayakImg,
    title: "Canoeing & Kayaking",
    desc: "Paddle peacefully along the lake with scenic views all around.",
  },
  {
    image: fireImg,
    title: "Lakeside Bonfires",
    desc: "S'mores by the fire pit as the stars come alive above the lake.",
  },
  {
    image: yogaImg,
    title: "Forest Yoga",
    desc: "Morning sessions overlooking the water. Breathe deep, let go.",
  },
];

const ExperiencesSection = () => {
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

        {/* Experience cards — staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group ${i === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <h3 className="text-editorial text-xl text-foreground mb-2">{exp.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

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
