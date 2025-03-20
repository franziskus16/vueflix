import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('../views/SubscriptionSection.vue'),
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesSection.vue'),
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieDetails.vue'),
      props: true,
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('../views/SeriesSection.vue'),
    },
    {
      path: '/serie/:id',
      name: 'serie',
      component: () => import('../views/SerieDetails.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
