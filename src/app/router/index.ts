import VueRouter from 'vue-router'
import * as firebase from 'firebase'

import routes from './routes'

const router = new VueRouter({
  routes,
  base: __dirname
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
