<template>
  <div>
    <button @click="add">确定</button><br />
    被祝福人:<input type="text" v-model.trim="to" /><br />
    祝福人: <input type="text" v-model.trim="from" /><br />
    祝福内容:
    <textarea name="" id="" cols="30" rows="10" v-model.trim="meg"></textarea>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { mapState } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      to: "",
      from: "",
      meg: "",
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    if (this.$route.params.id != undefined) {
      this.message = this.info.find((item) => item.id == this.$route.params.id);
      this.to = this.message.to;
      this.from = this.message.from;
      this.meg = this.message.message;
    }
  },
  computed: {
    ...mapState(["info"]),
  },
  methods: {
    add() {
      if (this.to && this.from && this.meg) {
        if (this.$route.params.id) {
          store.commit("change", {
            id: this.$route.params.id,
            name1: this.to,
            name2: this.from,
            meg: this.meg,
          });
        } else {
          store.commit("add", {
            name1: this.to,
            name2: this.from,
            meg: this.meg,
          });
        }
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