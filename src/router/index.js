import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import dashboard from '@/components/dashboard/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      // query: { redirect: '/' },
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})

// router.beforeEach(function () {
//     if (/*transition.to.auth && */!window.localStorage.getItem('authUser')) {
//         // if route requires auth and user isn't authenticated
//         this.$router.push('login');
//     } else {
//         Vue.http.headers.common['Authorization'] = "Bearer window.localStorage.getItem('authUser')";
//     }
// })
