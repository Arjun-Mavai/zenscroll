"use client"

import { useState } from "react";
import Link from "next/link";
import { syllabusData } from "@/data/syllabusData";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SyllabusPage() {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
       {/* Navigation Bar Placeholder (Matching Home Page Vibe) */}
       <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/app" className="flex items-center gap-2 font-bold text-xl font-display tracking-tight text-slate-900">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <Quote size={16} fill="currentColor" />
            </div>
            Mindful
          </Link>
          
          {/* Global Language Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
              <button
                onClick={() => setLanguage('hi')}
                className={cn(
                  "px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300",
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
                  "px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300",
                  language === 'en' 
                    ? "bg-white text-indigo-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                ENGLISH
              </button>
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-xs font-medium text-indigo-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                {syllabusData.exam_name}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-slate-900 leading-[1.1] mb-6">
                Master your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
                   Syllabus Journey.
                </span>
              </h1>
              
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                {syllabusData.subject}. Select a unit below to start your immersive learning experience.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Units Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(syllabusData.units).map(([key, unit], index) => {
            // Alternating gradients for the corner blob (Home Page style)
            const gradients = [
              "from-blue-400 to-indigo-500",
              "from-purple-400 to-pink-500",
              "from-amber-400 to-orange-500",
              "from-emerald-400 to-teal-500",
              "from-red-400 to-pink-500",
            ];
            const color = gradients[index % gradients.length];
            const title = language === 'en' && unit.title_en ? unit.title_en : unit.title;

            return (
              <motion.div key={key} variants={item}>
                <Link href={`/syllabus/${key}?lang=${language}`} className="block h-full group">
                  <div className="relative p-8 h-full rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    {/* Decorative Corner Blob */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 blur-2xl rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
                    
                    <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-md`}>
                             <span className="font-bold font-display text-lg">{index + 1}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display leading-tight">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {unit.topics.length} {language === 'hi' ? 'महत्वपूर्ण विषय' : 'Key Topics'}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {language === 'hi' ? 'फ्लैशकार्ड देखें' : 'View Flashcards'} <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
