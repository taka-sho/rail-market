import { MutationTree } from 'vuex'
import { State } from './state'
import MutationTypes from './mutationTypes'

const UPDATE = MutationTypes.UPDATES

const mutations = <MutationTree<State>> {
  [UPDATE.SELLING_STATUS]: (state: State, changed: string) => state.sellingStatus = changed,
  [UPDATE.BUYER_UID]: (state: State, changed: string) => state.buyerUid = changed,

  [UPDATE.MAKER]: (state: State, changed: string) => state.maker = changed,
  [UPDATE.MAKER_NAME]: (state: State, changed: string) => state.makerName = changed,
  [UPDATE.GAUGE]: (state: State, changed: string) => state.gauge = changed,
  [UPDATE.PRODUCT_TYPE]: (state: State, changed: string) => state.productType = changed,
  [UPDATE.RAILWAY_COMPANY_AREA]: (state: State, changed: string) => state.railwayCompanyArea = changed,
  [UPDATE.RAILWAY_COMPANY_NUM]: (state: State, changed: string) => state.railwayCompanyNum = changed,
  [UPDATE.RAILWAY_COMPANY_NAME]: (state: State, changed: string) => state.railwayCompanyName = changed,
  [UPDATE.SERIES]: (state: State, changed: string) => state.series = changed,
  [UPDATE.PRODUCT_VALUE]: (state: State, changed: number) => state.productValue = changed,
  [UPDATE.NUMBER_OF]: (state: State, changed: number) => state.numberOf = changed,

  [UPDATE.USER_INFO.USERNAME]: (state: State, changed: string) => state.userInfo.username = changed,
  [UPDATE.USER_INFO.FAMILY_NAME]: (state: State, changed: string) => state.userInfo.familyName = changed,
  [UPDATE.USER_INFO.UNDER_NAME]: (state: State, changed: string) => state.userInfo.underName = changed,
  [UPDATE.USER_INFO.PREFECTURE]: (state: State, changed: string) => state.userInfo.prefecture = changed,
  [UPDATE.USER_INFO.ADDRESS]: (state: State, changed: string) => state.userInfo.address = changed,
  [UPDATE.USER_INFO.BUILDING_NAME]: (state: State, changed: string) => state.userInfo.buildingName = changed,
  [UPDATE.USER_INFO.POINT]: (state: State, changed: number) => state.userInfo.point = changed,
  [UPDATE.USER_INFO.CART]: (state: State, changed: object) => state.userInfo.cart = changed,

  [UPDATE.DETAILS.LIGHTS]: (state: State, {changed, index}) => state[`t${index}`].lights = changed,
  [UPDATE.DETAILS.COUPLER]: (state: State, {changed, index}) => state[`t${index}`].coupler = changed,
  [UPDATE.DETAILS.RUNNING]: (state: State, {changed, index}) => state[`t${index}`].running = changed,
  [UPDATE.DETAILS.PANTOGRAPH]: (state: State, {changed, index}) => state[`t${index}`].pantograph = changed,
  [UPDATE.DETAILS.OPTIONS]: (state: State, {changed, index}) => state[`t${index}`].options = changed,
  [UPDATE.DETAILS.IMAGE_URL]: (state: State, {changed, index}) => state[`t${index}`].imageUrl = changed,

  [UPDATE.DELIVER.COMPANY]: (state: State, {changed}) => state.deliverCompany = changed,
  [UPDATE.DELIVER.NAME]: (state: State, {changed}) => state.deliverCompanyName = changed,
  [UPDATE.DELIVER.VALUE]: (state: State, {changed}) => state.deliverValue = changed
}

export default mutations
