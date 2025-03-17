import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/movies",
        name: "movies",
        component: () => import("../views/MoviesSection.vue"),
      },
      {
        path: "/movie/:id",
        name: "movie",
        component: () => import("../views/Movies.vue"),
        props: true,
      },
      {
        path: "/series",
        name: "series",
        component: () => import("../views/Series.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../views/NotFound.vue"),
      },
    ],
  });

  
  export default router;