import {
  ActionTree,
  ActionContext
} from 'vuex'

import { State } from './state'
import MutationTypes from './mutationTypes'

interface Args {
  key: string
  changed: string | number
  index?: number
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
      case UPDATE.RAILWAY_COMPANY_NUM:
        store.commit(UPDATE.RAILWAY_COMPANY_NUM, changed)
        break
      case UPDATE.RAILWAY_COMPANY_AREA:
        store.commit(UPDATE.RAILWAY_COMPANY_AREA, changed)
        break
      case UPDATE.RAILWAY_COMPANY_NAME:
        store.commit(UPDATE.RAILWAY_COMPANY_NAME, changed)
        break
      case UPDATE.SERIES:
        store.commit(UPDATE.SERIES, changed)
        break
      case UPDATE.PRODUCT_VALUE:
        store.commit(UPDATE.PRODUCT_VALUE, changed)
        break
    }
  },
  updateStatus (
    store: ActionContext<State, any>,
    {key, changed, index}: Args
  ) {
    switch (key) {
      case UPDATE.NUMBER_OF:
        store.commit(UPDATE.NUMBER_OF, changed)
        break
      case UPDATE.DETAILS.LIGHTS:
        store.commit(UPDATE.DETAILS.LIGHTS, {changed, index})
        break
      case UPDATE.DETAILS.COUPLER:
        store.commit(UPDATE.DETAILS.COUPLER, {changed, index})
        break
      case UPDATE.DETAILS.PANTOGRAPH:
        store.commit(UPDATE.DETAILS.PANTOGRAPH, {changed, index})
        break
      case UPDATE.DETAILS.OPTIONS:
        store.commit(UPDATE.DETAILS.OPTIONS, {changed, index})
        break
      case UPDATE.DETAILS.RUNNING:
        store.commit(UPDATE.DETAILS.RUNNING, {changed, index})
        break
      case UPDATE.DETAILS.IMAGE_URL:
        store.commit(UPDATE.DETAILS.IMAGE_URL, {changed, index})
        break
    }
  },
  updateDelivery (
    store: ActionContext<State, any>,
    {key, changed}: Args
  ) {
    switch (key) {
      case UPDATE.DELIVER.COMPANY:
        store.commit(UPDATE.DELIVER.COMPANY, {changed})
        break
      case UPDATE.DELIVER.NAME:
        store.commit(UPDATE.DELIVER.NAME, {changed})
        break
      case UPDATE.DELIVER.VALUE:
        store.commit(UPDATE.DELIVER.VALUE, {changed})
        break
    }
  }
}

export default actions
