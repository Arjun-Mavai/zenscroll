import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import { Quote } from "@/data/quotes";
import { cn } from "@/lib/utils";
import { Quote as QuoteIcon, Heart } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";

interface CardProps {
  quote: Quote;
  onSwipe: (direction: "left" | "right") => void;
  onSave?: (quote: Quote) => void;
  index: number;
  draggable: boolean;
}

export const Card = ({ quote, onSwipe, onSave, index, draggable }: CardProps) => {
  const { savedQuotes } = useAppStore();
  const isSaved = savedQuotes.some(q => q.id === quote.id);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  // Background color for swipe indication
  const bg = useTransform(
    x,
    [-200, -50, 50, 200],
    ["rgba(239, 68, 68, 0.1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(34, 197, 94, 0.1)"]
  );

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        zIndex: 100 - index,
        scale: 1 - index * 0.05, // Scale down cards behind
        y: index * 10, // Move cards behind down
      }}
      drag={draggable ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ 
        scale: 1 - index * 0.05, 
        opacity: 1 - index * 0.2, // Fade out cards behind
        y: index * 20 
      }}
      exit={{ x: x.get() < 0 ? -200 : 200, opacity: 0, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "absolute top-0 w-full h-full max-w-sm aspect-[3/4] rounded-3xl",
        "bg-white border text-center flex flex-col items-center justify-center p-8 shadow-2xl transition-shadow",
        draggable ? "cursor-grab active:cursor-grabbing shadow-indigo-200/50" : "cursor-default",
        "select-none touch-none will-change-transform"
      )}
    >
        <motion.div 
            style={{ backgroundColor: bg }}
            className="absolute inset-0 rounded-3xl -z-10 transition-colors" 
        />
        
        {/* Swipe Indicators (Only visible when dragging) */}
        <motion.div style={{ opacity: useTransform(x, [50, 100], [0, 1]) }} className="absolute top-8 left-8 border-4 border-green-500 text-green-500 rounded-xl px-4 py-2 font-bold text-2xl -rotate-12 z-20">
            SAVE
        </motion.div>
        <motion.div style={{ opacity: useTransform(x, [-100, -50], [1, 0]) }} className="absolute top-8 right-8 border-4 border-red-500 text-red-500 rounded-xl px-4 py-2 font-bold text-2xl rotate-12 z-20">
            PASS
        </motion.div>
        
        <QuoteIcon className="w-12 h-12 text-blue-500 mb-8 opacity-20" />
        
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-snug mb-8 relative z-10 italic">
            "{quote.text}"
        </h2>
        
        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            — {quote.author}
        </p>
        
        {onSave && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onSave(quote);
            }}
            className="mt-8 p-3 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors z-50 pointer-events-auto cursor-pointer"
          >
            <Heart 
                size={24} 
                className={cn(isSaved && "text-red-500 fill-red-500")}
            />
          </motion.button>
        )}

        <div className="absolute bottom-6 text-xs text-gray-300 font-mono">
            {quote.category}
        </div>
    </motion.div>
  );
};
