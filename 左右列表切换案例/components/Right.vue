<template>
  <div class="r">
    <label>
      <div class="header">
        <input type="checkbox" name="" id="" v-model="changeAll" />全选
      </div>
    </label>
    <ul class="body">
      <label v-for="item in arr2" :key="item">
        <li>
          <input type="checkbox" name="" id="" v-model="arrr" :value="item" />{{
            item
          }}
        </li>
      </label>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Right",
  props: ["arr2"],
  data() {
    return {
      arrr: [],
    };
  },
  methods: {},
  computed: {
    changeAll: {
      get() {
        return this.arrr.length === this.arr2.length && this.arr2.length > 0;
      },
      set(val) {
        if (val) {
          this.arrr = [...this.arr2];
        } else {
          this.arrr = [];
        }
      },
    },
  },
  mounted() {
    this.$bus.$on("change1", () => {
      if (this.arrr.length > 0) {
        this.$bus.$emit("changeL", this.arrr);
        this.arrr = [];
      } else {
        alert("请选择要转移的选项");
      }
    });
  },
};
</script>

<style>
.r {
  width: 200px;
}
</style>