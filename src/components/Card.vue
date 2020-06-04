<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <a :href="url">
          <img :src="imgUrl" />
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-6" v-for="(value, name) in data" :key="name">{{ name }}: {{ value }}</p>
        <!-- <p class="subtitle is-5">Area: {{ area }} m²</p> -->
        <a :href="mapUrl">View on Google maps</a>
        <p class="subtitle is-6">Date updated: {{ dateUpdated }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    data: Object,
    mapUrl: String,
    imgUrl: String,
    url: String,
    dateUpdated: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
