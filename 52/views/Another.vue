<template>
  <div>这是另外一个页面</div>
</template>

<script>
export default {
  name: "Another",
  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style>
</style>