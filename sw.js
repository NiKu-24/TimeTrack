self.addEventListener('fetch', function(event) {
  // Always try to get the latest version from the network
  event.respondWith(fetch(event.request));
});