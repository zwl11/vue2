import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  // 定义数据
  state: {
    info: 0,
  },
  getters: {},
  mutations: {
    setInfo(state, value) {
      state.info += value;
    },
  },
  actions: {},
  modules: {},
});
