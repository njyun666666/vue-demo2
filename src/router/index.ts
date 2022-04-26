import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../components/TemplateMain.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/form",
        component: () => import("../views/FormView.vue"),
      },
      {
        path: "/slot",
        component: () => import("../views/SlotView.vue"),
      },
      {
        path: "/custom",
        component: () => import("../views/CustomView.vue"),
      },
      {
        path: "/vueprop",
        component: () => import("../views/VuePropView.vue"),
      },
      {
        path: "/login",
        component: () => import("../views/LoginView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
