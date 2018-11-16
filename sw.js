var GENERAL_CACHE_NAME = 'pwa-pricesheet'
var CACHE_NAME = GENERAL_CACHE_NAME + 'v6';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll([
       '/pwa-pricesheet/',
       '/pwa-pricesheet/index.html',
       '/pwa-pricesheet/bulma.min.css',
       '/pwa-pricesheet/index.css',
       '/pwa-pricesheet/manifest.json',
       '/pwa-pricesheet/PriceList.png',
       '/pwa-pricesheet/vue.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});

// Remove old cache
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName &&  cacheName.startsWith(GENERAL_CACHE_NAME)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
