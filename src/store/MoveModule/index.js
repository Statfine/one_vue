/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'
import api from '../../Api/api'

const state = {
  movePagelist: [],
  requesting: false
}

const actions = {
  getMove ({ commit }) {
    commit(types.GET_MOVE_LIST)
    api.getMoveList()
      .then(res => {
        commit(types.GET_MOVE_LIST_SUC, res)
      })
      .catch(() => {
        commit(types.GET_MOVE_LIST_FAIL)
      })
  }
}

const getters = {
  movePagelist: state => state.movePagelist
}

const mutations = {
  [types.GET_MOVE_LIST] (state) {
    state.requesting = true
  },
  [types.GET_MOVE_LIST_SUC] (state, res) {
    state.movePagelist = res
    state.requesting = false
  },
  [types.GET_MOVE_LIST_FAIL] (state) {
    state.requesting = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
