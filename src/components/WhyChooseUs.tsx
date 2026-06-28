import { motion } from 'motion/react';
import { UserCheck, Sparkles, Clock, Star, HeartHandshake } from 'lucide-react';
import { STUDIO_INFO } from '../data';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Client-Centric Alignment",
      quote: "Well professional one... the one who stands with our idea and encourages it.",
      reviewer: "Shravan Sisupalan",
      description: "We don't impose generic presets. We listen to your lifestyle requirements, respect your aesthetic inputs, and elevate them using refined architectural rules."
    },
    {
      icon: Sparkles,
      title: "Unspeakable Product Quality",
      quote: "Completely satisfied with the design and the quality of the product was unspeakable.",
      reviewer: "Irshad TM",
      description: "We source only premium calibrated structural multi-woods, weather-resistant polymer edge bandings, and Blum/Hettich luxury hardware to resist Kerala's coastal humidity."
    },
    {
      icon: Clock,
      title: "Punctual Master Artisans",
      quote: "Good work, they have skilled workers... the staffs are also punctual.",
      reviewer: "Gilani Ksd & Fathima R.",
      description: "Our in-house design fabrication engineers execute layouts under strict deadlines, delivering meticulous fitments and handovers ahead of schedule."
    },
    {
      icon: Star,
      title: "Pedigree of Flawless trust",
      quote: "Completed our custom living room and modular kitchen ahead of time. Highly recommended!",
      reviewer: "Anoop K. Nair",
      description: "We hold a flawless 5.0-star Google rating across 81 reviews, backed by a comprehensive 10-year structural guarantee. Total security and transparency."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden border-t border-neutral-200/60">
      {/* Structural layout coordinate line */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-neutral-200/50 hidden lg:block pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            The Blue Square Edge
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Why Discerning Clients <br />
            <span className="italic font-light">Select Our Studio</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 max-w-sm">
            We bridge deep engineering, custom handcraft, and uncompromising punctuality for homes of distinction.
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                key={index}
                className="group flex flex-col justify-between bg-neutral-50 border border-neutral-200/60 rounded-3xl p-6 sm:p-10 hover:bg-white hover:border-[#003366]/30 hover:shadow-xl hover:shadow-[#003366]/5 transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Icon Node */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-2xl text-[#003366]">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-neutral-400 group-hover:text-[#003366] transition-colors uppercase font-semibold">
                      CRITERION 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#003366] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Direct Google review quotation as evidence */}
                <div className="mt-8 pt-6 border-t border-neutral-200/60 flex flex-col space-y-2">
                  <p className="font-serif text-xs italic text-neutral-500 leading-relaxed group-hover:text-neutral-700 transition-colors">
                    &ldquo;{benefit.quote}&rdquo;
                  </p>
                  <div className="flex items-center space-x-1 font-mono text-[9px] tracking-widest text-[#003366] uppercase font-semibold">
                    <HeartHandshake size={9} />
                    <span>{benefit.reviewer}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
