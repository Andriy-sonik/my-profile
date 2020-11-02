import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: false // default light
  },
  mutations: {
    SET_TYPE_THEME(state, data) {
      state.theme = data;
    }
  },
  getters: {
    getTheme: state => state.theme
  },
  actions: {},
  modules: {}
});
