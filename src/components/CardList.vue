<template>
  <div class="card-list">
    <div class="container is-fluid">
      <Card
        title="An example title"
        rent="1337"
        area="42"
        mapUrl="A map URL"
        imgUrl="https://bulma.io/images/placeholders/1280x960.png"
        dateAdded="asd 420"
      />
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
};

// const url = '';
// const getData = () => {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-list {
  margin: 0 30px 30px 30px;
}
</style>
