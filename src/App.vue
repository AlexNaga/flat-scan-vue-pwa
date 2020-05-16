<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
    <Header titleMsg="Welcome to flatScan" subTitleMsg="Here are the current available flats." />
    <CardList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CardList from './components/CardList.vue';

export default {
  name: 'App',
  components: {
    Header,
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
  margin-top: 60px;
}
</style>
