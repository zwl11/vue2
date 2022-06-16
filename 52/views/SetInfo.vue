<template>
  <button @click="setInfo(100)">修改vuex中的info</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SetInfo",
  methods: {
    ...mapMutations(["setInfo"]),
  },
};
</script>

<style>
</style>