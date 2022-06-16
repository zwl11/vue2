<template>
  <div>
    <div>
      <button @click="change">确定修改</button><br />
      被祝福人:<input type="text" v-model.trim="to" /><br />
      祝福人:
      <input type="text" v-model.trim="from" /><br />
      祝福内容:
      <textarea name="" id="" cols="30" rows="10" v-model.trim="meg"></textarea>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      to: "",
      from: "",
      meg: "",
      message: "",
    };
  },
  mounted() {
    this.message = this.info.find((item) => item.id == this.$route.params.id);
    this.to = this.message.to;
    this.from = this.message.from;
    this.meg = this.message.message;
  },
  computed: {
    ...mapState(["info"]),
  },
  methods: {
    change() {
      if (this.to && this.from && this.meg) {
        this.$store.commit("change", {
          id: this.$route.params.id,
          name1: this.to,
          name2: this.from,
          meg: this.meg,
        });
        this.$router.push("/home/index");
      } else {
        alert("请输入完整");
      }
    },
  },
};
</script>

<style>
</style>