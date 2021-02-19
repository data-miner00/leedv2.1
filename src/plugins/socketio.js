// import store from "./store";
import * as io from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import config from "../config";

export default new VueSocketIO({
  debug: true,
  connection: io(config.chatUrl),
  // vuex: {
  //   store,
  //   actionPrefix: "SOCKET_",
  //   mutationPrefix: "SOCKET_",
  // },
});
