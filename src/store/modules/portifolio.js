export default {
  state: {
    founds: 1000,
    stocks: []
  },
  mutations: {
    buyStock(state, order) {
      const record = state.stocks.find(s => s.id === order.stockId);
      if (record) {
        record.quantity += order.quantity;
        // state.stocks.push(record);
      } else {
        state.stocks.push({
          id: order.stockId,
          quantity: order.quantity
        });
      }
      state.founds -= order.quantity * order.stockPrice;
    },
    sellStock(state, order) {
      const record = state.stocks.find(s => s.id === order.stockId);
      if (!record) return;
      if (record.quantity > order.quantity) {
        record.quantity -= order.quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.founds += order.stockPrice * order.quantity;
    }
  },
  actions: {
    sellStock({ commit }, order) {
      commit("sellStock", order);
    }
  },
  getters: {
    founds(state) {
      return state.founds;
    },
    stockPortifolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(e => e.id === stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        };
      });
    }
  }
};
