import Vue from 'vue'
import VueRouter from 'vue-router'
const VueBootstrap = require('bootstrap-vue').default
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Forms from './components/forms'
import router from './router'
import store from './store'
import initFirebase from './firebase'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueBootstrap)
initFirebase()


new Vue({
  router,
  store,
  render: h => h(Forms)
}).$mount('#app')
