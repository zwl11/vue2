<template>
  <div class="footer">
    <div class="footer__l">
      <input type="checkbox" name="" id="" class="footer__all" v-model="isAll"/>
      <span>已完成{{ success }}</span
      >/<span>全部{{length}}</span>
    </div>
    <div class="footer__del" @click="clear">清除已完成的选项</div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  props: ["todoList"],
  methods: {
    clear(){
        this.$emit('clearTodo')
    }
  },
  computed: {
    success() {
      return this.todoList.reduce((pre, cur) => (cur.done ? pre + 1 : pre), 0);
    },
    length() {
      return this.todoList.length
    },
    isAll: {
        get(){
            return this.success === this.length && this.length > 0
        },
        set(val){
            this.$emit('checkedAllTodo',val)
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  &__l {
    display: flex;
    align-items: center;
  }
  &__all {
    width: 18px;
    height: 19px;
    margin-right: 12px;
    margin-left: 4px;
  }
  &__del {
    background-color: rgb(245, 79, 79);
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    color: #fff;
    padding: 0 6px;
  }
}
</style>