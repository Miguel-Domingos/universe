import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarsView from "@/views/MarsView.vue";
import EarthView from "@/views/EarthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mars",
      name: "Mars",
      component: MarsView,
    },
    {
      path: "/earth",
      name: "Earth",
      component: EarthView,
    },
  ],
});

export default router;
