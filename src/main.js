import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;
/**
 * Instância central do vue
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
