<template>
  <div id="root">
    <myHeader @addContent="changeList" />
    <List :todoList="todoList" />
    <myFooter
      :todoList="todoList"
      @clearTodo="clearTodo"
      @checkedAllTodo="checkedAllTodo"
    />
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import List from "./components/List.vue";
import myFooter from "./components/myFooter.vue";
export default {
  name: "App",
  components: {
    myHeader,
    List,
    myFooter,
  },
  data() {
    return {
      // 默认数据
      todoList: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  // 所有的方法都是在子组件触发, 通过父传子传递函数, 或者通过子组件触发特定的事件, 进而触发父组件上面的方法
  methods: {
    // 添加数据
    changeList(content) {
      this.todoList.unshift(content);
    },
    // 勾选待办事项
    checkedTodo(id) {
      this.todoList.forEach((ele) => {
        if (ele.id === id) ele.done = !ele.done;
      });
    },
    // 删除事项
    delTodo(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
    },
    // 清除已完成事项
    clearTodo() {
      this.todoList = this.todoList.filter((item) => item.done !== true);
    },

    // 全选
    checkedAllTodo(val) {
      this.todoList.forEach((ele) => (ele.done = val));
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkedTodo", this.checkedTodo);
    this.$bus.$on("delTodo", this.delTodo);
  },
  beforeDestroy(){
    this.$bus.$off(["checkedTodo","delTodo"])
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#root {
  box-sizing: border-box;
  padding: 10px 20px;
  width: 500px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid #bbb;
  box-shadow: 0px 0px 20px #bbb;
}
</style>
