// Imports
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/home/Index.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/home/Index.vue"),
        },
        {
          path: "about",
          name: "About",
          component: () => import("@/views/about/Index.vue"),
          meta: { src: require("@/assets/about.jpg") },
        },
        {
          path: "research",
          name: "Research",
          component: () => import("@/views/research/Index.vue"),
          meta: { src: require("@/assets/about.jpg") },
        },
        {
          path: "product",
          name: "Product",
          component: () => import("@/views/product/Index.vue"),
          meta: { src: require("@/assets/sink.jpg") },
        },
        {
          path: "*",
          name: "FourOhFour",
          component: () => import("@/views/404/Index.vue"),
        },
      ],
    },
  ],
});

export default router;
