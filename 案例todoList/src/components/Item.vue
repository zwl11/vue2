<template>
  <li class="list">
    <div class="list__l">
      <input
        type="checkbox"
        name=""
        id=""
        class="list__ipt"
        :checked="itemTodo.done"
        @change="changeChecked(itemTodo.id)"
      />
      <span class="list__l__content">{{ itemTodo.content }}</span>
    </div>
    <button class="list__del" @click="del(itemTodo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["itemTodo"],
  methods: {
    changeChecked(id) {
      this.$bus.$emit('checkedTodo', id)
    },
    del(id){
      if(confirm('是否确认删除')) this.$bus.$emit('delTodo', id);
    }
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 4px;
  border: 1px solid #ddd;
  &:hover{
    transition: .3s;
    background-color: #eee;
    .list__del{
      display: block;
    }
  }
  &__l {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 30px;
    width: 400px;
    &__content {
      /*这里要显示的设置宽度*/
      overflow: hidden;
      white-space: nowrap;
      /*文字超出宽度则显示ellipsis省略号*/
      text-overflow: ellipsis;
      width: 100%;
    }
  }
  &__ipt {
    width: 18px;
    height: 19px;
    margin-right: 8px;
    margin-left: 4px;
  }
  &__del {
    display: none;
    cursor: pointer;
    width: 60px;
    height: 90%;
    border: none;
    color: #fff;
    background-color: rgb(245, 79, 79);
    border-radius: 5px;
  }
}
</style>