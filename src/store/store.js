import Vue from "vue";
import Vuex from "vuex";

// registro do vuex globalmente
Vue.use(Vuex);

import stocks from "./modules/stocks";
import portifolio from "./modules/portifolio";

/**
 * exporta um novo estado
 */
export default new Vuex.Store({
  modules: {
    stocks,
    portifolio
  }
});
