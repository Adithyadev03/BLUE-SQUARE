import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

// Helper to resolve Lucide icons dynamically
function ServiceIcon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Sparkles size={size} className={className} />;
  return <IconComponent size={size} className={className} />;
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F5F0] relative overflow-hidden border-t border-neutral-200/60">
      {/* Decorative vertical structure line */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-neutral-200/40 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-neutral-200/40 hidden lg:block pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-3">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            Specialized Master Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Our Spheres of <span className="italic font-light">Excellence</span>
          </h2>
          <p className="font-sans text-sm sm:text-base font-light text-neutral-600 max-w-xl leading-relaxed mt-4">
            We provide comprehensive turn-key interior architecture services throughout Kasaragod, designing spaces that last for generations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              key={service.id}
              className="group relative flex flex-col justify-between bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[#003366]/30 hover:bg-white"
            >
              {/* Cover-tint overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/95 to-transparent opacity-90" />
              
              {/* Subtle background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 z-[-1] w-full h-full object-cover opacity-10 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-10 space-y-6">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[#003366]">
                    <ServiceIcon name={service.icon} size={22} />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-semibold group-hover:text-[#003366] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                      {service.title}
                    </h3>
                    {service.malayalamTitle && (
                      <span className="font-sans text-[11px] text-[#003366]/80 font-semibold tracking-wide">
                        ({service.malayalamTitle})
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-neutral-200/60">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 font-sans text-[11px] text-neutral-500 group-hover:text-neutral-800 transition-colors">
                      <div className="h-1.5 w-1.5 bg-[#003366] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover highlight bottom-border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#003366] to-[#004488] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
