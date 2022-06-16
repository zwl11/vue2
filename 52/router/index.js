import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/query",
    name: "query",
    component: () => import("../views/Query.vue"),
  },
  {
    path: "/one",
    name: "one",
    component: () => import("../views/One.vue"),
    children: [
      {
        path: "two",
        name: "two",
        component: () => import("../views/Two.vue"),

        children: [
          {
            path: "three",
            name: "three",
            component: () => import("../views/Three.vue"),
          },
        ],
      },
    ],
  },
  {
    // 动态路由,传递的参数由params保管
    path: "/another/:id",
    name: "another",
    component: () => import("../views/Another.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
