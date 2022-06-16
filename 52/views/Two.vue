<template>
  <div>
    <h3>这是子路由页面</h3>
    <router-link to="/one/two/three">跳转到第三级页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Two",
};
</script>

<style>
</style>