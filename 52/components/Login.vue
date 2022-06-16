<template>
  <div>
    <h1>登录页</h1>
    <input type="text" placeholder="请输入账号" />
  </div>
</template>

<script>
export default {
  name: "Login",
  activated() {
    console.log("组件激活时调用");
  },
  deactivated() {
    console.log("组件关闭时调用");
  },
};
</script>

<style>
</style>