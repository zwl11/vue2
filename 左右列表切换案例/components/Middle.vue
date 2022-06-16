<template>
  <div class="m">
    <button class="top" @click="changeR">==&gt;</button>
    <button class="bottom" @click="changeL">&lt;==</button>
  </div>
</template>

<script>
export default {
  name: "Middle",
  data() {
    return {};
  },
  methods: {
    changeL() {
      this.$bus.$emit("change1");
    },
    changeR() {
      this.$bus.$emit("change2");
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