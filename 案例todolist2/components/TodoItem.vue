<template>
  <div class="flex">
    <!-- <input type="checkbox" name="" id="" v-model="todoed.done"> -->
    <input
      type="checkbox"
      name=""
      id=""
      @change="changeChecked(todoed.id)"
      :checked="todoed.done"
    />
    <span @dblclick="changeContent" v-show="isChange" class="content">{{
      todoed.content
    }}</span>
    <input
      type="text"
      name=""
      id=""
      class="change-ipt"
      v-show="!isChange"
      :value="todoed.content"
      @blur="change(todoed.id, $event)"
      ref="ipt"
    />
    <button class="del" @click="delTodo(todoed.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoed"],
  data() {
    return {
      isChange: true,
    };
  },
  methods: {
    // 更改状态操作
    changeChecked(id) {
      this.$bus.$emit("changed", id);
    },
    // 删除操作
    delTodo(id) {
      this.$bus.$emit("del", id);
    },

    // 双击切换编辑状态
    changeContent() {
      this.isChange = !this.isChange;
    },
    // 编辑操作
    change(id, e) {
      if (e.target.value) {
        this.$bus.$emit("change", id, e.target.value);
        this.isChange = !this.isChange;
      } else {
        alert("请输入修改内容");
      }
    },
  },
  // 页面更新后触发更新的生命周期函数, 使显示出来的input框自动聚焦
  updated() {
    this.$refs.ipt.focus();
  },
};
</script>

<style lang="scss" scoped>
.flex {
  margin-bottom: 5px;
  background-color: rgb(31, 224, 215);
  position: relative;
  display: flex;
  align-items: center;
}
.del {
  margin-left: 17px;
}
.change-ipt {
  height: 21px;
  border: none;
  outline: none;
  background-color: transparent;
  /* display: none; */
  width: 395px;
  margin-left: 8px;
}
.content {
  display: inline-block;
  /*这里要显示的设置宽度*/
  overflow: hidden;
  white-space: nowrap;
  /*文字超出宽度则显示ellipsis省略号*/
  text-overflow: ellipsis;
  width: 395px;
  margin-left: 8px;
}
</style>