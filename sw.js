//importScripts('/cache-polyfill.js');

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
