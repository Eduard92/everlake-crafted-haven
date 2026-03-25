import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF2947.webp", alt: "Everlake property" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF2950.webp", alt: "Everlake lake view" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF2963.webp", alt: "Everlake forest" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF3156.webp", alt: "Everlake cabin" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF3270.webp", alt: "Everlake scenery" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF3293.webp", alt: "Everlake sunset" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF3332.webp", alt: "Everlake nature" },
  { src: "https://everlakega.com/wp-content/uploads/2025/10/DSCF3335.webp", alt: "Everlake grounds" },
];

const GallerySection = () => {
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
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">
            A Glimpse Into The Quiet
          </p>
          <h2 className="text-editorial text-3xl md:text-4xl text-everlake-ivory">
            Every detail is crafted for <span className="text-editorial-italic">your perfect getaway</span>
          </h2>
        </motion.div>
      </div>

      {/* Masonry-style gallery */}
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
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
