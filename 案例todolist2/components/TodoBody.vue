<template>
  <div class="body">
    <div class="flex-body">
      <h3>{{ title }}(双击文字编辑,回车确定)</h3>
      <span>{{ isAll }}</span>
    </div>
    <div class="flex-list" v-if="isAll">
      <TodoItem v-for="item in todoed" :key="item.id" :todoed="item" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoBody",
  components: {
    TodoItem,
  },
  props: ["todoed", "title"],
  computed: {
    isAll() {
      return this.todoed.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-body {
  height: 30px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-body > span {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: antiquewhite;
  text-align: center;
}
.flex-list {
  width: 470px;
  margin: auto;
  max-height: 180px;
  overflow: auto;
}
.flex-list::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}

/*滚动条滑块*/
.flex-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #aaa;
}

/*滚动条轨道*/
.flex-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #f8f8f8;
}
</style>