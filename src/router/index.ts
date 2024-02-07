import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import DetailView from "@/views/DetailView.vue"
import FavoritesView from "@/views/FavoritesView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/pokemon/:name",
    name: "Detail",
    component: DetailView,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesView,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
