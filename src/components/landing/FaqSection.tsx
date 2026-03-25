import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "When will Everlake open?",
    answer: "Everlake is currently in the late stages of construction. We will begin hosting in Spring 2026.",
  },
  {
    question: "Where is Everlake located?",
    answer: "Everlake is built on 110 acres in Covington, Georgia. Nestled in the woods beside two different bodies of water.",
  },
  {
    question: "What does VIP membership include?",
    answer: "VIP members get early access to the booking calendar and discounted rates on stays, packages, and add-ons before public availability.",
  },
  {
    question: "Who can I contact if I have questions?",
    answer: "Please don't hesitate to reach out to our wonderful Resort Manager, Montana at montana@everlakega.com",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-cream py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-moss mb-4">
            Questions
          </p>
          <h2 className="text-editorial text-3xl md:text-4xl text-everlake-charcoal">
            Frequently <span className="text-editorial-italic">Asked</span>
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
                style={{ maxHeight: openIndex === i ? '200px' : '0', opacity: openIndex === i ? 1 : 0 }}
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
