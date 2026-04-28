import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const FaqSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
  ];

  return (
    <section id="faq" className="section-cream py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4">{t("faq.badge")}</p>
          <h2 className="text-editorial text-3xl md:text-4xl text-everlake-charcoal">
            {t("faq.title")} <span className="text-editorial-italic">{t("faq.titleItalic")}</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-everlake-sand"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="flex items-center gap-6">
                    <span className="text-editorial text-sm text-everlake-sand">0{i + 1}</span>
                    <span className="text-editorial text-lg md:text-xl text-everlake-charcoal group-hover:text-everlake-moss transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <span className="text-everlake-charcoal/30 text-xl transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: openIndex === i ? '300px' : '0', opacity: openIndex === i ? 1 : 0 }}
                >
                  <p className="font-body text-sm text-everlake-charcoal/50 pb-6 pl-12 md:pl-16 leading-relaxed max-w-lg">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-everlake-sand" />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
