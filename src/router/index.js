import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Reservation from '../pages/Reservation.vue'
import Account from '../pages/Account.vue'
import test from '../pages/test.vue'

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
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

export default router
