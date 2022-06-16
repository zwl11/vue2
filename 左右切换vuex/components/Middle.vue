<template>
  <div class="m">
    <button class="top" @click="changeArr2">==&gt;</button>
    <button class="bottom" @click="changeArr1">&lt;==</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Middle",
  data() {
    return {};
  },
  methods: {
    // ...mapMutations(["changeArr2", "changeArr1"]),
    changeArr2() {
      //
      this.$store.commit("changeArr2");
      // 触发自定义事件,在转移过后清空左边的选中列表
      this.$bus.$emit("clearL");
    },
    changeArr1() {
      this.$store.commit("changeArr1");
      // 触发自定义事件,在转移过后清空右边的选中列表
      this.$bus.$emit("clearR");
    },
  },
};
</script>

<style lang="scss" scoped>
.m {
  width: 200px;
  position: relative;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.top,
.bottom {
  width: 100px;
  height: 40px;
  font-size: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
.top {
  top: 100px;
}
.bottom {
  bottom: 100px;
}
</style>