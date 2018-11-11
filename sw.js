self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-pricesheet').then(function(cache) {
     return cache.addAll([
       '/pwa-pricesheet/',
       '/pwa-pricesheet/index.html',
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
