<template>
  <div id="app">
    <div class="header">
      <img alt="flatScan logo" src="./assets/img/bunny.png" id="logo" />

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="ui header">Welcome to flatScan</h1>
          </div>
        </div>
      </section>
    </div>

    <CardList />

    <footer class="footer">
      <button class="ui button" v-if="$installer.canInstall" @click="$installer.prompt">Add to homescreen</button>
      <button class="ui button">Enable notifications</button>
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
  // button {
  //   margin: 16px;
  // }
}
</style>
