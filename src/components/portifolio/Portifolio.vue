<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex';

import Stock from "./Stock";
export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters({stocks : 'stockPortifolio'})
  }
};
</script>

<style></style>
