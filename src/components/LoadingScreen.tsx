import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading simulation
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#FDFCFB] px-6 py-12 text-[#1A1A1A]">
      {/* Top Margin Detail */}
      <div className="flex w-full max-w-7xl justify-between text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-semibold">
        <span>Architectural Studio</span>
        <span>Kerala, IN</span>
      </div>

      {/* Main Logo Reveal */}
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Animated square outlining the blue square brand */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 border-2 border-[#003366]/20"
          />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-10 w-10 bg-[#003366] shadow-[0_0_20px_rgba(0,51,102,0.3)]"
          />
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-3xl font-bold tracking-[0.15em] text-[#1A1A1A] uppercase sm:text-4xl"
          >
            Blue Square
          </motion.h1>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-2 font-sans text-xs tracking-[0.3em] text-[#003366] uppercase font-semibold"
          >
            Interiors · ഡിസൈൻ
          </motion.p>
        </div>
      </div>

      {/* Counter */}
      <div className="flex flex-col items-center space-y-2">
        <div className="h-[2px] w-48 bg-neutral-100 overflow-hidden rounded-full border border-neutral-200/50">
          <motion.div
            className="h-full bg-[#003366]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <span className="font-mono text-sm tracking-wider text-[#003366] font-bold">
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
}
