<template>
  <div>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PetTable from '@/components/PetTable';

export default {
  data() {
    return {};
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState(['cats'])
  }
};
</script>
