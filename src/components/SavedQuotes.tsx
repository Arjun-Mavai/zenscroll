"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Heart } from "lucide-react";
import { Quote } from "@/data/quotes";

interface SavedQuotesProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: Quote[];
  onRemove: (id: string) => void;
}

export const SavedQuotes = ({ isOpen, onClose, savedQuotes, onRemove }: SavedQuotesProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden flex flex-col border-l"
          >
            <div className="p-6 border-b flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-2">
                <Heart className="text-red-500 fill-current" size={20} />
                <h2 className="text-xl font-bold font-display text-gray-900">
                  Your Collection
                </h2>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">
                    {savedQuotes.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {savedQuotes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
                  <Heart size={48} className="text-gray-300" />
                  <p className="text-gray-500">No saved quotes yet.<br/>Swipe right or tap the heart to save.</p>
                </div>
              ) : (
                savedQuotes.map((quote) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={quote.id}
                    className="bg-gray-50 p-6 rounded-2xl relative group border hover:border-gray-200 transition-colors"
                  >
                    <button
                      onClick={() => onRemove(quote.id)}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                    <p className="text-gray-800 font-medium leading-relaxed mb-3 pr-8">
                      "{quote.text}"
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="uppercase tracking-wider font-semibold">{quote.author}</span>
                      <span className="bg-white border px-2 py-1 rounded-md">{quote.category}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
