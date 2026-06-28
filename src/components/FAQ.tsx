import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F7F5F0] relative overflow-hidden border-t border-neutral-200/60">
      {/* Structural horizontal layout line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-neutral-200/40" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            Information Atelier
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Frequently Asked <span className="italic font-light">Queries</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Essential facts on budgets, warranties, execution workflows, and material specifications.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-neutral-200/60 pb-4 transition-colors duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center py-4 text-left font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] hover:text-[#003366] focus:outline-none transition-colors cursor-pointer"
                >
                  <span className="pr-6 leading-tight">{faq.question}</span>
                  <div className="flex-shrink-0 p-2 bg-neutral-100 border border-neutral-200 rounded-lg text-[#003366]">
                    {isOpen ? <Minus size={14} className="rotate-180 transition-transform duration-500" /> : <Plus size={14} className="transition-transform duration-500" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="py-2 font-sans text-xs sm:text-sm font-light text-neutral-600 leading-relaxed pr-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
