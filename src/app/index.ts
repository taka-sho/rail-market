import Vue from 'vue'
import VueRouter from 'vue-router'
const VueBootstrap = require('bootstrap-vue').default
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Forms from './components/forms'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueBootstrap)

new Vue({
  router,
  render: h => h(Forms)
}).$mount('#app')
