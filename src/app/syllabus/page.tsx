"use client"

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { syllabusData, Topic, UnitData } from "@/data/syllabusData";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Menu, 
  BookOpen, 
  Sparkles,
  Quote,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/store/useSettingsStore";
import { SyllabusSearch } from "@/components/SyllabusSearch";
import { ViewToggle } from "@/components/ViewToggle";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

function SyllabusContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, setLanguage } = useSettingsStore();

  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix for Persist middleware
  useEffect(() => {
    setIsMounted(true);
    // Optional: Sync from URL if present, otherwise store prevails
    const urlLang = searchParams.get('lang');
    if (urlLang === 'en' || urlLang === 'hi') {
        if (urlLang !== language) setLanguage(urlLang);
    }
  }, []);

  // Keyboard shortcut for Command Palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- Sticky Navigation with Glassmorphism --- */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            
            {/* Left: Brand & Search Trigger */}
            <div className="flex items-center gap-4">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden text-slate-600"
                    onClick={() => setOpen(true)}
                >
                    <Menu className="w-5 h-5" />
                </Button>
                
                <Link href="/app" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                         <Quote size={18} fill="currentColor" className="text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900 hidden md:block">
                        Mindful
                    </span>
                </Link>

                {/* Desktop Search Button */}
                <Button 
                    variant="outline" 
                    onClick={() => setOpen(true)}
                    className="ml-4 h-9 w-64 justify-between bg-slate-50/50 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-white transition-all hidden md:flex shadow-sm"
                >
                    <span className="text-xs font-medium flex items-center gap-2">
                         <Search className="w-3.5 h-3.5" /> 
                         {language === 'hi' ? 'विषय खोजें...' : 'Search topics...'}
                    </span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div>


            {/* Right: Language Tabs */}
            <div>
               <Tabs defaultValue={language} onValueChange={(val) => setLanguage(val as 'en' | 'hi')} className="w-[180px]">
                  <TabsList className="grid w-full grid-cols-2 h-9 bg-slate-100/80 p-1">
                    <TabsTrigger 
                        value="hi" 
                        className="text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all"
                    >
                        हिंदी
                    </TabsTrigger>
                    <TabsTrigger 
                        value="en" 
                        className="text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all"
                    >
                        ENGLISH
                    </TabsTrigger>
                  </TabsList>
               </Tabs>
            </div>
        </div>
      </nav>

      {/* --- Global Command Palette (Search) --- */}
      <SyllabusSearch open={open} setOpen={setOpen} />


      {/* --- Main Content --- */}
      <div className="pt-32 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-xs font-bold text-indigo-600 shadow-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                {syllabusData.exam_name}
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.1]">
                {language === 'hi' ? 'आपका सिलेबस,' : 'Your Syllabus,'} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    {language === 'hi' ? 'आपकी उंगलियों पर।' : 'Mastered.'}
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                 {syllabusData.subject}
              </p>

              <div className="pt-4 flex justify-center gap-6 items-center flex-col sm:flex-row">
                  <Link href="/syllabus/quiz">
                      <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all group">
                         <Sparkles className="w-5 h-5 mr-2 text-yellow-400 group-hover:rotate-12 transition-transform" />
                         {language === 'hi' ? 'क्विज़ खेलें' : 'Start Practice Quiz'}
                      </Button>
                  </Link>

                  <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
          </motion.div>


          {/* Units Grid/List */}
          {viewMode === 'grid' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {Object.entries(syllabusData.units).map(([key, unit], index) => {
                    const title = language === 'en' && unit.title_en ? unit.title_en : (unit.unit_title || unit.title);
                    const topicsCount = (language === 'en' && unit.topics_en ? unit.topics_en : unit.topics).length;
                    
                    // Gradients for cards
                    const gradients = [
                      "from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 border-blue-200/50",
                      "from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-200/50",
                      "from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-emerald-200/50",
                      "from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border-amber-200/50",
                      "from-rose-500/10 to-red-500/10 hover:from-rose-500/20 hover:to-red-500/20 border-rose-200/50",
                    ];
                    const themeClass = gradients[index % gradients.length];
                    const iconColor = ["text-blue-600", "text-purple-600", "text-emerald-600", "text-amber-600", "text-rose-600"][index % 5];

                    return (
                       <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                       >
                          <Link href={`/syllabus/${key}?lang=${language}`}>
                             <Card className={cn(
                                 "h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/50 backdrop-blur-sm border",
                                 themeClass
                             )}>
                                <CardContent className="p-0">
                                    <div className="p-6 relative">
                                       {/* Unit Number Badge */}
                                       <div className="absolute top-6 right-6 font-display font-bold text-4xl text-slate-100 select-none z-0">
                                           {index + 1}
                                       </div>

                                       <div className="relative z-10 space-y-4">
                                           {/* Icon Placeholder or Badge */}
                                           <div className={cn("inline-flex p-3 rounded-2xl bg-white shadow-sm border border-slate-100", iconColor)}>
                                               <BookOpen size={24} strokeWidth={2} />
                                           </div>

                                           <div className="space-y-2">
                                               <h3 className="font-bold text-xl leading-tight text-slate-900 line-clamp-2 min-h-[3.5rem]">
                                                   {title}
                                               </h3>
                                               <div className="flex items-center text-sm font-medium text-slate-500">
                                                   <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                                   {topicsCount} {language === 'hi' ? 'विषय' : 'Topics'}
                                               </div>
                                           </div>
                                       </div>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="px-6 py-4 border-t border-slate-100/50 bg-white/50 flex items-center justify-between group">
                                        <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 uppercase tracking-wider transition-colors">
                                           {language === 'hi' ? 'खोजें' : 'Explore'}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </CardContent>
                             </Card>
                          </Link>
                       </motion.div>
                    );
                })}
             </div>
          ) : (
             <div className="max-w-4xl mx-auto space-y-4 pb-20">
                {Object.entries(syllabusData.units).map(([key, unit], index) => {
                    const title = language === 'en' && unit.title_en ? unit.title_en : (unit.unit_title || unit.title);
                    const topicsCount = (language === 'en' && unit.topics_en ? unit.topics_en : unit.topics).length;
                    
                    return (
                       <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                       >
                          <Link href={`/syllabus/${key}?lang=${language}`}>
                             <div className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all flex items-center gap-6 cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-display font-bold text-xl text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors z-10">
                                    {index + 1}
                                </div>
                                
                                <div className="flex-1 min-w-0 z-10">
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-700 transition-colors truncate">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium">
                                        {topicsCount} {language === 'hi' ? 'विषय' : 'Topics'}
                                    </p>
                                </div>

                                <div className="text-slate-300 group-hover:text-indigo-500 transition-all group-hover:translate-x-1 z-10">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                             </div>
                          </Link>
                       </motion.div>
                    );
                })}
             </div>
          )}
      </div>

    </div>
  );
}

export default function SyllabusPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
            <SyllabusContent />
        </Suspense>
    )
}
