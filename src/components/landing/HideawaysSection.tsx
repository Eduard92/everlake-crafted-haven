import { motion } from "framer-motion";
import cabinInterior from "@/assets/cabin-interior.webp";
import cabinExterior from "@/assets/cabin-exterior.webp";

const HideawaysSection = () => {
  return (
    <section id="hideaways" className="section-dark py-24 md:py-36 overflow-hidden">
      {/* Section header */}
      <div className="px-8 md:px-16 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">
            Our Hideaways
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.05]">
            Designed for <span className="text-editorial-italic">stillness</span>
          </h2>
        </motion.div>
      </div>

      {/* Asymmetric image layout */}
      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <img
            src={cabinExterior}
            alt="Modern Everlake cabin nestled in Georgia forest"
            className="w-full h-[400px] md:h-[600px] object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <p className="font-body text-xs tracking-[0.15em] uppercase text-everlake-ivory/40 mt-4">
            Exterior · Forest Setting
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 md:pb-16"
        >
          <img
            src={cabinInterior}
            alt="Luxury cabin interior with warm wood finishes"
            className="w-full h-[300px] md:h-[450px] object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <p className="font-body text-xs tracking-[0.15em] uppercase text-everlake-ivory/40 mt-4">
            Interior · Bedroom Suite
          </p>
        </motion.div>
      </div>

      {/* Cabin tour video */}
      <div className="px-8 md:px-16 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-6 text-center">
            Take a Tour
          </p>
          <div className="vimeo-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1143138281?title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
              title="Everlake Cabin Tour"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature highlights */}
      <div className="px-8 md:px-16 mt-20 md:mt-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            { title: "Private Space", desc: "Each hideaway is entirely yours. Slow mornings and quiet nights beneath the stars." },
            { title: "Scenic Views", desc: "Nestled on the lake or tucked into the woods — serene nature is just a step away." },
            { title: "Skip Check-In", desc: "Digital check-in grants instant access. Arrive with ease and step straight into calm." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
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
