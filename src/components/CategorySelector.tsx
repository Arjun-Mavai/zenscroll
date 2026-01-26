"use client";

import { CATEGORIES, Category } from "@/data/quotes";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";

const LOCKED_CATEGORIES: Category[] = ['Business', 'Love', 'Wisdom', 'Philosophy', 'Science', 'Ted Wisdom', 'Scientific Proven'];

interface CategorySelectorProps {
  selected: Category;
  onSelect: (category: Category) => void;
  onLockedClick: () => void;
  categories?: Category[];
}

export const CategorySelector = ({ selected, onSelect, onLockedClick, categories }: CategorySelectorProps) => {
  const { isPro } = useAppStore();
  const displayCategories = categories || CATEGORIES;
  
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 px-4 no-scrollbar">
      <div className="flex space-x-3 w-max">
        {displayCategories.map((category) => {
          const isLocked = !isPro && LOCKED_CATEGORIES.includes(category);
          
          return (
          <button
            key={category}
            onClick={() => {
                if (isLocked) {
                    onLockedClick();
                } else {
                    onSelect(category);
                }
            }}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out border flex items-center gap-2",
              selected === category
                ? "bg-black text-white border-black shadow-lg scale-105"
                : "bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50",
               isLocked && "opacity-75 bg-gray-50 text-gray-400 border-dashed"
            )}
          >
            {isLocked && <Lock size={12} />}
            {category}
          </button>
        )})}
      </div>
    </div>
  );
};
