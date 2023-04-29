import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Reservation from '../pages/Reservation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ueber-uns',
      name: 'ueber-uns',
      component: About
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Contact
    },
    {
      path: '/reservieren',
      name: 'reservieren',
      component: Reservation
    }
  ]
})

export default router
