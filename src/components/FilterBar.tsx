"use client";

import { useMemo } from "react";
import { Category, Quote } from "@/data/quotes";
import { CategorySelector } from "@/components/CategorySelector";
import { cn } from "@/lib/utils";
import { Filter, User } from "lucide-react";

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
  // Derive unique authors for the selected category
  const authors = useMemo(() => {
    const categoryQuotes = availableQuotes.filter(q => q.category === category);
    const uniqueAuthors = Array.from(new Set(categoryQuotes.map(q => q.author)));
    return uniqueAuthors.sort();
  }, [category, availableQuotes]);

  return (
    <div className="w-full space-y-4">
      {/* Category Selector (Existing logic) */}
      <CategorySelector 
        selected={category} 
        onSelect={(c) => {
            setCategory(c);
            setAuthor(null); // Reset author when category changes
        }} 
        onLockedClick={onLockedClick}
        categories={categories}
      />

      {/* Author Filter (Horizontal Scroll) */}
      {authors.length > 0 && (
        <div className="w-full overflow-x-auto pb-2 px-4 no-scrollbar">
            <div className="flex items-center space-x-2 w-max">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">
                    <Filter size={12} />
                    <span>Filter:</span>
                </div>

                <button
                    onClick={() => setAuthor(null)}
                    className={cn(
                        "px-4 py-1.5 rounded-full text-xs font-medium transition-all border",
                        author === null
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                    )}
                >
                    All Authors
                </button>

                {authors.map((auth) => (
                    <button
                        key={auth}
                        onClick={() => setAuthor(auth)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-medium transition-all border flex items-center gap-1.5",
                            author === auth
                                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                                : "bg-white text-gray-500 border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
                        )}
                    >
                        <User size={10} />
                        {auth}
                    </button>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};
