const version   = 2.0;
const cacheName = 'onlypass_cache';
const cacheUrls = [
    "/onlypass/",
    "/onlypass/index.html",
    "/onlypass/css/minireset.min.css",
    "/onlypass/css/water.min.css",
    "/onlypass/css/onlypass.theme.css" ,
    "/onlypass/css/onlypass.style.css",
    "/onlypass/js/cryptojs.js",
    "/onlypass/js/composer.js",
    "/onlypass/js/app.js",
    "/onlypass/js/app.worker.js"
];
const cachePut  = (request, response) => caches
    .open(cacheName)
    .then(cache => cache.put(request, response))
    .finally(() => response);

void self.addEventListener('install',  event => void event
    .waitUntil(caches.open(cacheName)
    .then(cache => cache.addAll(cacheUrls))));

void self.addEventListener('activate', event => void self.clients.claim());

void self.addEventListener('fetch',    event => void event
    .respondWith(caches.match(event.request)
        .then(response => response || fetch(event.request)
        .then(response => cachePut(event.request, response)
        .then(response => response))
        .catch(()      => new Response()))));
