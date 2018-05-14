import {
  ActionTree,
  ActionContext
} from 'vuex'

import { State } from './state'
import MutationTypes from './mutationTypes'

interface Args {
  key: string
  changed: string
}

const UPDATE = MutationTypes.UPDATES

const actions = <ActionTree<State, any>> {
  updateOverview: (
    store: ActionContext<State, any>,
    {key, changed}: Args
  ) => {
    switch (key) {
      case UPDATE.GAUGE:
        store.commit(UPDATE.GAUGE, changed)
        break
      case UPDATE.MAKER:
        store.commit(UPDATE.MAKER, changed)
        break
      case UPDATE.MAKER_NAME:
        store.commit(UPDATE.MAKER_NAME, changed)
        break
      case UPDATE.PRODUCT_TYPE:
        store.commit(UPDATE.PRODUCT_TYPE, changed)
        break
      case UPDATE.RAILWAY_COMPANY:
        store.commit(UPDATE.RAILWAY_COMPANY, changed)
        break
      case UPDATE.RAILWAY_COMPANY_NAME:
        store.commit(UPDATE.RAILWAY_COMPANY_NAME, changed)
        break
      case UPDATE.SERIES:
        store.commit(UPDATE.SERIES, changed)
        break
    }
  }
}

export default actions
