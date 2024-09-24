import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offer/:id',
      name: 'offer',
      props: true,
      // Route chargée de manière asynchrone
      component: () => import('../views/OfferView.vue')
    }
  ]
})

export default router
