<template>
  <div class="card-list">
    <div class="container is-fluid">
      <ul v-for="service in services" :key="service.id">
        <li v-for="flat in service.flats" :key="flat">
          <Card
            :title="flat"
            :rent="1337"
            area="42"
            mapUrl="A map URL"
            imgUrl="https://bulma.io/images/placeholders/1280x960.png"
            dateUpdated="asd 420"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  data() {
    return {
      services: {},
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    async getData() {
      // TODO: How to add envs to vue?
      const url = 'https://k8b2vri9ga.execute-api.eu-north-1.amazonaws.com/test/flats';
      const apiKey = 'Yg0SAzdhgV1jirIXPDy941lvR4pW1AXB8iccJGjd';
      const options = {
        headers: { 'x-api-key': apiKey },
      };

      // this.loading = true;

      const res = await fetch(url, options);
      const data = await res.json();

      // this.loading = false;
      console.log(data);

      this.services = data ? data : [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-list {
  margin: 0 30px 30px 30px;
}
</style>
