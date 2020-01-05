import Vue from "vue";
import Router from "vue-router";

/**
 * Componentes criados
 */
import Home from "./components/Home";
import Portifolio from "./components/portifolio/Portifolio";
import Stocks from "./components/stocks/Stocks";

/**
 * Registro do vue router no escopo do vue
 */
Vue.use(Router);

/**
 * Gerenciador de rotas
 */
export default new Router({
  // modo de navegação
  mode: "history",
  // definição de rotas
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/portifolio",
      component: Portifolio
    },
    {
      path: "/stocks",
      component: Stocks
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
