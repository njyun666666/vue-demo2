import Loading from "@/store/modules/Loading";
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

function timeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2");
      return resolve(true);
    }, 1000);
  });
}

async function waitSecondGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  console.log("1", to, from);
  const a = await timeout();
  console.log("3", a);
  return true;
}

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
        beforeEnter: [waitSecondGuard],
      },
      {
        path: "/form",
        component: () => import("../views/FormView.vue"),
        beforeEnter: [waitSecondGuard],
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

router.beforeEach(() => {
  console.log("router.beforeEach");
  Loading.show();
});

router.afterEach(() => {
  console.log("router.afterEach");
  Loading.hide();
});

export default router;
