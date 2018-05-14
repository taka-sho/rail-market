import Vue from 'vue'
import Vuex, {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext
} from 'vuex'


import state from './state'
import actions from './actions'
// import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})

export default store
