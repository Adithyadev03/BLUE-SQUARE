import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data';

interface HeroProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

export default function Hero({ onExploreClick, onInquireClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-stretch overflow-hidden bg-[#FDFCFB]"
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 w-full">
        {/* Left column: Content */}
        <div className="lg:col-span-8 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-28 pb-16 lg:py-20 relative">
          {/* Subtle Grid borders */}
          <div className="absolute inset-y-0 right-0 w-[1px] bg-neutral-200/60 hidden lg:block" />

          <div className="max-w-2xl space-y-6 sm:space-y-8">
            {/* Authentic Rating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-[#FFB800]" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-neutral-800">
                {STUDIO_INFO.rating.toFixed(1)} Rating · ({STUDIO_INFO.reviewCount} Reviews)
              </span>
            </motion.div>

            {/* Premium Typography */}
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.6 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-mono text-xs tracking-[0.4em] text-neutral-500 uppercase leading-none"
              >
                {STUDIO_INFO.malayalamName}
              </motion.h2>

              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[90px] leading-[0.95] sm:leading-[0.85] mb-8 tracking-tighter text-[#1A1A1A]">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-serif italic"
                >
                  We Sculpt
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-serif not-italic font-bold"
                >
                  Luxury Spaces.
                </motion.span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-lg text-neutral-600 font-sans text-base sm:text-lg leading-relaxed font-light"
            >
              The leading interior design atelier in Melparamba, Kerala. Designing custom, elite residential homes, luxury modular kitchens, and signature office environments.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onExploreClick}
                className="px-8 py-4 bg-[#1A1A1A] text-white text-[12px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-[#003366] transition-all cursor-pointer shadow-lg shadow-neutral-900/10"
              >
                <span>View Portfolio</span>
                <ArrowRight size={13} />
              </button>

              <button
                onClick={onInquireClick}
                className="px-8 py-4 border border-neutral-200 text-[#1A1A1A] hover:border-[#003366] hover:text-[#003366] text-[12px] uppercase tracking-widest font-bold bg-transparent transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
              </button>
            </motion.div>
          </div>

          {/* Coordinates indicator */}
          <div className="absolute bottom-8 left-6 sm:left-12 hidden lg:flex flex-col space-y-1 font-mono text-[9px] tracking-widest text-neutral-400">
            <span>LOC: 12.4760° N, 75.0069° E</span>
            <span>MELPARAMBA, KERALA</span>
          </div>
        </div>

        {/* Right column: Image */}
        <div className="lg:col-span-4 bg-neutral-100 relative group overflow-hidden min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')`,
                filter: 'grayscale(100%) contrast(110%)',
              }}
            />
            <div className="absolute inset-0 bg-[#003366]/10 mix-blend-multiply" />
          </div>

          {/* Floating Work tag */}
          <div className="absolute top-8 left-8 bg-white p-6 border border-neutral-100 shadow-xl max-w-xs z-10 hidden sm:block">
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1 block">Featured Work</span>
            <h3 className="text-lg font-serif mb-2 text-[#1A1A1A]">Minimalist Villa, Kalnad</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">An exploration of light and geometry. Completed June 2023.</p>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-0 right-0 p-6 bg-[#1A1A1A] text-white flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest font-bold">Scroll View</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
