export default {
  state: {
    currentPage: "Home",
  },
  mutations: {
    // synchronous
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
  actions: {
    // asynchronous
  },
  modules: {},
  getters: {
    getCurrentPage: (state) => state.currentPage,
  },
};
