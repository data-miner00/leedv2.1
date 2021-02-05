import UserModule from "./modules/user";

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
  modules: {
    user: UserModule,
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
  },
};
