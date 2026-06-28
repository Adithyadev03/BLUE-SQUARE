import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Award, Compass, ShieldCheck } from 'lucide-react';
import { STATS, STUDIO_INFO } from '../data';

function CountUp({ value, duration = 1.5, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden border-t border-neutral-200/60">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#003366]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
                The Heritage of Custom Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Where Indian Tradition Meets <span className="italic font-light">Avant-Garde</span> Minimalism.
              </h2>
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base font-light text-neutral-600 leading-relaxed">
              <p>
                Founded in the vibrant coastal hub of Melparamba, Kerala, <strong className="text-[#1A1A1A] font-medium">Blue Square Interiors</strong> has established itself as the leading high-end design atelier for sophisticated clients. We believe that true luxury is not loud—it is highly bespoke, silent, and beautifully functional.
              </p>
              <p>
                From premium modular kitchen systems integrated with German Blum mechanics to bespoke residential sanctuaries and luxury retail offices, every commission is treated as a unique piece of architectural art. We collaborate directly with our clients, transforming their creative blueprints into physical realities.
              </p>
            </div>

            {/* Core Values badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-[#003366]">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">Obsessive Precision</h4>
                  <p className="text-[11px] text-neutral-500 mt-1">Zero-tolerance craftsmanship from layout to installation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-[#003366]">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">Creative Alignment</h4>
                  <p className="text-[11px] text-neutral-500 mt-1">We respect your core ideas and elevate them with master design.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-[#003366]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">10-Yr Guarantee</h4>
                  <p className="text-[11px] text-neutral-500 mt-1">Robust modular carcasses built to survive the coastal climate.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating Image Panel + Statistics */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-200 aspect-[3/4] max-w-sm mx-auto shadow-2xl">
              <div className="absolute inset-0 bg-neutral-900/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury design curated palette"
                className="w-full h-full object-cover transition-transform duration-1000 scale-102 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Float-in Statistics Box */}
            <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white border border-neutral-200 p-6 rounded-2xl shadow-xl max-w-[240px] hidden sm:block">
              <span className="text-3xl font-serif font-bold text-[#003366] block tracking-tight">
                <CountUp value={STUDIO_INFO.reviewCount} suffix="+" />
              </span>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase mt-1 block font-semibold">
                5-Star Google Reviews
              </span>
              <p className="text-[10px] text-neutral-400 mt-2 font-sans italic">
                &ldquo;Complete satisfaction with the design and quality.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Big Staggered Grid of Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-20 mt-16 border-t border-neutral-200/80 text-center sm:text-left">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#003366]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
