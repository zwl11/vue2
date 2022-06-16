<template>
  <div>
    <h2>One</h2>
    <router-link to="/one/two">子路由</router-link>
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