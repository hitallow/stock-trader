<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">trader</span>
    </v-toolbar-title>
    <!-- items da direita -->
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/portifolio">Portifólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>
    <!-- end items da direita -->
    <v-spacer></v-spacer>
    <!-- itens da esquerda -->
    <v-toolbar-items>
      <v-btn flat>Finalizar dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <!-- end itens da esquerda -->
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style></style>
