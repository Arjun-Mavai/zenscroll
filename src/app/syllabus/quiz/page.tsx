"use client";

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { syllabusData, Topic } from '@/data/syllabusData';
import { useSettingsStore } from '@/store/useSettingsStore';
import { 
  ArrowLeft, 
  Trophy, 
  Flame, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import confetti from 'canvas-confetti';
import { SyllabusSearch } from '@/components/SyllabusSearch';

type QuestionState = 'idle' | 'correct' | 'wrong';

export default function QuizPage() {
  const router = useRouter();
  const { language } = useSettingsStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Game State
  const [currentTopic, setCurrentTopic] = useState<{ topic: Topic, unitKey: string } | null>(null);
  const [options, setOptions] = useState<{ key: string, title: string }[]>([]);
  const [status, setStatus] = useState<QuestionState>('idle');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Flatten topics for random selection
  const allTopics = useMemo(() => {
    const list: { unitKey: string, topic: Topic }[] = [];
    Object.entries(syllabusData.units).forEach(([unitKey, unit]) => {
      const topics = language === 'en' && unit.topics_en ? unit.topics_en : unit.topics;
      topics.forEach(t => list.push({ unitKey, topic: t }));
    });
    return list;
  }, [language]);

  const generateQuestion = useCallback(() => {
    if (allTopics.length === 0) return;

    // Pick random topic
    const randomIndex = Math.floor(Math.random() * allTopics.length);
    const target = allTopics[randomIndex];
    
    // Pick distractors
    const allUnitKeys = Object.keys(syllabusData.units);
    const correctKey = target.unitKey;
    const distractors = allUnitKeys
        .filter(k => k !== correctKey)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    // Assemble options
    const finalKeys = [...distractors, correctKey].sort(() => 0.5 - Math.random());
    const finalOptions = finalKeys.map(key => {
        const u = syllabusData.units[key];
        return {
            key,
            title: language === 'en' && u.title_en ? u.title_en : (u.unit_title || u.title || "")
        };
    });

    setCurrentTopic(target);
    setOptions(finalOptions);
    setStatus('idle');
    setSelectedOption(null);
  }, [allTopics, language]);

  // Initial load
  useEffect(() => {
    generateQuestion();
    
    // Shortcut for Search
    const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsSearchOpen((open) => !open);
        }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [generateQuestion]);

  const handleAnswer = (key: string) => {
    if (status !== 'idle' || !currentTopic) return;
    
    setSelectedOption(key);
    
    if (key === currentTopic.unitKey) {
        setStatus('correct');
        setScore(s => s + 10);
        setStreak(s => s + 1);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(generateQuestion, 1500); // Auto-advance? Maybe wait for user. A bit faster is better for flow.
    } else {
        setStatus('wrong');
        setStreak(0);
    }
  };

  const nextQuestion = () => {
    generateQuestion();
  };

  if (!currentTopic) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 selection:bg-indigo-100 selection:text-indigo-900">
        
        {/* Header */}
        <div className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                 <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
                     <ArrowLeft className="w-5 h-5 text-slate-600" />
                 </button>
                 
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full">
                        <Trophy className="w-4 h-4" />
                        <span>{score}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full">
                        <Flame className="w-4 h-4" />
                        <span>{streak}</span>
                    </div>
                 </div>
            </div>
        </div>

        <SyllabusSearch open={isSearchOpen} setOpen={setIsSearchOpen} />

        <div className="pt-24 max-w-2xl mx-auto px-6 space-y-8">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-2"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {language === 'hi' ? 'अभ्यास मोड' : 'Practice Mode'}
                </span>
                <h1 className="text-2xl font-bold text-slate-900">
                    {language === 'hi' ? 'यह विषय किस इकाई से है?' : 'Which Unit does this Topic belong to?'}
                </h1>
            </motion.div>

            {/* Question Card */}
            <motion.div
                key={currentTopic.topic.id} // Re-render animation on new question
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
            >
                <Card className="border-2 border-indigo-100 shadow-xl bg-white/80 backdrop-blur">
                    <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6">
                         <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 mb-2">
                             <HelpCircle size={32} />
                         </div>
                         <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display leading-tight">
                             {currentTopic.topic.front}
                         </h2>
                         {currentTopic.topic.mnemonic && (
                             <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium border border-amber-100 flex items-center gap-2">
                                 <span className="text-xs font-bold uppercase border border-amber-200 px-1 rounded bg-white">Hint</span> 
                                 {currentTopic.topic.mnemonic}
                             </div>
                         )}
                    </CardContent>
                </Card>
            </motion.div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4">
                {options.map((opt, idx) => {
                    const isSelected = selectedOption === opt.key;
                    const isCorrect = opt.key === currentTopic.unitKey;
                    
                    let btnClass = "bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-600";
                    if (status !== 'idle') {
                        if (isCorrect) {
                            btnClass = "bg-emerald-100 border-2 border-emerald-500 text-emerald-800";
                        } else if (isSelected && !isCorrect) {
                            btnClass = "bg-rose-100 border-2 border-rose-500 text-rose-800";
                        } else {
                           btnClass = "bg-slate-50 border-slate-100 text-slate-300 opacity-50";
                        }
                    }

                    return (
                        <motion.button
                            key={opt.key}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(opt.key)}
                            disabled={status !== 'idle'}
                            className={`p-4 rounded-xl font-bold text-lg text-left transition-all flex items-center justify-between group ${btnClass}`}
                        >
                            <span>
                                <span className="mr-3 opacity-50 text-sm">opt. {idx+1}</span>
                                {opt.title}
                            </span>
                            
                            {status !== 'idle' && isCorrect && <CheckCircle className="text-emerald-600" />}
                            {status !== 'idle' && isSelected && !isCorrect && <XCircle className="text-rose-600" />}
                        </motion.button>
                    )
                })}
            </div>

            {/* Next Button (only if wrong, otherwise auto-advance logic handles it, or manual button if preferred) */}
            {status === 'wrong' && (
                <div className="flex justify-center pt-4">
                    <Button onClick={nextQuestion} size="lg" className="w-full md:w-auto bg-slate-900 text-white">
                        Next Question <RefreshCw className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            )}
             {status === 'correct' && (
                <div className="flex justify-center pt-4">
                    <p className="text-emerald-600 font-bold animate-pulse">Correct! Next question coming...</p>
                </div>
            )}

        </div>

    </div>
  );
}
