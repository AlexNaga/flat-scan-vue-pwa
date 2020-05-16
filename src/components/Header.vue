<template>
  <div class="header">
    <img alt="flatScan logo" src="../assets/img/bunny.png" />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ titleMsg }}</h1>
          <h1 class="subtitle">{{ subTitleMsg }}</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titleMsg: String,
    subTitleMsg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
