import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";
import socketio from "./plugins/socketio";

import config from "./config";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  // faMedium,
  // faStackOverflow,
  // faStackExchange,
  // faGoogle,
  // faYoutube,
  // faGithub,
  // faGitlab,
  // faKaggle,
  // faCodepen
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(socketio);

// Setting default url
axios.defaults.baseURL = config.url;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
