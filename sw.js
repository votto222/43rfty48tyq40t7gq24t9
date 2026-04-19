self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'NOTIFY') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body,
      icon: e.data.icon || '',
      badge: e.data.icon || '',
      tag: e.data.tag || 'reminder',
      requireInteraction: false
    });
  }
});
