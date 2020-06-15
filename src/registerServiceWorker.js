/* eslint-disable no-console */

import { register } from 'register-service-worker';
import { encode } from 'base64-arraybuffer';
const env = process.env;

if (env.NODE_ENV === 'production') {
  register(`${env.BASE_URL}service-worker.js`, {
    registrationOptions: { scope: './' },
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      );
    },
    async registered(registration) {
      console.log('Service worker has been registered with scope: ', registration.scope);

      const applicationServerKey = encode(env.VUE_APP_WEB_PUSH_PUBLIC_KEY);
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
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
