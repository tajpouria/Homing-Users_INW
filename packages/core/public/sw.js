const staticCacheName = "site-static-v3";
const dynamicCacheName = "site-dynamic-v3";
const assets = [
    "/",
    "/index.html",
    "/fonts/SF-Compact-Display-Bold.otf",
    "/js/*.js",
    "/css/*.css",
    "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css",
    "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdn4.iconfinder.com/data/icons/contact-us-19/48/92-512.png"
];

// install event
self.addEventListener("install", evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener("activate", evt => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== staticCacheName && key !== dynamicCacheName).map(key => caches.delete(key)));
        })
    );
});

// limit cache size

const limitCatchSize = (name, size) => {
    caches.open(name).then(cache =>
        cache.keys().then(keys => {
            if (keys.length > size) cache.delete(keys[0]).then(() => limitCatchSize(name, size));
        })
    );
};

// fetch event cha
self.addEventListener("fetch", evt => {
    //console.log('fetch event', evt);
    if (evt.request.url.indexOf("https://cors-anywhere.herokuapp.com/https://homing-assignment.herokuapp.com/api/people/") === -1) {
        evt.respondWith(
            caches.match(evt.request).then(cacheRes => {
                return (
                    cacheRes ||
                    fetch(evt.request)
                        .then(fetchRes => {
                            return caches.open(dynamicCacheName).then(cache => {
                                // cache.put(evt.request.url, fetchRes.clone());
                                limitCatchSize(dynamicCacheName, 15);
                                return fetchRes;
                            });
                        })
                        .catch(() => {
                            if (evt.request.url.indexOf(".html") > -1) return caches.match("/pages/fallback.html");
                        })
                );
            })
        );
    }
});
