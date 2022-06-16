<template>
  <div class="l">
    <label>
      <div class="header">
        <input type="checkbox" name="" id="" v-model="changeAll" />全选
      </div>
    </label>
    <ul class="body">
      <label v-for="item in arr1" :key="item">
        <li>
          <input type="checkbox" name="" id="" v-model="arrl" :value="item" />{{
            item
          }}
        </li>
      </label>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Left",
  props: ["arr1"],
  data() {
    return {
      arrl: [],
    };
  },
  computed: {
    changeAll: {
      get() {
        return this.arrl.length === this.arr1.length && this.arr1.length > 0;
      },
      set(val) {
        if (val) {
          this.arrl = this.arr1;
        } else {
          this.arrl = [];
        }
      },
    },
  },
  mounted() {
    this.$bus.$on("change2", () => {
      if (this.arrl.length > 0) {
        this.$bus.$emit("changeR", this.arrl);
        this.arrl = [];
      } else {
        alert("请选择要转移的选项");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.l {
  width: 200px;
}
</style>