// import store from "./store";
import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import * as io from "socket.io-client";

import config from "../config";

const socketio = new VueSocketIO({
  debug: true,
  connection: io(config.chatUrl),
  // vuex: {
  //   store,
  //   actionPrefix: "SOCKET_",
  //   mutationPrefix: "SOCKET_",
  // },
});

Vue.use(socketio);
