import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lake.jpg";
import everlakeLogo from "@/assets/everlake-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image as fallback / poster — the brand video replaces this */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aerial view of Everlake's private lake surrounded by autumn forest"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-everlake-warm-black/40" />
      </div>

      {/* Brand Video (Vimeo) — plays behind content */}
      <div className="absolute inset-0 z-[1]">
        <iframe
          src="https://player.vimeo.com/video/1143427204?background=1&autoplay=1&muted=1&loop=1&autopause=0"
          className="h-full w-full object-cover pointer-events-none"
          style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '100%', transform: 'translate(-50%, -50%)' }}
          allow="autoplay; fullscreen"
          title="Everlake Brand Video"
        />
        <div className="absolute inset-0 bg-everlake-warm-black/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={everlakeLogo} alt="Everlake" className="h-8 md:h-10 w-auto brightness-0 invert" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex items-center gap-8 font-body text-sm tracking-[0.1em] text-everlake-ivory/80 uppercase"
        >
          <a href="#hideaways" className="hover:text-everlake-gold transition-colors duration-300">Hideaways</a>
          <a href="#experiences" className="hover:text-everlake-gold transition-colors duration-300">Experiences</a>
          <a href="#vip-shop" className="hover:text-everlake-gold transition-colors duration-300">VIP Shop</a>
          <a href="#faq" className="hover:text-everlake-gold transition-colors duration-300">FAQ</a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end h-[calc(100%-80px)] pb-20 md:pb-28 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-everlake-gold mb-4">
            VIP Early Access · Covington, Georgia
          </p>
          <h2 className="text-editorial text-everlake-ivory text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            The Getaway<br />
            <span className="text-editorial-italic">That Stays</span><br />
            With You
          </h2>
          <p className="font-body text-everlake-ivory/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
            Before Everlake opens its gates to the world, you — our Founders — have first access to the lake. Your 2-Week Exclusive Window Is Now Open.
          </p>
          <a
            href="#vip-shop"
            className="inline-block font-body text-xs md:text-sm tracking-[0.15em] uppercase px-8 py-4 bg-everlake-forest text-everlake-ivory rounded-sm hover:bg-everlake-sage transition-colors duration-300"
          >
            See My VIP Packages
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#intro" className="flex flex-col items-center gap-2 text-everlake-ivory/50 hover:text-everlake-gold transition-colors">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-8 bg-current"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
