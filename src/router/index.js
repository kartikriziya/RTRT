import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Reservation from '../pages/Reservation.vue'
import Account from '../pages/Account.vue'
import Admin from '../pages/Admin.vue'
import Cancel from '../pages/Cancel.vue'
import notFound from '../pages/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'RTRT - Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'RTRT - About Us' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'RTRT - Contact Us' }
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation,
    meta: { title: 'RTRT - Reservation' }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: { title: 'RTRT - Account' }
  },
  {
    path: '/frauas@07',
    name: 'admin',
    component: Admin,
    meta: { title: 'RTRT - Admin' }
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: Cancel,
    meta: { title: 'RTRT - Cancel' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: notFound,
    meta: { title: 'Page not found - RTRT' }
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

  document.title = `${to.meta.title}`
})

export default router
