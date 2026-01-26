"use client";

import { useState, useEffect } from "react";
import { CardStack } from "@/components/CardStack";
import { Category, Quote } from "@/data/quotes";
import { SavedQuotes } from "@/components/SavedQuotes";
import { useAppStore } from "@/hooks/useAppStore";
import { Heart, User } from "lucide-react";
import { PaywallModal } from "@/components/PaywallModal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FilterBar } from "@/components/FilterBar";
import { QUOTES } from "@/data/quotes"; // Import QUOTES directly for now

// Extended props to accept initial data from Server Component
interface DashboardProps {
  initialCategories: Category[];
  initialQuotes: any[]; // Use any or specific Quote type from DB if shapes match
}

export default function Dashboard({ initialCategories, initialQuotes }: DashboardProps) {
  const [category, setCategory] = useState<Category>("Spirituality");
  const [author, setAuthor] = useState<string | null>(null);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const { savedQuotes, removeQuote, swipeCount, isPro, upgradeToPro, syncProStatus, isZenMode, toggleZenMode } = useAppStore();

  // If initialCategories is passed, use the first one as default?
  // Or keep Spirituality.
  // Note: we might want to update FilterBar to use initialCategories instead of local QUOTES logic


  // Check paywall on mount and whenever swipeCount changes
  // Sync Pro Status
  useEffect(() => {
      async function syncStatus() {
          try {
              const res = await fetch('/api/auth/me');
              if (res.ok) {
                  const data = await res.json();
                  syncProStatus(!!data.user.is_pro);
              }
          } catch (e) {
              console.error("Failed to sync pro status", e);
          }
      }
      syncStatus();
  }, [syncProStatus]);

  // Check paywall on mount and whenever swipeCount changes
  useEffect(() => {
    if (!isPro && swipeCount >= 10) {
        setShowPaywall(true);
    }
  }, [swipeCount, isPro]);

  return (
    <main className={cn(
        "flex h-dvh flex-col items-center justify-between p-4 overflow-hidden transition-colors duration-700",
        isZenMode 
            ? "bg-slate-950 text-slate-100" 
            : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900"
    )}>
      <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center relative z-10">
        
        {/* Header */}
        <div className="w-full flex items-center justify-between px-4 transition-opacity duration-300">
          <div className="text-left">
            <h1 className={cn("text-2xl md:text-3xl font-bold tracking-tight font-display transition-colors", isZenMode ? "text-white" : "text-gray-900")}>
              Mindful
            </h1>
            <p className={cn("text-xs md:text-sm", isZenMode ? "text-slate-400" : "text-gray-500")}>
              {isZenMode ? "Zen Mode Active" : "Daily Wisdom"}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
             <Link 
                href="/app/profile"
                className={cn(
                    "p-3 rounded-full shadow-sm border transition-all",
                    isZenMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-gray-100 text-gray-700 hover:shadow-md"
                )}
             >
                <User size={20} />
             </Link>
            <button
                onClick={() => {
                    if (!isPro) {
                        setShowPaywall(true);
                    } else {
                        toggleZenMode();
                    }
                }}
                className={cn(
                    "p-3 rounded-full shadow-sm border transition-all relative group",
                    isZenMode ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-white border-gray-100 hover:shadow-md"
                )}
            >
                <div className={cn("w-5 h-5 rounded-full", isZenMode ? "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "bg-gray-200 group-hover:bg-indigo-200")} />
            </button>

            <button 
                onClick={() => setIsSavedOpen(true)}
                className={cn(
                    "p-3 rounded-full shadow-sm border transition-all relative",
                    isZenMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white" : "bg-white border-gray-100 text-gray-700 hover:text-red-500 hover:shadow-md"
                )}
            >
                <Heart size={20} className="transition-colors" />
                {savedQuotes.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] items-center justify-center flex rounded-full font-bold">
                    {savedQuotes.length}
                </span>
                )}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div 
            className="w-full transition-opacity duration-300 mt-6 mb-2"
        >
            <FilterBar 
                category={category} 
                setCategory={setCategory} 
                author={author}
                setAuthor={setAuthor}
                onLockedClick={() => setShowPaywall(true)}
                availableQuotes={initialQuotes || []} 
                categories={initialCategories}
            />
        </div>

        <div className="w-full relative flex-1 min-h-[500px] flex items-center justify-center py-8">
            {/* Background Ambience for Zen Mode */}
            {isZenMode && (
                <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>
            )}
           <CardStack 
                category={category} 
                authorFilter={author} 
                initialQuotes={initialQuotes} 
            />
        </div>

        <p className={cn("text-xs text-center pb-4 transition-colors", isZenMode ? "text-slate-500" : "text-gray-400")}>
          Swipe right or tap heart to save • {isPro ? "Unlimited Swipes" : `${10 - swipeCount} swipes left`}
        </p>
      </div>

      <SavedQuotes 
        isOpen={isSavedOpen} 
        onClose={() => setIsSavedOpen(false)} 
        savedQuotes={savedQuotes}
        onRemove={removeQuote}
      />

      <PaywallModal 
        isOpen={showPaywall} 
        onClose={() => setShowPaywall(false)} 
      />
    </main>
  );
}
