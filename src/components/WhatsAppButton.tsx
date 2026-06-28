import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips briefly after 4 seconds to grab attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    const closeTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Premium Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="bg-[#0f1115] border border-gold-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-3.5 rounded-xl max-w-xs text-left backdrop-blur-md hidden sm:block"
          >
            <div className="flex items-center space-x-1.5 text-gold-400 font-mono text-[9px] tracking-widest uppercase mb-1">
              <Sparkles size={10} />
              <span>Direct Consultation</span>
            </div>
            <p className="font-sans text-[11px] text-zinc-300 leading-snug">
              Chat on WhatsApp for instant rates & timelines.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher Button */}
      <motion.a
        href={STUDIO_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-black border-2 border-gold-400 text-gold-400 shadow-[0_0_20px_rgba(193,150,67,0.3)] hover:shadow-[0_0_30px_rgba(193,150,67,0.6)] hover:scale-105 hover:bg-gold-500 hover:text-black transition-all duration-300"
        aria-label="Contact Blue Square Interiors on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulsating outer ring */}
        <span className="absolute inset-0 rounded-full border border-gold-400/50 animate-ping opacity-60" />
        <MessageSquare size={22} className="stroke-[1.8]" />
      </motion.a>
    </div>
  );
}
