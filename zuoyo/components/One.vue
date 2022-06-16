<template>
  <div>
    <h2>这是一级页面</h2>
    <router-link to="/one/two">跳转到二级页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "One",
};
</script>

<style>
</style>