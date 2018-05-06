import Vue from 'vue'
import Vuex from 'vuex'

import * as state from './state'
import actions from './actions'
// import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
