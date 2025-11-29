
self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("almas-cache").then(c=>c.addAll([
    "./index.html","./manifest.json","./pwa_icon.png"
  ]))
 );
});
self.addEventListener("fetch",e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
