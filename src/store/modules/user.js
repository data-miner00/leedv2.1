import axios from "axios";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: ({ commit }, payload) => {
      console.log(commit);
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload)
          .then(({ status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
