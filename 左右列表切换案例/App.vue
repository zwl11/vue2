<template>
  <div id="root">
    <Left :arr1="arr1" />
    <Middle />
    <Right :arr2="arr2" />
  </div>
</template>

<script>
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
export default {
  name: "App",
  components: {
    Left,
    Middle,
    Right,
  },
  data() {
    return {
      arr1: JSON.parse(localStorage.getItem("change1")),
      arr2: JSON.parse(localStorage.getItem("change2")),
    };
  },

  methods: {},
  mounted() {
    this.$bus.$on("changeL", (arr) => {
      // console.log(arr);
      this.arr1 = [...arr, ...this.arr1];
      this.arr2 = this.arr2.filter((item) => !arr.includes(item));
    });
    this.$bus.$on("changeR", (arr) => {
      // console.log(arr);
      this.arr2 = [...arr, ...this.arr2];
      this.arr1 = this.arr1.filter((item) => !arr.includes(item));
    });
  },
  beforeCreate() {
    if (!localStorage.getItem("change1")) {
      let arr = [
        "张飞1",
        "关羽1",
        "赵云1",
        "黄忠1",
        "马超1",
        "张飞2",
        "关羽2",
        "赵云2",
        "黄忠2",
        "马超2",
      ];
      localStorage.setItem("change1", JSON.stringify(arr));
    }
    if (!localStorage.getItem("change2")) {
      let arr1 = ["张三", "李四", "王五", "赵六"];
      localStorage.setItem("change2", JSON.stringify(arr1));
    }
  },
  watch: {
    arr1: {
      deep: true,
      handler(val) {
        localStorage.setItem("change1", JSON.stringify(val));
      },
    },
    arr2: {
      deep: true,
      handler(val) {
        localStorage.setItem("change2", JSON.stringify(val));
      },
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#root {
  width: 600px;
  height: 400px;
  margin: 100px auto;
  border: 1px solid black;
  box-shadow: 0 0 20px #ddd;
  display: flex;
  justify-content: space-between;
}
.header {
  height: 45px;
  box-sizing: border-box;
  padding: 12px;
  & > input {
    margin-right: 20px;
  }
  &:hover {
    background-color: #ddd;
  }
  border-bottom: 1px solid #ccc;
}
.body {
  height: 355px;

  overflow: auto;
  & > label > li {
    padding: 12px;
    &:hover {
      background-color: #ddd;
    }
  }
  & > label > li > input {
    margin-right: 20px;
  }
}
.body::-webkit-scrollbar {
  width: 5px;
  height: 0px;
}
.body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #aaa;
}
.body::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #fff;
}
</style>
