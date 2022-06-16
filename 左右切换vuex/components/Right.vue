<template>
  <div class="r">
    <label>
      <div class="header">
        <input
          type="checkbox"
          name=""
          id=""
          :checked="isAllLR"
          @change="isAll(isAllLR)"
        />全选
      </div>
    </label>
    <ul class="body">
      <label v-for="item in arr2" :key="item">
        <li>
          <input
            type="checkbox"
            name=""
            id=""
            :value="item"
            v-model="arrR"
            @change="checkedR(item)"
          />{{ item }}
        </li>
      </label>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Right",
  data() {
    return {
      arrR: [],
    };
  },
  methods: {
    ...mapMutations(["checkedR"]),
    // 全选逻辑,根据自定义的数据arrR来确保在点击全选时下面的按钮能够实现相同的状态
    isAll(done) {
      // 如果此时按钮为false就全部选中, 同时也要修改store中的要转移的数据
      if (!done) {
        this.arrR = [...this.arr2];
        this.$store.commit("checkedAllR");
      } else {
        // 否则置空,同时也要修改store中的要转移的数据
        this.arrR = [];
        this.$store.commit("checkedNoneR");
      }
    },
  },
  computed: {
    // 获取数据
    ...mapState(["arr2"]),
    ...mapGetters(["isAllLR"]),
  },
  mounted() {
    // 自定义事件用来处理arrR的逻辑
    this.$bus.$on("clearR", () => {
      this.arrR = [];
    });
  },
};
</script>

<style>
.r {
  width: 200px;
}
</style>