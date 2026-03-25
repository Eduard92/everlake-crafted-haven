import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book Your Getaway",
    desc: "Choose your perfect hideaway, select your travel dates, and get ready to unplug from the noise.",
  },
  {
    number: "02",
    title: "Gain Instant Access",
    desc: "We'll send your digital entry code before your stay, so you can arrive with ease and step straight into calm.",
  },
  {
    number: "03",
    title: "Arrive & Unwind",
    desc: "Welcome to the getaway you've been craving. Take a deep breath, settle in, and let the quiet surround you.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-cream py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4">
            How It Works
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-charcoal leading-[1.05]">
            Three steps to <span className="text-editorial-italic">your quiet escape</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="text-editorial text-5xl md:text-6xl text-everlake-sand/60 block mb-4">
                {step.number}
              </span>
              <h3 className="text-editorial text-xl text-everlake-charcoal mb-3">{step.title}</h3>
              <p className="font-body text-sm text-everlake-charcoal/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
