<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />

    <div class="header">
      <img alt="flatScan logo" src="./assets/img/bunny.png" id="logo" />

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Welcome to flatScan</h1>
          </div>
        </div>
      </section>
    </div>

    <CardList />

    <footer class="footer">
      <b-button v-if="$installer.canInstall" @click="$installer.prompt">Add to homescreen</b-button>
      <b-button>Enable notifications</b-button>
    </footer>
  </div>
</template>

<script>
import CardList from './components/CardList.vue';

export default {
  name: 'App',
  components: {
    CardList,
  },
};

// const isWebPushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
// const saveSubscription = () => {
//   // TODO: Make HTTP request to backend save endpoint
// };

// const subscribeUser = async () => {
//   if (isWebPushSupported()) {
//     console.log('hej');
//   }

//   const applicationServerPublicKey = 'asd';
//   const applicationServerKey = window.urlB64ToUint8Array(applicationServerPublicKey);
//   const subscription = await window.swRegistration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: applicationServerKey,
//   });

//   console.log('User is subscribed.');
//   try {
//     saveSubscription(subscription);
//   } catch (error) {
//     console.log('Failed to subscribe the user: ', error);
//   }
// };
</script>

<style lang="scss">
html,
footer {
  background-color: #ffffff;
  background-image: url('/img/soft-wallpaper.png');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  padding-bottom: 30px;
}

#logo {
  max-width: 150px;
}

.footer {
  b-button {
    margin: 16px;
  }
}
</style>
