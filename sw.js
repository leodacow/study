var CACHE = 'study-v6';
var FILES = ['./', 'index.html', 'css/style.css', 'js/data-core.js', 'js/data-stubs.js', 'js/data-stat2201.js', 'js/data-stat-cards.js', 'js/data-math2010-a.js', 'js/data-math2010-b.js', 'js/data-mech2210-a.js', 'js/data-mech2210-b.js', 'js/data-mech2210-c.js', 'js/data-mech2100-a.js', 'js/data-mech2100-b.js', 'js/data-mech2100-c.js', 'js/data-elec2004-a.js', 'js/data-elec2004-b.js', 'js/app.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })); self.clients.claim(); });
// network first so updates show up, fall back to cache when offline
self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request).then(function (r) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); return r; }).catch(function () { return caches.match(e.request); }));
});




