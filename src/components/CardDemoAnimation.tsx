"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CARDS = [
  { id: 1, text: "Focus is the new IQ.", author: "Cal Newport", color: "bg-indigo-500" },
  { id: 2, text: "Stillness speaks.", author: "Eckhart Tolle", color: "bg-purple-500" },
  { id: 3, text: "Less, but better.", author: "Dieter Rams", color: "bg-pink-500" },
  { id: 4, text: "He who has a why to live.", author: "Nietzsche", color: "bg-orange-500" },
];

export const CardDemoAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(timer);
  }, []);

  // Display only 2 cards at a time to create the stack effect
  const visibleCards = [
    CARDS[currentIndex],
    CARDS[(currentIndex + 1) % CARDS.length]
  ];

  return (
    <div className="relative w-full max-w-sm h-64 md:h-80 mx-auto perspective-1000 flex items-center justify-center pointer-events-none select-none">
       <AnimatePresence mode="popLayout">
          {visibleCards.map((card, i) => {
              // i=0 is front (active), i=1 is background (next)
              const isFront = i === 0;

              return (
                <motion.div
                    key={`${card.id}-${currentIndex}`} // Unique key to force re-render/animation
                    layout
                    initial={{ scale: 0.9, y: 30, opacity: 0 }}
                    animate={{ 
                        scale: isFront ? 1 : 0.9, 
                        y: isFront ? 0 : 30, 
                        opacity: isFront ? 1 : 0.5,
                        zIndex: isFront ? 10 : 5
                    }}
                    exit={{ 
                        x: 200, 
                        opacity: 0, 
                        rotate: 15, 
                        transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } 
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                    className="absolute inset-0 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center bg-white border border-gray-100"
                >
                    <div className={`w-12 h-12 rounded-full ${card.color} opacity-20 mb-4`} />
             
                    <h3 className="text-xl font-bold font-display text-gray-800 mb-2 leading-tight">
                        "{card.text}"
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                        {card.author}
                    </p>
                </motion.div>
              )
          })}
       </AnimatePresence>
    </div>
  );
};
