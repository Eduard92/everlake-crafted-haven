import { motion } from "framer-motion";
import heroLake from "@/assets/hero-lake.jpg";
import logo from "@/assets/everlake-logo.png";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-everlake-warm-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroLake})` }}
      />
      <div className="absolute inset-0 bg-everlake-warm-black/70" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <motion.img
          src={logo}
          alt="Everlake"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 h-16 md:h-20 w-auto object-contain brightness-0 invert"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-everlake-gold mb-6"
        >
          Coming Soon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-editorial text-4xl md:text-6xl lg:text-7xl text-everlake-ivory leading-[1.05] max-w-3xl"
        >
          Something special is<br />
          <span className="text-editorial-italic">on its way</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 max-w-md font-body text-sm md:text-base text-everlake-ivory/70 leading-relaxed"
        >
          We're preparing an unforgettable escape. Stay tuned.
        </motion.p>
      </div>
    </div>
  );
};

export default ComingSoon;
