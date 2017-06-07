import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import dashboard from '@/components/dashboard/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      query: { redirect: '/' },
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    }
  ]
})

// router.beforeEach(function (transition) {
//     if (transition.to.auth && !Auth.authenticated) {
//         // if route requires auth and user isn't authenticated
//         transition.redirect('/login')
//     } else {
//         transition.next()
//     }
// })
