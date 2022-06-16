<template>
  <div>
    <h3>来到页面携带的params参数{{ $route.params.name || "无" }}</h3>
    <h3>来到页面携带的query参数{{ $route.query.name || "无" }}</h3>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>