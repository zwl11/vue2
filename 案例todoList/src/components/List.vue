<template>
  <ul>
    <Item
      v-for="item in todoList"
      :key="item.id"
      :itemTodo="item"
    />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item,
  },
  data() {
    return {};
  },
  props: ["todoList"],
};
</script>

<style lang="scss" scoped>
ul {
  margin-top: 10px;
  max-height: 200px;
  overflow: auto;
}
ul::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}
/*滚动条滑块*/
ul::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #aaa;
}
/*滚动条轨道*/
ul::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #f8f8f8;
}
</style>