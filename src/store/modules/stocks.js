/* eslint-disable no-console */

import data from "@/data/stocks";

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, stocks) {
      console.log(state);
      state.stocks = stocks;
    }
  },
  actions: {
    buyStock(e, order) {
      console.log('e =>',e);
      console.log(order);
      e.commit('buyStock',order);
    },
    initStocks(e) {
      e.commit("setStocks", data);
    }
  },
  getters: {
    stocks(state) {
      return state.stocks;
    }
  }
};
