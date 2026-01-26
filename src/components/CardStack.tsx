"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Card } from "@/components/Card";
import { Category, Quote } from "@/data/quotes";
import { useAppStore } from "@/hooks/useAppStore";

export const CardStack = ({ category, authorFilter, initialQuotes }: { category: Category; authorFilter: string | null; initialQuotes: Quote[] }) => {
  const [cards, setCards] = useState<Quote[]>([]);
  const { saveQuote, incrementSwipe } = useAppStore();

  useEffect(() => {
    // Determine base quotes from prop OR fallback to empty
    const allQuotes = initialQuotes || [];
    
    // Filter by Category
    let filtered = allQuotes.filter(q => q.category === category);
    
    // Apply Author Filter if selected
    if (authorFilter) {
        filtered = filtered.filter(q => q.author === authorFilter);
    }
    
    // Fallback logic for small datasets (duplication)
    if (filtered.length > 0 && filtered.length < 3) {
        setCards([...filtered, ...filtered.map(q => ({...q, id: q.id + '-dup'}))]);
    } else {
        setCards([...filtered, ...filtered.map(q => ({...q, id: q.id + '-dup'}))]);
    }
  }, [category, authorFilter, initialQuotes]);

  const handleSwipe = (direction: 'left' | 'right', id: string, quote: Quote) => {
    incrementSwipe();
    
    if (direction === 'right') {
      saveQuote(quote);
    }

    setCards((prev) => {
      const newCards = prev.filter((c) => c.id !== id);
      
      if (newCards.length < 5) {
        // Fetch more based on current filter from initialQuotes
        const allQuotes = initialQuotes || [];
        let possibleQuotes = allQuotes.filter(q => q.category === category);

        if (authorFilter) {
            possibleQuotes = possibleQuotes.filter(q => q.author === authorFilter);
        }

        if (possibleQuotes.length === 0) return newCards;

        const moreQuotes = possibleQuotes.map(q => ({
            ...q, 
            id: q.id + '-' + Math.random().toString(36).substr(2, 9)
        }));
        return [...newCards, ...moreQuotes];
      }
      
      return newCards;
    });
  };

  if (cards.length === 0) return null;

  return (
    <div className="relative w-full max-w-sm h-[600px] flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {cards.slice(0, 3).map((card, index) => (
          <Card
            key={card.id}
            quote={card}
            index={index}
            draggable={index === 0}
            onSwipe={(dir) => handleSwipe(dir, card.id, card)}
            onSave={(q) => {
                saveQuote(q);
                // Optional: also remove card after save tap?
                // For now, let's just save and keep it there, or swipe right automatically?
                // Let's just save.
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
