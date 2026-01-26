import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Quote } from "@/data/quotes";

interface AppState {
  savedQuotes: Quote[];
  swipeCount: number;
  lastSwipeDate: string;
  isPro: boolean;
  isZenMode: boolean;
  
  // Actions
  saveQuote: (quote: Quote) => void;
  removeQuote: (id: string) => void;
  incrementSwipe: () => void;
  upgradeToPro: () => void;
  resetSwipeCount: () => void;
  toggleZenMode: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      savedQuotes: [],
      swipeCount: 0,
      lastSwipeDate: new Date().toDateString(),
      isPro: false,
      isZenMode: false,

      saveQuote: (quote) =>
        set((state) => {
          if (state.savedQuotes.some((q) => q.id === quote.id)) return state;
          return { savedQuotes: [...state.savedQuotes, quote] };
        }),

      removeQuote: (id) =>
        set((state) => ({
          savedQuotes: state.savedQuotes.filter((q) => q.id !== id),
        })),

      incrementSwipe: () =>
        set((state) => {
          const today = new Date().toDateString();
          // Reset if new day
          if (state.lastSwipeDate !== today) {
            return { swipeCount: 1, lastSwipeDate: today };
          }
          return { swipeCount: state.swipeCount + 1 };
        }),

      upgradeToPro: () => set({ isPro: true }),
      toggleZenMode: () => set((state) => ({ isZenMode: !state.isZenMode })),
      resetSwipeCount: () => set({ swipeCount: 0 }),
    }),
    {
      name: "mindful-storage", // name of the item in localStorage
    }
  )
);
