<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>当前求和值的十倍{{ getBigSum }}</h2>
    <h2>{{ name }}在{{ address }}学{{ object }}</h2>
    <h3>列表的长度为{{ PersonList.length }}</h3>
    <select name="" id="" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add1(num)">+</button>
    <button @click="jian(num)">-</button>
    <button @click="add2(num)">当前求和为奇数再加</button>
    <button @click="add3(num)">等一等在加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    // 通过mapMutations生成对应的派发函数, 需要提前指定要传入的值
    // 使用数组的方式要和mutation中的方法同名
    // 使用对象可以不同名, 例如
    // ...mapMutations({a:'add1'})
    ...mapMutations("countAbout", ["add1", "jian"]),

    // 同样使用mapActions生成对应向action派发的函数, 需要提前指定要传入的值
    ...mapActions("countAbout", ["add2", "add3"]),
  },
  computed: {
    // 只能在计算属性中用
    // 获取只读的计算属性, 是State中的数据
    ...mapState("countAbout", ["name", "address", "object", "sum"]),
    ...mapState("personAbout", ["PersonList"]),
    // 获取getters中的属性值
    ...mapGetters("countAbout", ["getBigSum"]),
  },
};
</script>

<style>
button {
  margin-right: 10px;
  padding: 10px;
}
select {
  width: 80px;
  height: 30px;
}
</style>