import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => {
        return {
          sort: route.query.sort || '',
          pricemin: route.query.pricemin || '',
          pricemax: route.query.pricemax || ''
        }
      }
    },
    {
      path: '/offer/:id',
      name: 'offer',
      props: true,
      // Route chargée de manière asynchrone
      component: () => import('../views/OfferView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    }
  ]
})

export default router
