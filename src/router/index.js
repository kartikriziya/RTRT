import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Reservation from '../pages/Reservation.vue'
import Account from '../pages/Account.vue'
import Imprint from '../pages/Imprint.vue'
import TermsConditions from '../pages/TermsConditions.vue'
import Admin from '../pages/Admin.vue'
import Cancel from '../pages/Cancel.vue'

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
    path: '/imprint',
    name: 'imprint',
    component: Imprint
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsConditions
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: Cancel
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  let isUser = sessionStorage.getItem('user-email')

  /* Navigation Guard for 'account.vue' page */
  if (to.path === '/account') {
    if (isUser) {
      next({ name: 'reservieren' })
    } else {
      next()
    }
    /* Navigation Guard for 'reservation.vue' page */
  } else if (to.path === '/reservation') {
    if (!isUser) {
      next({ name: 'account' })
    } else {
      next()
    }
    /* Navigation Guard for 'cancel.vue' page */
  } else if (to.path === '/cancel') {
    if (!isUser) {
      next({ name: 'account' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
