const CACHE_NAME = 'foco-total-cache-v1';
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icon.svg',
  '/index.tsx'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching App Shell');
        return cache.addAll(APP_SHELL_URLS);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Use a "Network falling back to cache" strategy for external resources like CDNs and fonts.
  if (
    event.request.url.includes('cdn.tailwindcss.com') ||
    event.request.url.includes('aistudiocdn.com') ||
    event.request.url.includes('fonts.googleapis.com') ||
    event.request.url.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cache.match(event.request);
          });
      })
    );
    return;
  }

  // Use a "Cache first, falling back to network" strategy for app's own assets.
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Return the cached response
        return response;
      }
      // Not in cache, fetch from network, then cache it.
      return fetch(event.request).then((networkResponse) => {
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});