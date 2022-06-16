<template>
  <div class="box">
    <div>
      <p>被祝福人: {{ info.to }}</p>
      <p>祝福内容: {{ info.message }}</p>
      <p>祝福人: {{ info.from }}</p>
      <p class="last">{{ info.time }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Item",
  props: ["info"],
  methods: {},
};
</script>

<style scoped>
.box {
  position: absolute;
  width: 300px;
  height: 230px;
  border: 1px solid black;
}
p {
  background-color: aquamarine;
}
.last {
  text-align: right;
}
</style>