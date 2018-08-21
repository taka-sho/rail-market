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
  updateSellStatus: (
    store: ActionContext<State, any>,
    {key, changed}: Args
  ) => {
    switch (key) {
      case UPDATE.SELLING_STATUS:
        store.commit(UPDATE.SELLING_STATUS, changed)
        break
      case UPDATE.BUYER_UID:
        store.commit(UPDATE.BUYER_UID, changed)
        break
    }
  },
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
  },
  updateUserInfo (
    store: ActionContext<State, any>,
    {key, changed}: Args
  ) {
    switch (key) {
      case UPDATE.USER_INFO.USERNAME:
        store.commit(UPDATE.USER_INFO.USERNAME, changed)
        break
      case UPDATE.USER_INFO.FAMILY_NAME:
        store.commit(UPDATE.USER_INFO.FAMILY_NAME, changed)
        break
      case UPDATE.USER_INFO.UNDER_NAME:
        store.commit(UPDATE.USER_INFO.UNDER_NAME, changed)
        break
      case UPDATE.USER_INFO.PREFECTURE:
        store.commit(UPDATE.USER_INFO.PREFECTURE, changed)
        break
      case UPDATE.USER_INFO.ADDRESS:
        store.commit(UPDATE.USER_INFO.ADDRESS, changed)
        break
      case UPDATE.USER_INFO.BUILDING_NAME:
        store.commit(UPDATE.USER_INFO.BUILDING_NAME, changed)
        break
      case UPDATE.USER_INFO.POINT:
        store.commit(UPDATE.USER_INFO.POINT, changed)
        break
      case UPDATE.USER_INFO.CART:
        store.commit(UPDATE.USER_INFO.CART, changed)
        break
    }
  }
}

export default actions
