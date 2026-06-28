import { motion } from 'motion/react';
import { TEAM } from '../data';

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden border-t border-neutral-200/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            The Designers
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            The Creative <span className="italic font-light">Atelier</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 leading-relaxed">
            Our multi-disciplinary team brings global design benchmarks combined with specialized structural knowledge of materials to every Kerala project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {TEAM.map((member, index) => (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              key={member.name}
              className="group space-y-4"
            >
              {/* Profile Image card */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 aspect-[4/5] shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 bg-[#003366] text-white px-3 py-1 rounded-md shadow-sm font-bold">
                  <span className="font-mono text-[9px] tracking-wider uppercase block">
                    {member.experience} EXP
                  </span>
                </div>

                {/* Cover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* Identity Row */}
              <div className="px-2 space-y-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-wide">
                  {member.name}
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-[#003366] uppercase font-semibold">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
