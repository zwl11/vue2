<template>
  <div>
    <!-- <button @click="Com = 'Login'">登录页</button>
    <button @click="Com = 'Reg'">注册页</button>
    <keep-alive :include="['Login']">
      <component :is="Com"></component>
    </keep-alive>

    <Animate1 /> -->

    <router-link to="/home">home页面</router-link><br />
    <router-link to="/about">about页面</router-link><br />

    <!-- 动态路由方式传参, params接收 -->
    <router-link to="/another/33333">跳转一个新的页面</router-link><br />
    <router-link :to="{ path: '/another/33333' }">另一个方式</router-link><br />
    <button @click="fn">通过js方式跳转</button><br />

    <!-- query传参, query接收 -->
    <router-link to="/query?id=333&name=李四">query传递参数</router-link><br />

    <!-- query的方式传递对象既可以使用路径也可以使用name -->
    <router-link
      :to="{
        path: '/query',
        query: {
          id: 213,
          name: 'zwl',
        },
      }"
      >通过query的对象方式携带</router-link
    ><br />
    <router-link
      :to="{
        name: 'query',
        query: {
          id: 213,
          name: 'zwl',
        },
      }"
      >通过query的对象方式携带</router-link
    ><br />

    <!-- 通过params的方式传递对象,只能通过name去确定要传递的组件, 安全路径上不会显示传递的信息 -->

    <router-link
      :to="{
        name: 'query',
        params: {
          id: 32525334,
          name: 'zwl',
        },
      }"
      >通过params的方式传递一个对象</router-link
    ><br />

    <router-link to="/one">嵌套路由</router-link>
    <router-view></router-view>

    <Info1 />
    <SetInfo />
  </div>
</template>
<script>
// import Login from "./components/Login";
// import Reg from "./components/Reg";
import Animate1 from "./components/Animate";
import router from "./router";
import Info1 from "./views/Info1";
import SetInfo from "./views/SetInfo";
export default {
  name: "App",
  components: {
    // Login,
    // Reg,
    Animate1,
    Info1,
    SetInfo,
  },
  methods: {
    fn() {
      router.push("/another/33333");
    },
  },
  data() {
    return {
      Com: "Login",
    };
  },
};
</script>
<style lang="scss">
</style>
