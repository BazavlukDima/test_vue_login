// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import $ from 'jquery'

Vue.use(VueResource)
Vue.config.productionTip = true

// var $ = require("jquery")
// window.$ = require('jquery/dist/jquery.min.js')
window.storage = require('./components/modulus/localstorage.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
