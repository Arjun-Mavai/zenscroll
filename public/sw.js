// sw.js - Mindful MPPSC Service Worker containing "Offline-First" Logic

const CACHE_NAME = 'mindful-cache-v1';
const DYNAMIC_CACHE_NAME = 'mindful-dynamic-v1';

// Assets to cache immediately on install
const PRE_CACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/globe.svg',
  '/sounds/flip_card.mp3' 
];

// Install Event: Cache critical files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...', event);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching critical assets');
      return cache.addAll(PRE_CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...', event);
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch Event: Offline-First Strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Strategy 1: Stale-While-Revalidate for Pages and API calls (navigation/HTML)
  // This allows the app to load instantly from cache, then update in background.
  if (event.request.mode === 'navigate' || url.pathname.startsWith('/api') || url.pathname.startsWith('/syllabus')) {
     event.respondWith(
       caches.match(event.request).then((cachedResponse) => {
         const fetchPromise = fetch(event.request).then((networkResponse) => {
            return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });
         }).catch(() => {
             // If both cache and network fail, show offline page (optional)
             // return caches.match('/offline.html'); 
         });
         return cachedResponse || fetchPromise;
       })
     );
     return;
  }

  // Strategy 2: Cache First for Static Assets (Images, Fonts, JS, CSS)
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|mp3|woff2)$/)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((networkResponse) => {
           return caches.open(CACHE_NAME).then((cache) => {
             cache.put(event.request, networkResponse.clone());
             return networkResponse;
           });
        });
      })
    );
    return;
  }

  // Fallback: Network First for everything else
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
