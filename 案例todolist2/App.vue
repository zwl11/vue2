<template>
  <div id="root">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#root > div {
  width: 500px;
  height: 480px;
  margin: 50px auto;
  border: 1px solid black;
  box-shadow: 0 0 20px #ddd;
}
</style>
