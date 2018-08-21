import { GetterTree } from 'vuex'
import { State } from './state'

const getters = <GetterTree<State, any>> {
  // maker: (state: State): string => state.maker,
  // makerName: (state: State): string => state.makerName,
  // gauge: (state: State): string => state.gauge
}

export default getters
