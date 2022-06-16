<template>
  <div class="l">
    <label>
      <div class="header">
        <input
          type="checkbox"
          name=""
          id=""
          :checked="isAllL"
          @change="isAll(isAllL)"
        />全选
      </div>
    </label>
    <ul class="body">
      <label v-for="item in arr1" :key="item">
        <li>
          <input
            type="checkbox"
            name=""
            id=""
            :value="item"
            v-model="arrL"
            @change="checkedL(item)"
          />{{ item }}
        </li>
      </label>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "Left",
  data() {
    return {
      arrL: [],
    };
  },
  methods: {
    ...mapMutations(["checkedL"]),
    isAll(done) {
      if (!done) {
        this.arrL = [...this.arr1];
        this.$store.commit("checkedAllL");
      } else {
        this.arrL = [];
        this.$store.commit("checkedNoneL");
      }
    },
  },
  computed: {
    ...mapState(["arr1"]),
    ...mapGetters(["isAllL"]),
  },
  mounted() {
    this.$bus.$on("clearL", () => {
      this.arrL = [];
    });
  },
};
</script>

<style lang="scss" scoped>
.l {
  width: 200px;
}
</style>