import Vue from 'vue'
import Vuex, {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext
} from 'vuex'

import State from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: new State(''),
  actions,
  mutations
})

export default store
