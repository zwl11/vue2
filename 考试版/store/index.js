import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
if (!localStorage.getItem("info")) {
  let arr = [
    {
      id: 1,
      message: "hello",
      from: "张三",
      to: "李四",
      time: "2020-01-01 12:00:00",
    },
    {
      id: 2,
      message: "我爱你",
      from: "米仔",
      to: "子杨",
      time: "2020-08-01 12:00:00",
    },
  ];
  localStorage.setItem("info", JSON.stringify(arr));
}
export default new Vuex.Store({
  // 定义数据
  state: {
    info: JSON.parse(localStorage.getItem("info")),
    // isShow: false,
  },
  getters: {},
  mutations: {
    add(state, { name1, name2, meg } = {}) {
      state.info.unshift({
        id: Date.now(),
        message: meg,
        from: name2,
        to: name1,
        time: new Date(),
      });
      localStorage.setItem("info", JSON.stringify(state.info));
    },
    change(state, { id, name1, name2, meg } = {}) {
      let index = state.info.findIndex((item) => item.id == id);
      state.info.splice(index, 1, {
        id: id,
        message: meg,
        from: name2,
        to: name1,
        time: new Date(),
      });
      localStorage.setItem("info", JSON.stringify(state.info));
    },
    del(state, id) {
      state.info = state.info.filter((item) => item.id !== id);
      localStorage.setItem("info", JSON.stringify(state.info));
    },
  },
  actions: {},
  modules: {},
});
