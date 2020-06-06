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
        <b-table :data="data" :columns="columns" :narrowed="false" />
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
    title: String, // TODO: This should be the location like "Centralt"
    data: Array,
    dateUpdated: String,
    imgUrl: String,
    mapUrl: String,
    url: String,
  },
  data() {
    return {
      columns: [
        {
          field: 'Hyra',
          label: 'Rent',
        },
        {
          field: 'Bostadsyta',
          label: 'Size',
        },
        {
          field: 'Antal rum',
          label: 'Rooms',
        },
        {
          field: 'Antal sovrum',
          label: 'Bedrooms',
        },
        {
          field: 'Antal badrum',
          label: 'Bathrooms',
        },
        {
          field: 'Våningsplan',
          label: 'Floor',
        },
        {
          field: 'Antal våningar',
          label: 'Number of floors',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 16px;
  box-shadow: 0 0.5em 1em 0.3em rgba(10, 10, 10, 0.2), 0 0 0 1px rgba(10, 10, 10, 0.02);
  transition: box-shadow 0.2s ease;
  transition: transform 0.2s;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 0.5em 1em 0.7em rgba(10, 10, 10, 0.3), 0 0 0 1px rgba(10, 10, 10, 0.02);
  transition: box-shadow 0.2s ease;
  transition: transform 0.2s;
  transform: scale(1.01);
}

// TODO: Make left text normal and right side bolder
// .card {
//   td {
//     font-weight: 200 !important;
//   }
// }

// TODO: How to make table always "mobile-cards"
// .content table tbody tr {
//   display: -webkit-box !important;
//   display: -ms-flexbox !important;
//   display: flex !important;
//   width: auto !important;
//   -webkit-box-pack: justify !important;
//   -ms-flex-pack: justify !important;
//   justify-content: space-between !important;
//   text-align: right !important;
//   border-bottom: 1px solid whitesmoke !important;
// }
</style>
