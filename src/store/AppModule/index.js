/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'

const state = {
  welcome: false
}

const actions = {
  welcome ({ commit }, status) {
    commit(types.WELCOME, status)
  }
}

const getters = {
  welcome: state => state.welcome
}

const mutations = {
  [types.WELCOME] (state, status) {
    state.welcome = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
