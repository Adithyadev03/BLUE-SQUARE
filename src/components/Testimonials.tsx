import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F7F5F0] relative overflow-hidden border-t border-neutral-200/60">
      {/* Decorative large quote in background */}
      <div className="absolute right-10 bottom-0 text-[120px] sm:text-[200px] font-serif text-[#003366]/5 pointer-events-none italic select-none">
        &ldquo;
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            Google Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Client <span className="italic font-light">Endorsements</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 max-w-sm mx-auto">
            Read direct, unfiltered feedback from local Kerala families and business owners who have customized their spaces with our studio.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white border border-neutral-200/80 p-8 sm:p-12 rounded-3xl relative shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* Initials Avatar */}
              <div className="flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#003366] flex items-center justify-center text-white font-serif text-xl sm:text-2xl font-bold shadow-md">
                {current.initials}
              </div>

              {/* Review Content */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                {/* Rating Stars */}
                <div className="flex justify-center md:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-lg sm:text-xl font-bold leading-relaxed text-[#1A1A1A] italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Reviewer Meta Details */}
                <div className="pt-4 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1A1A1A] flex items-center justify-center md:justify-start space-x-2">
                      <span className="capitalize">{current.name}</span>
                      {current.isLocalGuide && (
                        <span className="inline-flex items-center space-x-1 bg-neutral-100 border border-neutral-200 text-[9px] font-mono tracking-wider text-[#003366] uppercase px-2 py-0.5 rounded-full font-bold">
                          <CheckCircle2 size={9} className="text-[#003366]" />
                          <span>Local Guide</span>
                        </span>
                      )}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 mt-1">
                      {current.role} · Verified Client
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                    {current.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controllers */}
        <div className="flex justify-center items-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 bg-white border border-neutral-200 text-neutral-500 hover:text-[#003366] hover:border-[#003366]/20 rounded-full transition-all focus:outline-none cursor-pointer shadow-sm hover:shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === idx ? 'w-6 bg-[#003366]' : 'w-1.5 bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white border border-neutral-200 text-neutral-500 hover:text-[#003366] hover:border-[#003366]/20 rounded-full transition-all focus:outline-none cursor-pointer shadow-sm hover:shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
