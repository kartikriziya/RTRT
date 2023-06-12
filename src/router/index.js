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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  //console.log(to)
  //console.log(from)

  let user = sessionStorage.getItem('user-email')

  /* Navigation Guard for 'account.vue' page */
  if (to.path === '/account') {
    if (user) {
      next({ name: 'reservieren' })
    } else {
      next()
    }
  } else if (to.path === '/reservieren') {
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
