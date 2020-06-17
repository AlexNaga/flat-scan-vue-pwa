import Vue from 'vue';
import App from './App.vue';
import './../semantic/dist/semantic.css';
import './registerServiceWorker';
import VueInstaller from 'vue-pwa-installer';

Vue.use(VueInstaller);

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line
  render: h => h(App),
}).$mount('#app');
