import Vue from 'vue'
import VueRouter from 'vue-router'
const VueBootstrap = require('bootstrap-vue').default
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'

import Forms from './components/forms'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueBootstrap)

const configs = {
  apiKey: "AIzaSyD74JaROwVcioWXmgVmH8KUoPPLKOE_65E",
  authDomain: "rail-market.firebaseapp.com",
  databaseURL: "https://rail-market.firebaseio.com",
  projectId: "rail-market",
  storageBucket: "rail-market.appspot.com",
  messagingSenderId: "648783745547"
}

firebase.initializeApp(configs)

new Vue({
  router,
  store,
  render: h => h(Forms)
}).$mount('#app')
