"use client"

import React, { use, useState, useEffect } from 'react';
import { useRouter, notFound, useSearchParams } from 'next/navigation';
import FlipCard from '@/components/FlipCard';
import { syllabusData } from '@/data/syllabusData';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles, Brain, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SideDrawer } from '@/components/SideDrawer';

// Types for the params
type Props = {
  params: Promise<{ unitId: string }>
}

export default function UnitPage({ params }: Props) {
  const resolvedParams = use(params);
  const { unitId } = resolvedParams;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get language from URL param, default to Hindi
  const langParam = searchParams.get('lang');
  const [language, setLanguage] = useState<'hi' | 'en'>(langParam === 'en' ? 'en' : 'hi');
  
  // SideDrawer State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

  const unit = syllabusData.units[unitId];

  if (!unit) {
    notFound();
  }

  // Effect to sync URL param change if needed
  useEffect(() => {
     if (langParam === 'en' || langParam === 'hi') {
         setLanguage(langParam as 'hi' | 'en');
     }
  }, [langParam]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  // Select topics based on language
  // Fallback to empty array if specific language topics not found to prevent crash
  const currentTopics = (language === 'en' && unit.topics_en) ? unit.topics_en : (unit.topics || []);
  const currentTitle = (language === 'en' && unit.title_en) ? unit.title_en : unit.title;

  const handleOpenDetails = (topic: any) => {
    setSelectedTopic(topic);
    setIsDrawerOpen(true);
  };

  // Helper to render markdown-like bold text
  const renderText = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-2">
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-slate-900 dark:text-white font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      {/* Sticky Premium Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
           <button 
             onClick={() => router.back()}
             className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors flex items-center text-slate-600 group"
           >
             <ArrowLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
             <span className="font-medium hidden sm:inline">Back</span>
           </button>
           
           <h1 className="text-sm sm:text-lg font-bold truncate max-w-[150px] sm:max-w-md text-slate-900 font-display">
             {currentTitle}
           </h1>

           <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
              <button
                onClick={() => setLanguage('hi')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-full transition-all duration-200",
                  language === 'hi' 
                    ? "bg-white text-indigo-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-full transition-all duration-200",
                  language === 'en' 
                    ? "bg-white text-indigo-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                ENG
              </button>
           </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-10 px-6">
        <div className="mb-10 text-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                {currentTopics.length} Topics
            </span>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
               {language === 'hi' 
                 ? "फ्लैशकार्ड पर टैप करके विस्तार से पढ़ें। अधिक जानकारी के लिए 'ट्रिक्स देखें' दबाएं।" 
                 : "Tap cards to flip. Use 'View Tricks' for mnemonics and deeper insights."}
            </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          key={language} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {currentTopics.map((topic) => (
            <motion.div key={topic.id} variants={item}>
              <FlipCard
                className="h-[400px] w-full"
                frontContent={
                  <div className="flex flex-col items-center justify-center p-2 h-full relative z-10 w-full">
                    <span className="text-8xl mb-6 opacity-5 font-serif absolute top-4 right-4 text-slate-900 pointer-events-none">
                      {topic.id.toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display leading-[1.2] text-center drop-shadow-sm px-4">
                      {topic.front}
                    </h3>
                  </div>
                }
                backContent={
                  <div className="flex flex-col h-full w-full">
                    <div className="flex items-center mb-4 pb-4 border-b border-white/10 w-full shrink-0">
                        <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded text-white mr-3 tracking-wider">
                             #{topic.id}
                        </span>
                        <h4 className="text-sm font-bold text-white truncate flex-1 opacity-90">{topic.front}</h4>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto w-full pr-1 custom-scrollbar mb-4">
                        <p className="text-white/90 text-lg leading-relaxed font-normal">
                           {topic.back}
                        </p>
                    </div>

                    <div className="mt-auto pt-2">
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOpenDetails(topic);
                            }}
                            className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold text-white transition-colors flex items-center justify-center gap-2 group border border-white/5"
                        >
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                            {language === 'hi' ? 'स्मरण ट्रिक्स देखें' : 'View Mnemonics & Details'}
                        </button>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Dynamic Sidebar */}
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        title={selectedTopic?.front}
      >
         <div className="space-y-8">
            <section>
                <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-xs mb-3">
                    <Brain className="w-4 h-4" /> Concept Mastery
                </h3>
                <div className="text-slate-600 leading-relaxed text-lg">
                    {selectedTopic?.details ? renderText(selectedTopic.details) : (
                        <p className="italic text-slate-400">
                             {language === 'hi' ? 'विस्तृत जानकारी शीघ्र उपलब्ध होगी।' : 'Detailed analysis coming soon.'}
                        </p>
                    )}
                </div>
            </section>

            <section>
                <h3 className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
                    <Lightbulb className="w-4 h-4" /> Mnemonics & Tricks
                </h3>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
                     <div className="relative z-10 text-amber-900 font-medium text-lg">
                        {selectedTopic?.mnemonic ? (
                            <>
                                <span className="block text-xs uppercase text-amber-600/70 mb-2 font-bold tracking-widest">Memory Hook</span>
                                "{selectedTopic.mnemonic}"
                            </>
                        ) : (
                            <p className="italic text-amber-800/60 text-sm">
                                {language === 'hi' ? 'कोई ट्रिक उपलब्ध नहीं है।' : 'No specific mnemonic needed for this topic.'}
                            </p>
                        )}
                     </div>
                </div>
            </section>
         </div>
      </SideDrawer>
    </div>
  );
}
