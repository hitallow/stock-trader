<template>
  <!-- flex container com padrão de responsividade -->
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <!-- card superior com informaões da ação -->
    <v-card class="blue darken-3 white--text">
      <!-- titulo da ação -->
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>(Preço: {{ stock.price }} | Qtd : {{ stock.quantity }})</small>
        </strong>
      </v-card-title>
    </v-card>
    <!-- end card superior com informaões da ação -->
    <!-- card com informações de compra da ação -->
    <v-card>
      <v-container fill-height>
        <!-- Input com a quantidade a ser comprada -->
        <v-text-field
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        />
        <!-- botão com ação de comprar a ação -->
        <v-btn
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          class="blue darken-3 white--text"
          @click="sellStock()"
          >Vender</v-btn
        >
      </v-container>
    </v-card>
    <!-- card com informações de compra da ação -->
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    stock: {
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.quantity = 0;
      this.sellStockAction(order);
      // this.$store.dispatch("sellStock", order);
    }
  }
};
</script>

<style></style>
