<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />

    <div class="header">
      <img alt="flatScan logo" src="./assets/img/bunny.png" />

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Welcome to flatScan</h1>
          </div>
        </div>
      </section>
    </div>

    <CardList />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  padding-bottom: 30px;
}
</style>
