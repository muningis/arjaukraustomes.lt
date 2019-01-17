const CACHE_NANE = 'ar-jau-kraustomes_v3';
const NO_MATCH_ERROR_CODE = 404;
const NO_MATCH_REJECT_REASON = 'catched file was not found';

self.addEventListener('install', function (event) {
    const index_page = new Request('index.html');
    event.waitUntil(
        fetch(index_page).then(async function (response) {
            const cache = await caches.open(CACHE_NANE);
            return cache.put(index_page, response);
        }));
});

self.addEventListener('fetch', function (event) {
    const update_cache = async function (request) {
        const cache = await caches.open(CACHE_NANE);
        const response = await fetch(request);
        return cache.put(request, response);
    };

    event.waitUntil(update_cache(event.request));

    event.respondWith(
        fetch(event.request).catch(async function () {
            const cache = await caches.open(CACHE_NANE);
            const matching = await cache.match(event.request);
            const report = !matching || matching.status == NO_MATCH_ERROR_CODE
                ? Promise.reject(NO_MATCH_REJECT_REASON)
                : matching;
            return report;
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cache_names) {
        return Promise.all(
            cache_names.filter(function(cache_name) {
            return cache_name !== CACHE_NANE
          }).map(function(cacheName) {
            return caches.delete(cache_name);
          })
        );
      })
    );
  });
