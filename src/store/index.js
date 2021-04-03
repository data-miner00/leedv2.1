import UserModule from "./modules/user";
import AssignmentModule from "./modules/assignment";
import SnackbarModule from "./modules/snackbar";

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
    snackbar: SnackbarModule,
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
  },
};
