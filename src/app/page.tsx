
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Zap, Quote, Brain, Smartphone, Heart, Sun, Activity } from "lucide-react";
import { CardDemoAnimation } from "@/components/CardDemoAnimation";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase for Server Component
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('auth_token')?.value;

  if (!userId) return null;

  const { data: user } = await supabase
    .from('card_users')
    .select('id, name, is_pro')
    .eq('id', userId)
    .single();

  return user;
}

export default async function LandingPage() {
  const user = await getUser();
  const isLoggedIn = !!user;
  const isPro = !!user?.is_pro;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl font-display tracking-tight">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <Quote size={16} fill="currentColor" />
            </div>
            Mindful
          </div>
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
                <Link 
                  href="/login" 
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  Sign In
                </Link>
            ) : (
                <div className="text-sm font-medium text-gray-600">
                    Welcome, {user?.name || 'Friend'}
                </div>
            )}
            
            <Link 
              href="/app" 
              className="px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              {isLoggedIn ? "Dashboard" : "Get Started"}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                New: Zen Mode Available
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-slate-900 leading-[1.1]">
              Quiet the noise. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
                Feed your soul.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Trade the chaos of endless scrolling for moments of clarity. 
              A curated sanctuary where wisdom meets focus—designed for your growth, not your addiction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {!isPro ? (
                     <Link 
                     href="/app" 
                     className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:scale-105 transition-transform flex items-center gap-2"
                     >
                     Start Free Trial <ArrowRight size={18} />
                     </Link>
                ) : (
                    <Link 
                    href="/app" 
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-indigo-200"
                    >
                    <Sparkles size={18} /> Enter Sanctuary 
                    </Link>
                )}
               
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden">
                            <Image src="/avatar1.png" alt="User 1" fill className="object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden">
                            <Image src="/avatar2.png" alt="User 2" fill className="object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden">
                            <Image src="/avatar3.png" alt="User 3" fill className="object-cover" />
                        </div>
                    </div>
                    <span>Join 1,000+ mindful users</span>
                </div>
            </div>
          </div>
          
          {/* Visual Animation */}
          <div className="relative flex justify-center py-12 lg:py-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse" />
            <CardDemoAnimation />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                    Your brain on Doomscrolling
                </h2>
                <p className="text-gray-500 text-lg">
                    Social media apps are engineered to fragment your attention span. 
                    We built the antidote.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4 text-red-600 font-bold">
                        <Smartphone size={24} />
                        <h3>The Problem</h3>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-red-300 mt-1 shrink-0" size={16} />
                            <span>Average attention span dropped to 8 seconds</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-red-300 mt-1 shrink-0" size={16} />
                            <span>Constant dopamine spikes cause brain fog</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-red-300 mt-1 shrink-0" size={16} />
                            <span>Algorithm feeds anxiety, not growth</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                    <div className="flex items-center gap-3 mb-4 text-green-600 font-bold">
                        <Brain size={24} />
                        <h3>The Solution (Mindful App)</h3>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-green-300 mt-1 shrink-0" size={16} />
                            <span>Intentional interaction slows you down</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-green-300 mt-1 shrink-0" size={16} />
                            <span>Curated wisdom improves mental clarity</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ArrowRight className="text-green-300 mt-1 shrink-0" size={16} />
                            <span>No endless feed. Finish and feel complete.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-display text-gray-900">Designed for Serenity</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Sparkles}
              title="Curated Wisdom"
              description="Hand-picked quotes from history's greatest minds, organized by category for your current mood."
              color="from-blue-400 to-indigo-500"
            />
            <FeatureCard 
              icon={Zap}
              title="Mindful Interaction"
              description="Designed to slow you down. Swipe left to release, swipe right to keep. A meditation in UI."
              color="from-purple-400 to-pink-500"
            />
            <FeatureCard 
              icon={Shield}
              title="Digital Sanctuary"
              description="No ads. No noise. Just a pure, beautiful space for your mind to breathe and reset."
              color="from-amber-400 to-orange-500"
            />
            <FeatureCard 
              icon={Heart}
              title="Save & Reflect"
              description="Build your personal collection of wisdom. Review your saved cards whenever you need a boost."
              color="from-red-400 to-pink-500"
            />
             <FeatureCard 
              icon={Sun}
              title="Daily Zen"
              description="Start your morning with a single, powerful thought. Build a habit of intention."
              color="from-yellow-400 to-orange-400"
            />
             <FeatureCard 
              icon={Activity}
              title="Mood Insights"
              description="Track your emotional journey through the wisdom that resonates with you most."
              color="from-emerald-400 to-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2 text-gray-900 font-bold font-display">
             <Quote size={20} className="fill-current" /> Mindful
           </div>
           <p className="text-sm text-gray-500">
             © 2026 Mindful App. Crafted with ❤️.
           </p>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 blur-2xl rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700`} />
    
    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
      <Icon size={24} />
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{title}</h3>
    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);
