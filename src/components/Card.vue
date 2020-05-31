<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="imgUrl" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ title }}</p>
        <p class="subtitle is-5">Rent: {{ rent }} kr</p>
        <p class="subtitle is-5">Area: {{ area }} m²</p>
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
    rent: String,
    area: String,
    mapUrl: String,
    imgUrl: String,
    dateUpdated: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
