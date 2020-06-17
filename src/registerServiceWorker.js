/* eslint-disable no-console */

import { register } from 'register-service-worker';
import { urlBase64ToUint8Array } from './lib/helpers';
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

      const applicationServerKey = urlBase64ToUint8Array(env.VUE_APP_WEB_PUSH_PUBLIC_KEY);

      try {
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true, // Visibly notify the user
          applicationServerKey,
        });

        console.log('User is subscribed to web push notifications.');

        saveSubscription(subscription);
      } catch (error) {
        console.warn('Failed to subscribe the user to web push notifications.', error);
      }
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

const saveSubscription = async (subscription) => {
  const url = `${env.VUE_APP_URL}/subscription`;
  const data = { subscription };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.VUE_APP_API_KEY,
    },
    mode: 'cors',
    body: JSON.stringify(data),
  });

  console.log('Subscription saved to DB.');

  return response.json();
};
