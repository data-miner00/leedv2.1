import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
});
