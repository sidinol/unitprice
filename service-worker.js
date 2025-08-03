self.addEventListener("install", function (e) {
  console.log("Service Worker: Installed");
  e.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker: Activated");
  return self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  // 네트워크 요청을 그대로 통과시킴 (캐시 없음)
});
