<template>
  <input
    type="text"
    class="ipt"
    placeholder="请输入待办事项, 点击回车键确认"
    v-model.trim="content"
    @keyup.enter="add()"
  />
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "myHeader",
  data() {
    return {
      content:''
    };
  },
  methods: {
    add() {
      if (this.content) {
        const newObj = { id: nanoid(), content: this.content, done: false };
        this.$emit("addContent", newObj);
        this.content = ''
      }else{
        alert('请输入待办事项')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ipt {
  width: 453px;
  height: 28px;
  &:focus {
    outline: 1px solid palegreen;
    box-shadow: 0 0 6px palegreen;
  }
}
</style>