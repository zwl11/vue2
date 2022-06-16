import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    // component: () => import("../components/Home"),
  },
  {
    path: "/home",
    redirect: "/home/index",
    component: () => import("../components/Home"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../components/Index"),
      },
      {
        path: "edit/:id",
        name: "edit",
        component: () => import("../components/Edit"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
// router.beforeEach((to, from, next) => {
// });
export default router;
