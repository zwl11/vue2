<template>
  <div>
    <TodoHeader @add="add" />
    <TodoBody :todoed="todoing" title="未完成" />
    <TodoBody :todoed="successTodo" title="已经完成" />
    <button class="delAll" @click="delAll">清除所有已完成的事项</button>
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
export default {
  name: "TodoList",
  components: {
    TodoHeader,
    TodoBody,
  },
  data() {
    return {
      todos: [
        { id: 1, content: "吃饭", done: false },
        { id: 2, content: "睡觉", done: true },
        { id: 3, content: "打游戏", done: false },
      ],
    };
  },
  computed: {
    successTodo() {
      return this.todos.filter((item) => item.done === true);
    },
    todoing() {
      return this.todos.filter((item) => item.done === false);
    },
  },
  methods: {
    // 勾选逻辑
    changeChecked(id) {
      this.todos.forEach((item) => {
        if (item.id === id) item.done = !item.done;
      });
    },
    // 添加逻辑
    add(content) {
      this.todos.unshift({ id: Date.now(), content: content, done: false });
    },
    // 删除逻辑
    del(id) {
      if (confirm("是否确认删除"))
        this.todos = this.todos.filter((item) => item.id !== id);
    },
    // 清除已完成逻辑
    delAll() {
      if (confirm("是否确认清除"))
        this.todos = this.todos.filter((item) => item.done === false);
    },
    // 编辑逻辑
    changeContent(id, info) {
      let index = this.todos.findIndex((item) => item.id === id);
      this.todos[index].content = info;
    },
  },
  mounted() {
    this.$bus.$on("changed", this.changeChecked);
    this.$bus.$on("del", this.del);
    this.$bus.$on("change", this.changeContent);
  },
};
</script>

<style lang="scss" scoped>
.delAll {
  margin-left: 190px;
}
</style>