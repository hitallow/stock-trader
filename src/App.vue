<template>
  <v-app>
    <Header />
    <!-- content central -->
    <v-content>
      <!-- container global -->
      <v-container>
        <!-- container gerenciado pelo vue router -->
        <router-view />
        <!-- end container gerenciado pelo vue router -->
      </v-container>
      <!-- end container global -->
    </v-content>
    <!-- end content central -->
  </v-app>
</template>

<script>
/** Componentes utilizados */
import Header from "./components/Header";

export default {
  // registro dos componentes
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style></style>
