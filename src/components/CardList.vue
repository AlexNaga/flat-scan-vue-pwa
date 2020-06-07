<template>
  <div class="card-list">
    <transition appear name="fade" mode="out-in">
      <div class="subtitle is-5" v-if="isLoading" key="loading">LOADING...</div>

      <div class="content-wrapper" v-else key="flat-list">
        <h1 class="subtitle">{{ availableFlats }}</h1>

        <div class="grid-container">
          <Card
            v-for="flat in flats"
            :key="flat.id"
            :data="[flat.data]"
            mapUrl="A map URL"
            :imgUrl="flat.imgUrl"
            :url="flat.url"
            dateUpdated="asd"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Card from './Card';
const env = process.env;

export default {
  name: 'CardList',
  components: {
    Card,
  },
  data: () => ({
    isLoading: false,
    flats: [],
  }),
  computed: {
    availableFlats() {
      return this.flats.length > 0 ? 'Here are the current available flats.' : 'There are no new flats available...';
    },
  },
  created() {
    this.isLoading = true;
    this.getData();
  },
  methods: {
    async getData() {
      const options = {
        headers: { 'x-api-key': env.VUE_APP_API_KEY },
      };

      const result = await fetch(env.VUE_APP_URL, options);
      const data = await result.json();

      const combinedData = data.flatMap((service) => [...service.flats]);

      console.log(combinedData);

      setTimeout(() => {
        this.isLoading = false;
        this.flats = combinedData ? combinedData : [];
      }, 800);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-list {
  padding: 0 20px;
}

.grid-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  max-width: 1200px;
  margin: auto;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(1rem);
  }
}
</style>
