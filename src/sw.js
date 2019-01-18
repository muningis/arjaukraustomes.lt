const CACHE_NAME = "ar-jau-kraustomes_v6";

self.addEventListener("install", function (event) {
    const index_page = new Request("index.html");
    event.waitUntil(
        fetch(index_page).then(async function (response) {
            const cache = await caches.open(CACHE_NAME);
            return cache.put(index_page, response);
        })
    );
});

self.addEventListener("fetch", function (event) {
    async function update_cache(request) {
        const cache = await caches.open(CACHE_NAME);
        const response = await fetch(request);
        return cache.put(request, response);
    }

    event.waitUntil(update_cache(event.request));

    event.respondWith(
        fetch(event.request).catch(async function () {
            const cache = await caches.open(CACHE_NAME);
            const matching = await cache.match(event.request);
            var report =
                !matching || matching.status == 404
                    ? Promise.reject("no-match")
                    : matching;
            return report;
        })
    );
});
