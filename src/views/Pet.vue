<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <div>Age: {{ animal.age }} years old</div>
    <div>Breed: {{ animal.breed }}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted() {
    this.animal = this[this.$route.params.species][this.$route.params.id];
  }
};
</script>
