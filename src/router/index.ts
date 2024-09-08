import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarsView from "@/views/MarsView.vue";
import EarthView from "@/views/EarthView.vue";
import VenusView from "@/views/VenusView.vue";
import JupiterView from "@/views/JupiterView.vue";
import MercuryView from "@/views/MercuryView.vue";
import SaturnView from "@/views/SaturnView.vue";
import UranusView from "@/views/UranusView.vue";
import NeptuneView from "@/views/NeptuneView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mercury",
      name: "Mercury",
      component: MercuryView,
    },
    {
      path: "/venus",
      name: "Venus",
      component: VenusView,
    },
    {
      path: "/earth",
      name: "Earth",
      component: EarthView,
    },
    {
      path: "/mars",
      name: "Mars",
      component: MarsView,
    },
    {
      path: "/jupiter",
      name: "Jupiter",
      component: JupiterView,
    },
    {
      path: "/saturn",
      name: "Saturn",
      component: SaturnView,
    },
    {
      path: "/uranus",
      name: "Uranus",
      component: UranusView,
    },
    {
      path: "/neptune",
      name: "Neptune",
      component: NeptuneView,
    },
  ],
});

export default router;
