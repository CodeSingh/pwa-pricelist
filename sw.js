self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwa-lricesheet').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.css',
       '/manifest.json',
       '/PriceList.png',
       '/vue.js'
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
