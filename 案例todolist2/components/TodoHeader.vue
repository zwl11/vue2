<template>
  <div class="flex-header">
    <h2>TodoList</h2>
    <input type="text" v-model.trim="content" @keyup.enter="add(content)" />
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    add(content) {
      if (this.content) {
        this.$emit("add", content);
        this.content = "";
      } else {
        alert("请输入内容");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-header {
  display: flex;
  width: 100%;
  height: 30px;
  background-color: black;
  justify-content: center;
  align-items: center;
}

.flex-header > h2 {
  color: #fff;
  font-size: 18px;
  margin-right: 100px;
}

.flex-header > input {
  height: 80%;
  border: none;
  outline: none;
}
</style>