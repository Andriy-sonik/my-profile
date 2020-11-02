import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
