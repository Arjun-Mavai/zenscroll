import { useState, useEffect } from 'react';

/**
 * Custom hook to handle PWA installation logic and detection.
 * Provides 'isPwaInstalled' status and an 'installPwa' function.
 */
export function usePwa() {
  const [isPwaInstalled, setIsPwaInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // 1. Check if running in standalone mode (Installed)
    const checkStandalone = () => {
      const isStandalone = 
        window.matchMedia('(display-mode: standalone)').matches || 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.navigator as any).standalone === true; // For iOS Safari
      
      setIsPwaInstalled(isStandalone);
    };

    checkStandalone();
    
    // Listen for changes in display mode
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
        setIsPwaInstalled(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleDisplayModeChange);
    }

    // 2. Capture the install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setIsInstallable(true);
      console.log("PWA Install Prompt captured");
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    // 3. Register Service Worker (Manual Registration)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(
                (registration) => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                },
                (err) => {
                    console.log('ServiceWorker registration failed: ', err);
                }
            );
        });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleDisplayModeChange);
      }
    };
  }, []);

  const installPwa = async () => {
    if (!deferredPrompt) {
        console.log("Install prompt not available");
        return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return { isPwaInstalled, isInstallable, installPwa };
}
