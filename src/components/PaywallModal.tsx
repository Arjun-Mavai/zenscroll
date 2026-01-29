"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, Sparkles, Check } from "lucide-react";

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaywallModal = ({ isOpen, onClose }: PaywallModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            // onClick={onClose} // Disabled closing on backdrop click
            className="absolute inset-0 bg-black backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden"
          >
             <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="inline-flex bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm"
                >
                    <Lock size={32} className="text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold font-display mb-2 relative z-10">
                    Unlock Inner Peace
                </h2>
                <p className="text-indigo-100 text-sm relative z-10">
                    You&apos;ve reached your daily free limit.
                </p>
             </div>

             <div className="p-8 space-y-6">
                <div className="space-y-4">
                    <Benefit icon={Sparkles} text="Unlimited Swipes" />
                    <Benefit icon={Check} text="Save Unlimited Quotes" />
                    <Benefit icon={Check} text="Unlock All Categories" />
                    <Benefit icon={Check} text="Exclusive Zen Themes" />
                </div>

                <button
                    onClick={() => {
                        // Redirect to secure backend endpoint
                        window.location.href = "/api/payment/checkout"; 
                    }}

                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 group"
                >
                    <span>Upgrade for $3.99/mo</span>
                    <Sparkles size={18} className="group-hover:text-yellow-400 transition-colors" />
                </button>

                {/* Removed "Maybe later" button to enforce paywall */}
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Benefit = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="flex items-center gap-3 text-gray-600">
        <div className="p-1.5 bg-green-100 rounded-full text-green-600">
            <Icon size={14} strokeWidth={3} />
        </div>
        <span className="font-medium text-sm">{text}</span>
    </div>
);
