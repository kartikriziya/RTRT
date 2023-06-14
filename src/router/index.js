import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Reservation from '../pages/Reservation.vue'
import Account from '../pages/Account.vue'
import test from '../pages/test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/reservation',
    name: 'reservation',
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user-email')

  /* Navigation Guard for 'account.vue' page */
  if (to.path === '/account') {
    if (user) {
      next({ name: 'reservieren' })
    } else {
      next()
    }
    /* Navigation Guard for 'reservation.vue' page */
  } else if (to.path === '/reservation') {
    if (!user) {
      next({ name: 'account' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
