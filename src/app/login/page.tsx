"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Mail, User, ArrowRight, Loader2, Quote } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Success
      if (isLogin) {
          router.push("/");
          router.refresh(); // Refresh to update middleware state
      } else {
          // Auto login after signup? Or just switch to login?
          // For simple flow, let's just alert and switch to login
          setIsLogin(true);
          setError("Account created! Please login.");
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-indigo-950 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent" />
        <div className="relative z-10 text-center px-12 text-white space-y-6 max-w-lg">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 ring-1 ring-white/20 shadow-2xl">
                <Quote className="w-10 h-10 text-white fill-white/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight">
                "Quiet the mind, and the soul will speak."
            </h2>
            <div className="h-1 w-20 bg-white/20 mx-auto rounded-full" />
            <p className="text-indigo-200 text-lg font-light tracking-wide leading-relaxed">
                Join thousands of mindful people finding clarity in a noisy world.
            </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        {/* Mobile Background Pattern */}
        <div className="absolute inset-0 bg-gray-50 lg:hidden z-0">
             <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-indigo-100/50 border border-white relative z-10">
          <div className="text-center space-y-2">
            <div className="inline-flex lg:hidden items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-4 text-indigo-600">
                <Quote size={20} fill="currentColor" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">
                {isLogin ? "Welcome back" : "Start your journey"}
            </h1>
            <p className="text-gray-500">
                {isLogin ? "Enter your details to access your sanctuary" : "Create an account to save your favorite quotes"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 p-2 rounded-lg text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-black text-white rounded-xl font-bold shadow-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative">
             <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
             </div>
             <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400">or</span>
             </div>
          </div>

          <div className="text-center text-sm">
            <button
              onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
              }}
              className="font-medium text-gray-900 hover:text-gray-600 underline underline-offset-4 decoration-gray-200 transition-all"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
