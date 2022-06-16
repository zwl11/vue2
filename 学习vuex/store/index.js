import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const countAbout = {
  namespaced: true,
  state: { sum: 0, name: "张三", address: "叩丁狼", object: "前端" },
  getters: {
    getBigSum(state) {
      return state.sum * 10;
    },
  },
  mutations: {
    add1(state, value) {
      state.sum += value;
    },
    jian(state, value) {
      state.sum -= value;
    },
  },
  actions: {
    add2(context, value) {
      if (context.state.sum % 2) {
        context.commit("add1", value);
      }
    },
    add3(context, value) {
      setTimeout(() => {
        context.commit("add1", value);
      }, 500);
    },
  },
};
const personAbout = {
  namespaced: true,
  state: {
    PersonList: ["张三", "李四", "王二", "麻子"],
  },
  // 相当于共用的computed属性, 只读
  getters: {},
  mutations: {
    addPerson(state, value) {
      state.PersonList.push(value);
    },
  },
  actions: {},
};
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { countAbout, personAbout },
});
