import { motion } from "framer-motion";
import cabinExterior from "@/assets/gallery-cabin-exterior.webp";
import hotCocoa from "@/assets/gallery-hot-cocoa.webp";
import jacuzziNight from "@/assets/gallery-jacuzzi-night.webp";
import coupleDeck from "@/assets/gallery-couple-deck.webp";
import loftMorning from "@/assets/gallery-loft-morning.webp";
import firesideCoffee from "@/assets/gallery-fireside-coffee.webp";
import kitchen from "@/assets/gallery-kitchen.webp";
import cabinJacuzzi from "@/assets/gallery-cabin-jacuzzi.webp";
import lakeSunset from "@/assets/gallery-lake-sunset.webp";
import aerial from "@/assets/gallery-aerial.webp";
import outdoorDining from "@/assets/gallery-outdoor-dining.webp";
import familyHike from "@/assets/gallery-family-hike.webp";
import firepitLake from "@/assets/gallery-firepit-lake.webp";
import bathroom from "@/assets/gallery-bathroom.webp";
import loftBed from "@/assets/gallery-loft-bed.webp";
import cabinDeck from "@/assets/gallery-cabin-deck.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const galleryImages = [
  { src: cabinExterior, alt: "A-frame cabin nestled in the forest" },
  { src: hotCocoa, alt: "Hot cocoa by the fire" },
  { src: jacuzziNight, alt: "Private jacuzzi under string lights at night" },
  { src: coupleDeck, alt: "Couple relaxing on the cabin deck" },
  { src: loftMorning, alt: "Morning coffee in the loft with forest views" },
  { src: firesideCoffee, alt: "Quiet moment by the campfire" },
  { src: kitchen, alt: "Fully equipped cabin kitchen" },
  { src: cabinJacuzzi, alt: "Cabin with private hot tub in the woods" },
  { src: lakeSunset, alt: "Golden sunset over the lake" },
  { src: aerial, alt: "Aerial view of the Everlake property and lakes" },
  { src: outdoorDining, alt: "Outdoor dining with wine in the forest" },
  { src: familyHike, alt: "Family hiking through autumn trails" },
  { src: firepitLake, alt: "Fire pit by the lake with Adirondack chairs" },
  { src: bathroom, alt: "Modern cabin bathroom with rain shower" },
  { src: loftBed, alt: "Cozy loft bedroom with A-frame window" },
  { src: cabinDeck, alt: "Cabin with deck and hammock in the woods" },
];

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-dark py-24 md:py-36 overflow-hidden">
      <div className="px-8 md:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">{t("gallery.badge")}</p>
          <h2 className="text-editorial text-3xl md:text-4xl text-everlake-ivory">
            {t("gallery.title")} <span className="text-editorial-italic">{t("gallery.titleItalic")}</span>
          </h2>
        </motion.div>
      </div>

      <div className="px-4 md:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="mb-3 md:mb-4 break-inside-avoid group"
            >
              <div className="overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
