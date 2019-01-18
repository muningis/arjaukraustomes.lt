var CACHE = 'ar-jau-kraustomes_v5';
var PRECACHE_FILES = [
    'index.html',
    'static/css/style.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(precache().then(function () {
        return self.skipWaiting();
    }));
});

self.addEventListener('activate', function () {
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(from_cache(event.request).catch(from_server(event.request)));
    event.waitUntil(update(event.request));
});

async function precache() {
    const cache = await caches.open(CACHE);
    return cache.addAll(PRECACHE_FILES);
}

async function from_cache(request) {
    const cache = await caches.open(CACHE);
    const matching = await cache.match(request);
    return matching || Promise.reject('no-match');
}

async function update(request) {
    const cache = await caches.open(CACHE);
    const response = await fetch(request);
    return cache.put(request, response);
}

async function from_server(request) {
    const response = await fetch(request);
    return response;
}
