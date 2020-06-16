importScripts("precache-manifest.f358a9ada188855a3dd0ab69c1d1cbf1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

'use strict';

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
    icon: './icons/icon-72x72.png',
    // eslint-disable-next-line no-undef
    badge: './icons/icon-72x72.png',
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

