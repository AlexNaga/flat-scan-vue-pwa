/* eslint-disable no-console */

import { register } from 'register-service-worker';
import { encode } from 'base64-arraybuffer';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: { scope: './' },
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      );
    },
    async registered(registration) {
      console.log('Service worker has been registered with scope: ', registration.scope);

      const applicationServerPublicKey = 'asd'; // TODO: Make this secret
      const applicationServerKey = encode(applicationServerPublicKey);
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      });

      console.log(subscription);

      console.log('User is subscribed.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
