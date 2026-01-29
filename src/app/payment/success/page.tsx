'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/app');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center space-y-6 max-w-md w-full bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Payment Successful!</h1>
          <p className="text-zinc-400">
            Thank you for your purchase. Your account has been upgraded to Pro.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => router.push('/app')}
            className="w-full bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Continue to App
          </button>
        </div>

        <p className="text-xs text-zinc-500">
          Redirecting in {countdown} seconds...
        </p>
      </div>
    </div>
  );
}
