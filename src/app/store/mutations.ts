import { MutationTree } from 'vuex'
import { State } from './state'
import MutationTypes from './mutationTypes'

const UPDATE = MutationTypes.UPDATES

const mutations = <MutationTree<State>> {
  [UPDATE.MAKER]: (state: State, changed: string) => state.maker = changed,
  [UPDATE.MAKER_NAME]: (state: State, changed: string) => state.makerName = changed,
  [UPDATE.GAUGE]: (state: State, changed: string) => state.gauge = changed,
  [UPDATE.PRODUCT_TYPE]: (state: State, changed: string) => state.productType = changed,
  [UPDATE.RAILWAY_COMPANY]: (state: State, changed: string) => state.railwayCompany = changed,
  [UPDATE.RAILWAY_COMPANY_NAME]: (state: State, changed: string) => state.railwayCompanyName = changed,
  [UPDATE.SERIES]: (state: State, changed: string) => state.series = changed
}

export default mutations
