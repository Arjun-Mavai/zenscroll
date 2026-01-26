"use client";

import { useState, useMemo } from "react";
import { Category, Quote } from "@/data/quotes";
import { CategorySelector } from "@/components/CategorySelector";
import { cn } from "@/lib/utils";
import { Filter, User, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBarProps {
  category: Category;
  setCategory: (c: Category) => void;
  author: string | null;
  setAuthor: (a: string | null) => void;
  onLockedClick: () => void;
  availableQuotes: Quote[]; // Used to derive authors
  categories?: Category[]; // Computed categories from server
}

export const FilterBar = ({ category, setCategory, author, setAuthor, onLockedClick, availableQuotes, categories }: FilterBarProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

  // Derive unique authors for the selected category
  const authors = useMemo(() => {
    const categoryQuotes = availableQuotes.filter(q => q.category === category);
    const uniqueAuthors = Array.from(new Set(categoryQuotes.map(q => q.author)));
    return uniqueAuthors.sort();
  }, [category, availableQuotes]);

  return (
    <div className="w-full flex flex-col items-center gap-4 relative z-50">
      
      {/* Visual Controls Container */}
      <div className="flex items-center gap-6">
          {/* Category Toggle (Icon Only) */}
          <div className="flex flex-col items-center gap-2">
            <button 
                onClick={() => {
                    setIsCategoriesOpen(!isCategoriesOpen);
                    setIsAuthorsOpen(false); // Close others
                }}
                className={cn(
                    "p-3 rounded-full transition-all duration-300 shadow-sm border",
                    isCategoriesOpen 
                        ? "bg-gray-900 text-white border-gray-900 scale-110" 
                        : "bg-white/80 backdrop-blur-md text-gray-500 border-white/50 hover:bg-white hover:text-gray-900"
                )}
            >
                <Filter size={20} />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {isCategoriesOpen ? "Close" : category}
            </span>
          </div>

          {/* Author Toggle (Icon Only) */}
          {authors.length > 0 && (
             <div className="flex flex-col items-center gap-2">
                <button 
                    onClick={() => {
                        setIsAuthorsOpen(!isAuthorsOpen);
                        setIsCategoriesOpen(false); // Close others
                    }}
                    className={cn(
                        "p-3 rounded-full transition-all duration-300 shadow-sm border",
                        isAuthorsOpen 
                            ? "bg-gray-900 text-white border-gray-900 scale-110" 
                            : "bg-white/80 backdrop-blur-md text-gray-500 border-white/50 hover:bg-white hover:text-gray-900"
                    )}
                >
                    <User size={20} />
                </button>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {isAuthorsOpen ? "Close" : (author || "All Authors")}
                </span>
             </div>
          )}
      </div>

      {/* Expanded Sections */}
      <AnimatePresence mode="wait">
        {/* Category Section */}
        {isCategoriesOpen && (
            <motion.div 
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                className="overflow-hidden w-full"
            >
                <CategorySelector 
                    selected={category} 
                    onSelect={(c) => {
                        setCategory(c);
                        setAuthor(null);
                        // setIsCategoriesOpen(false); // Keep open for browsing or close? User said "immersive", maybe keep open until clicked away.
                    }} 
                    onLockedClick={onLockedClick}
                    categories={categories}
                />
            </motion.div>
        )}

        {/* Author Section */}
        {isAuthorsOpen && (
            <motion.div 
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                className="overflow-hidden w-full"
            >
                    <div className="w-full">
                        <div 
                            className="w-full overflow-x-auto md:overflow-visible pb-2 px-1 no-scrollbar scroll-smooth flex justify-center"
                            onWheel={(e) => {
                                if (window.innerWidth < 768 && e.deltaY !== 0) {
                                    e.currentTarget.scrollLeft += e.deltaY;
                                    e.preventDefault();
                                }
                            }}
                        >
                            <div className="flex md:flex-wrap items-center space-x-2 md:space-x-1 md:gap-2 w-max md:w-full md:justify-center px-4">
                                <button
                                    onClick={() => setAuthor(null)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap",
                                        author === null
                                            ? "bg-gray-900 text-white border-gray-900"
                                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    )}
                                >
                                    All
                                </button>

                                {authors.map((auth) => (
                                    <button
                                        key={auth}
                                        onClick={() => setAuthor(auth)}
                                        className={cn(
                                            "px-4 py-2 rounded-full text-sm font-medium transition-all border whitespace-nowrap",
                                            author === auth
                                                ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                        )}
                                    >
                                        {auth}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
