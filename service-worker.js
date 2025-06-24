const CACHE_NAME = 'kedre-tech-v3';
const OFFLINE_URL = '/kedre-tech/offline.html';
const ASSETS_TO_CACHE = [
  '/kedre-tech/',
  '/kedre-tech/index.html',
  '/kedre-tech/styles.css',
  '/kedre-tech/app.js',
  '/kedre-tech/manifest.json',
  '/kedre-tech/offline.html',
  '/kedre-tech/icons/icon-72x72.png',
  '/kedre-tech/icons/icon-96x96.png',
  '/kedre-tech/icons/icon-128x128.png',
  '/kedre-tech/icons/icon-144x144.png',
  '/kedre-tech/icons/icon-152x152.png',
  '/kedre-tech/icons/icon-192x192.png',
  '/kedre-tech/icons/icon-384x384.png',
  '/kedre-tech/icons/icon-512x512.png',
  '/kedre-tech/images/splash-screen.jpg',
  '/kedre-tech/images/offline-image.jpg'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching core assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('Skip waiting on install');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - network first with cache fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // For API calls or other non-html requests
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If valid response, cache it
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseToCache));
        }
        return response;
      })
      .catch(() => {
        // If fetch fails, try cache
        return caches.match(event.request)
          .then((response) => {
            // Return cached response or fallback
            return response || caches.match(OFFLINE_URL);
          });
      })
  );
});

// Background sync - for offline data sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-comments') {
    event.waitUntil(syncComments());
  }
});

// Push notification event
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const title = data.title || 'Kedre Tech Notification';
  const options = {
    body: data.body,
    icon: '/kedre-tech/icons/icon-192x192.png',
    badge: '/kedre-tech/icons/icon-72x72.png',
    data: {
      url: data.url || '/kedre-tech/'
    },
    actions: [
      { action: 'view', title: 'View' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  } else {
    // Default action
    event.waitUntil(
      clients.openWindow('/kedre-tech/')
    );
  }
});

// Periodic background sync (when supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateContent());
  }
});

// Helper functions
function syncComments() {
  // Implement comment syncing logic
  return Promise.resolve();
}

function updateContent() {
  // Implement content update logic
  return Promise.resolve();
}