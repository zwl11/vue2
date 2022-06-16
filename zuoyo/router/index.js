import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login"),
  },
  {
    path: "/about/:name?",
    name: "about",
    component: () => import("../components/About"),
  },
  {
    path: "/newAbout",
    name: "newAbout",
    component: () => import("../components/NewAbout"),
  },
  {
    path: "/one",
    name: "one",
    component: () => import("../components/One"),
    children: [
      {
        path: "two",
        name: "two",
        component: () => import("../components/Two"),
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/Cart"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to);
  console.log(from);

  if (to.name === "cart") {
    if (to.params.name === "张三") {
      next();
    }
  } else {
    next();
  }
});
export default router;
