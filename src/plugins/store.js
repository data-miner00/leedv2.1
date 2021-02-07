import Vue from "vue";
import Vuex from "vuex";
import definition from "../store";

import { LOCAL_STORAGE_PREFIX as prefix } from "../config";

Vue.use(Vuex);

const store = new Vuex.Store(definition);

/* ====================================================================  */
const userDetailsJson = localStorage.getItem(`${prefix}user-details`);
const userDetails = JSON.parse(userDetailsJson);
console.log(userDetails);
if (userDetails) {
  store.commit("setAuthenticated", true);
  store.dispatch("RETRIEVE_DETAIL", userDetails);
}
/* ===================================================================== */
export default store;
