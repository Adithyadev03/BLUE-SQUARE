import { motion } from 'motion/react';
import { PROCESS_TIMELINE } from '../data';

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden border-t border-neutral-200/60">
      {/* Structural background coordinate layout lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-neutral-200/40" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-neutral-200/40" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            Crafting with Intent
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            The Design <span className="italic font-light">Chronology</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 leading-relaxed max-w-md">
            Our systematic, five-stage process is meticulously structured to guarantee complete stylistic and structural perfection.
          </p>
        </div>

        {/* Process Timeline Column */}
        <div className="relative border-l border-neutral-200 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          {PROCESS_TIMELINE.map((step, idx) => (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              key={step.step}
              className="relative group grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Floating circular node on timeline axis */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#FDFCFB] border border-neutral-200 group-hover:border-[#003366] transition-all duration-500 shadow-sm">
                <div className="h-2 w-2 bg-neutral-300 rounded-full group-hover:bg-[#003366] transition-colors duration-500" />
              </div>

              {/* Step indicator (Large typography) */}
              <div className="md:col-span-3 flex flex-row md:flex-col items-baseline md:items-start justify-between md:justify-start gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-neutral-700 group-hover:text-[#003366] transition-colors duration-700 leading-none">
                  {step.step}
                </span>
                <span className="inline-block bg-neutral-100 border border-neutral-200 font-mono text-[9px] tracking-widest text-[#003366] uppercase px-3 py-1 rounded-md font-semibold">
                  {step.duration}
                </span>
              </div>

              {/* Step content card */}
              <div className="md:col-span-9 space-y-2 bg-neutral-50 border border-neutral-200/60 rounded-2xl p-6 sm:p-8 hover:bg-white hover:border-[#003366]/30 hover:shadow-xl hover:shadow-[#003366]/5 transition-all duration-500">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#003366] transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
