/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'
import api from '../../Api/api'

const state = {
  list: [],
  requesting: false
}

const actions = {
  getList ({ commit }) {
    commit(types.GET_LIST)
    api.getList()
      .then(res => {
        commit(types.GET_LIST_SUC, res)
      })
      .catch(() => {
        commit(types.GET_LIST_FAIL)
      })
  }
}

const getters = {
  homePagelist: state => state.list
}

const mutations = {
  [types.GET_LIST] (state) {
    state.requesting = true
  },
  [types.GET_LIST_SUC] (state, res) {
    state.list = res.content_list
    state.requesting = false
  },
  [types.GET_LIST_FAIL] (state) {
    state.requesting = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
