"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Quote as QuoteIcon } from 'lucide-react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  isFlipped?: boolean;
  onFlip?: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, className, isFlipped = false, onFlip }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle flip on click
  const handleFlip = () => {
    if (!isAnimating) {
      if (onFlip) {
        onFlip();
      }
      setIsAnimating(true);
      
      // Sound Effect (Viral Factor) - Short 'Woosh' / 'Click' Base64 to ensure it works immediately
      const audio = new Audio("data:audio/wav;base64,UklGRl9vTQAXAAAAZnGl"); // Placeholder or use file path if preferred
      // Using file path as primary for better quality, fallback to silent
      const woosh = new Audio('/sounds/flip.mp3');
      woosh.volume = 0.5;
      woosh.play().catch((e) => {
        audio.play().catch((e) => {
          console.log("Audio play failed (user interaction needed or file missing):", e);
        });
      });
    }
  };

  return (
    <div
      className={cn("relative group cursor-pointer perspective-1000", className)} 
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full duration-500 preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front - Quote Swipe Card Style (White Glass) */}
        <div className={cn(
            "absolute w-full h-full backface-hidden rounded-[2.5rem]",
            "bg-white/80 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]",
            "overflow-hidden flex flex-col items-center justify-center p-8 text-center",
            "transition-all duration-300 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
        )}>
            {/* Dynamic Mesh Orbs (Apple Music Vibe) */}
            <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[40%] bg-blue-50 blur-[60px] rounded-full pointer-events-none z-0 mix-blend-multiply opacity-60" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-purple-50 blur-[60px] rounded-full pointer-events-none z-0 mix-blend-multiply opacity-60" />
            
            {/* Glass Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-80 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
               <QuoteIcon className="w-8 h-8 text-indigo-500/20 mb-6 fill-current" />
               <div className="w-full">
                  {frontContent}
               </div>
            </div>
        </div>

        {/* Back - Darker Premium Reverse Side */}
        <div className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180 rounded-[2.5rem]",
            "bg-slate-900/95 backdrop-blur-3xl border border-white/10 shadow-xl",
            "p-8 flex items-center justify-center text-center overflow-hidden"
        )}>
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />
             <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[50%] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
             
             {/* Content */}
             <div className="relative z-10 w-full text-white">
                {backContent}
             </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
