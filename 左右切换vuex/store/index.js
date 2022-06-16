import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let arr = [
  "张飞1",
  "关羽1",
  "赵云1",
  "黄忠1",
  "马超1",
  "张飞2",
  "关羽2",
  "赵云2",
  "黄忠2",
  "马超2",
];
let arr1 = ["张三", "李四", "王五", "赵六"];

// 在本地存放数据
if (!localStorage.getItem("change1")) {
  localStorage.setItem("change1", JSON.stringify(arr));
}
if (!localStorage.getItem("change2")) {
  localStorage.setItem("change2", JSON.stringify(arr1));
}
export default new Vuex.Store({
  // 定义数据
  state: {
    arr1: JSON.parse(localStorage.getItem("change1")),
    arr2: JSON.parse(localStorage.getItem("change2")),
    checkedArrL: [],
    checkedArrR: [],
  },
  getters: {
    // 根据子选项控制全选按钮
    isAllL(state) {
      return (
        state.arr1.length === state.checkedArrL.length &&
        state.checkedArrL.length > 0
      );
    },
    isAllLR(state) {
      return (
        state.arr2.length === state.checkedArrR.length &&
        state.checkedArrR.length > 0
      );
    },
  },
  mutations: {
    // 根据逻辑存放要转移的数据
    checkedR(state, value) {
      if (state.checkedArrR.includes(value)) {
        state.checkedArrR = state.checkedArrR.filter((item) => item !== value);
      } else {
        state.checkedArrR.push(value);
      }
    },
    checkedL(state, value) {
      if (state.checkedArrL.includes(value)) {
        state.checkedArrL = state.checkedArrL.filter((item) => item !== value);
      } else {
        state.checkedArrL.push(value);
      }
    },
    // 转移逻辑
    changeArr2(state) {
      if (state.checkedArrL.length > 0) {
        state.arr2 = [...state.checkedArrL, ...state.arr2];
        state.arr1 = state.arr1.filter(
          (item) => !state.checkedArrL.includes(item)
        );
        localStorage.setItem("change2", JSON.stringify(state.arr2));
        localStorage.setItem("change1", JSON.stringify(state.arr1));
        state.checkedArrL = [];
      } else {
        alert("请选择要转移的选项");
      }
    },
    changeArr1(state) {
      if (state.checkedArrR.length > 0) {
        state.arr1 = [...state.checkedArrR, ...state.arr1];
        state.arr2 = state.arr2.filter(
          (item) => !state.checkedArrR.includes(item)
        );
        localStorage.setItem("change1", JSON.stringify(state.arr1));
        localStorage.setItem("change2", JSON.stringify(state.arr2));
        state.checkedArrR = [];
      } else {
        alert("请选择要转移的选项");
      }
    },

    // 全选按钮实现逻辑
    checkedAllR(state) {
      state.checkedArrR = [...state.arr2];
    },
    checkedNoneR(state) {
      state.checkedArrR = [];
    },
    checkedAllL(state) {
      state.checkedArrL = [...state.arr1];
    },
    checkedNoneL(state) {
      state.checkedArrL = [];
    },
  },
  actions: {},
  modules: {},
});
