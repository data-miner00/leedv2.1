export default {
  state: {
    text: "",
    color: "",
  },
  mutations: {
    showMessage(state, payload) {
      state.text = payload.text;
      state.color = payload.color;
    },
  },
};
