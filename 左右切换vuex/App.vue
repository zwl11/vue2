<template>
  <div id="root">
    <Left />
    <Middle />
    <Right />
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
    return {};
  },

  methods: {},
  mounted() {},
  watch: {},
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
