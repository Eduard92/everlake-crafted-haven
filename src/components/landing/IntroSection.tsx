import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section id="intro" className="section-cream py-24 md:py-40 px-8 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="divider-organic mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-8">
            A Limited Invitation
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-everlake-charcoal mb-8">
            A sanctuary where <span className="text-editorial-italic">personalized rest</span> is embedded in every element of our design.
          </h2>
          <p className="font-body text-everlake-charcoal/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            In a world that never stops, we're building a place where you can. Find yourself completely immersed in nature without sacrificing a single comfort.
          </p>
          <p className="font-body text-everlake-charcoal/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
            You believed in Everlake before anyone else did. Your Founders Reward is now waiting. Your 2-Week Exclusive Window Is Now Open.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
