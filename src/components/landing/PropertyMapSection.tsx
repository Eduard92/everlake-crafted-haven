import { motion } from "framer-motion";

const PropertyMapSection = () => {
  return (
    <section className="section-dark py-24 md:py-36 overflow-hidden">
      <div className="px-8 md:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">
            The Property
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.05] mb-6">
            110 Acres. Two Lakes.<br />
            <span className="text-editorial-italic">30+ Private Hideaways.</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-16 max-w-6xl mx-auto"
      >
        <div className="vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/1130962377?background=1&autoplay=1&muted=1&loop=1&autopause=0"
            allow="autoplay; fullscreen"
            loading="lazy"
            title="Everlake Property Map"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PropertyMapSection;
