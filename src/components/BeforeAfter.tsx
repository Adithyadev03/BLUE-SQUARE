import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveLeft, MoveRight, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="before-after" className="py-24 sm:py-32 bg-[#F7F5F0] relative overflow-hidden border-t border-neutral-200/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            The Magic of Refinement
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Before & After <span className="italic font-light">Metamorphosis</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 leading-relaxed max-w-md mx-auto">
            Witness our physical design engineering. Drag the blue slider in the space below to witness a standard empty room transition into a bespoke culinary chef kitchen.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div 
          ref={containerRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-neutral-100 select-none cursor-ew-resize focus:outline-none focus:ring-1 focus:ring-[#003366]/30"
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onMouseDown={handleMouseDown}
        >
          {/* AFTER image (Underneath - Full Width) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85"
              alt="After luxury custom kitchen interior renovation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              draggable="false"
            />
            {/* After Tag */}
            <div className="absolute bottom-6 right-6 z-10 bg-[#003366] text-white font-mono text-[10px] tracking-[0.2em] font-bold uppercase px-4 py-1.5 rounded-full shadow-md">
              AFTER · ലക്ഷ്വറി
            </div>
          </div>

          {/* BEFORE image (On top - Clipped Width) */}
          <div 
            className="absolute inset-y-0 left-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Maintain full-width reference for background image sizing */}
            <div className="absolute inset-0 w-full h-full min-w-[50vw] sm:min-w-[70vw] lg:min-w-[1024px]" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1500&q=80"
                alt="Before old empty rustic interior space"
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
                draggable="false"
              />
              {/* Before Tag */}
              <div className="absolute bottom-6 left-6 z-10 bg-neutral-900/80 border border-neutral-700 text-neutral-300 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-md">
                BEFORE · മുൻപ്
              </div>
            </div>
          </div>

          {/* Blue sliding divider line */}
          <div 
            className="absolute inset-y-0 z-20 w-[2px] bg-gradient-to-b from-[#003366] via-[#004488] to-[#003366] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Drag Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white border-2 border-[#003366] flex items-center justify-center text-[#003366] shadow-[0_0_15px_rgba(0,51,102,0.25)]">
              <div className="flex space-x-0.5 items-center">
                <MoveLeft size={10} className="animate-pulse" />
                <MoveRight size={10} className="animate-pulse" />
              </div>
            </div>
          </div>

          {/* Floating Instructions Banner (Fades out when slider moves away from center) */}
          {Math.abs(sliderPosition - 50) < 5 && (
            <div className="absolute inset-x-0 bottom-20 z-10 flex justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.9, y: 0 }}
                className="flex items-center space-x-2 bg-white/95 border border-neutral-200 shadow-lg px-4 py-2 rounded-lg font-sans text-xs text-neutral-700"
              >
                <Sparkles size={12} className="text-[#003366]" />
                <span>Drag slider to inspect details</span>
              </motion.div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
