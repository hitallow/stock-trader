<template>
  <v-layout row wrap>
    <!-- percorre o array de ações renderizando os elementos -->
    <Stock v-bind:stock="stock" v-for="stock in stocks" :key="stock.id" />
    <!-- end v for -->
  </v-layout>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style></style>
