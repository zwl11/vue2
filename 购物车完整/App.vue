<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="" id="" v-model="isAll" />全选
            <button @click="opposite">反选</button>
          </th>
          <th v-for="(item, index) in data.titles" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data.books" :key="item.id">
          <td><input type="checkbox" name="" id="" v-model="item.done" /></td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.price | price }}</td>
          <td>
            <button @click="jian(item)">-</button>
            <input type="number" name="" id="" v-model="item.num" min="1" />
            <button @click="add(item)">+</button>
          </td>
          <td><button @click="del(item.id)">删除</button></td>
        </tr>
      </tbody>
    </table>
    <h2>总价: {{ sum | price }}</h2>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      data: {
        titles: ["编号", "书籍名称", "出版日期", "价格", "购买数量", "操作"],
        books: [
          {
            id: 1,
            name: "算法导论",
            date: "2006-9",
            price: 85,
            num: 1,
            done: false,
          },
          {
            id: 2,
            name: "UNIX编程艺术",
            date: "2006-2",
            price: 59,
            num: 1,
            done: false,
          },
          {
            id: 3,
            name: "Vue程序设计",
            date: "2008-10",
            price: 35,
            num: 1,
            done: false,
          },
          {
            id: 4,
            name: "颈椎康复",
            date: "2006-3",
            price: 129,
            num: 1,
            done: false,
          },
        ],
      },
      checkedShop: [],
    };
  },
  methods: {
    jian(item) {
      if (item.num - 1 < 1) {
        alert("不能再少了");
      } else {
        item.num--;
      }
    },
    add(item) {
      console.log(item);
      item.num++;
    },
    del(id) {
      this.data.books = this.data.books.filter((item) => item.id !== id);
    },
    opposite() {
      this.data.books.map((ele) => (ele.done = !ele.done));
    },
  },
  computed: {
    isAll: {
      get() {
        return (
          this.data.books.every((ele) => ele.done === true) &&
          this.checkedShop.length !== 0
        );
      },
      set(val) {
        this.data.books.map((ele) => (ele.done = val));
      },
    },
    sum() {
      this.checkedShop = this.data.books.filter((item) => item.done === true);
      return this.checkedShop.reduce(
        (pre, cur) => pre + cur.price * cur.num,
        0
      );
    },
  },
  filters: {
    price(val) {
      return `¥ ${val.toFixed(2)}`;
    },
  },
};
</script>
<style lang="scss">
tr,
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
table {
  text-align: center;
  border-collapse: collapse;
}
input {
  width: 60px;
}
</style>
