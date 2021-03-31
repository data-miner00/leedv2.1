import Vue from "vue";
import App from "./App.vue";

import router from "./plugins/router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";
import "./plugins/socketio";
import "./plugins/fontawesome";
import "./directives";
import "./plugins/axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
