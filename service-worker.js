importScripts("precache-manifest.1537a36ddfd4844b51a6131165fdb40e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

'use strict';

// TODO: Add Web Push

/* Listen for received push notifications */
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  if (!data) return;

  const title = 'flatScan';
  const options = {
    body: data.message || 'New update about flats!',
    tag: data.tag || null,
    renotify: true,
    // eslint-disable-next-line no-undef
    icon: env.origin + '/icons/icon-72x72.png',
    // eslint-disable-next-line no-undef
    badge: env.origin + '/icons/icon-72x72.png',
    data: {
      redirectionUrl: data.url,
    },
  };

  self.registration.showNotification(title, options);
});

/* Listen for when a user clicks on the push notification */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const redirectionUrl = event.notification && event.notification.data.redirectionUrl;

  if (typeof redirectionUrl === 'string') {
    // eslint-disable-next-line no-undef
    event.waitUntil(clients.openWindow(redirectionUrl));
  }
});

/* Make sure the latest service worker is used */
self.addEventListener('install', () => self.skipWaiting());

/* For some reason, this is needed to make the browser realise it's an installable PWA */
self.addEventListener('fetch', () => {});

