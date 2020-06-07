import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './registerServiceWorker';
import VueInstaller from 'vue-pwa-installer';

Vue.use(VueInstaller);

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  // eslint-disable-next-line
  render: h => h(App),
}).$mount('#app');
