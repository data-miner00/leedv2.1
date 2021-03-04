import UserModule from "./modules/user";
import AssignmentModule from "./modules/assignment";

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
    assignment: AssignmentModule,
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
  },
};
