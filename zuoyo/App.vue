<template>
  <div>
    <router-link to="/home">跳转到home页面</router-link><br />
    <router-link to="/login">跳转到login页面</router-link><br />
    <router-link to="/about/张三">跳转到about页面通过动态路由传参</router-link>
    <br />
    <router-link to="/newAbout?name=张三"
      >跳转到newAbout页面通过query传参</router-link
    ><br />
    <router-link
      :to="{
        path: '/newAbout',
        query: {
          name: '李四',
        },
      }"
      >跳转到newAbout页面通过query对象传参(路径)</router-link
    ><br />
    <router-link
      :to="{
        name: 'newAbout',
        query: {
          name: '李四',
        },
      }"
      >跳转到newAbout页面通过query对象传参(名字)</router-link
    ><br />
    <router-link
      :to="{
        name: 'newAbout',
        params: {
          name: '李四',
        },
      }"
      >跳转到newAbout页面通过params对象传参(名字)</router-link
    ><br />

    <router-link to="/one">跳转到一级页面</router-link> <br />

    <router-link
      :to="{
        name: 'cart',
        params: {
          name: '张三',
        },
      }"
      >跳转到全局路由守卫下的页面(需要传递参数张三)</router-link
    >
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  methods: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>
