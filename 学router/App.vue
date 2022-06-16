<template>
  <div>
    <router-link to="/about">about</router-link>
    <router-link to="/home">home</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
</style>
