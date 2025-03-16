import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RoomsView from "../views/RoomsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", name: "Home", component: HomeView },
    { path: "/About", name: "About", component: AboutView },
    { path: "/Rooms", name: "Rooms", component: RoomsView },
  ],
});

export default router;
