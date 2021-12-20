import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: () => import("../views/Destination.vue"),
  },
  {
    path: "/crew",
    name: "Crew",
    component: () => import("../views/Crew.vue"),
  },
  {
    path: "/technology",
    name: "Technology",
    component: () => import("../views/Technology.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
