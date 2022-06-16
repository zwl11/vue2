<template>
  <div>
    <button @click="add">确定添加</button><br />
    被祝福人:<input type="text" v-model.trim="to" /><br />
    祝福人: <input type="text" v-model.trim="from" /><br />
    祝福内容:
    <textarea name="" id="" cols="30" rows="10" v-model.trim="meg"></textarea>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
export default {
  name: "Add",
  data() {
    return {
      to: "",
      from: "",
      meg: "",
    };
  },
  methods: {
    add() {
      if (this.to && this.from && this.meg) {
        store.commit("add", {
          name1: this.to,
          name2: this.from,
          meg: this.meg,
        });
        router.push("/home/index");
      } else {
        alert("请输入完整");
      }
    },
  },
};
</script>

<style>
</style>