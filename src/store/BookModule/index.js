/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'
import api from '../../Api/api'

const state = {
  bookPagelist: [],
  requesting: false
}

const actions = {
  getBookList ({ commit }) {
    commit(types.GET_BOOK_LIST)
    api.getBookList()
      .then(res => {
        commit(types.GET_BOOK_LIST_SUC, res)
      })
      .catch(() => {
        commit(types.GET_BOOK_LIST_FAIL)
      })
  }
}

const getters = {
  bookPagelist: state => state.bookPagelist
}

const mutations = {
  [types.GET_BOOK_LIST] (state) {
    state.requesting = true
  },
  [types.GET_BOOK_LIST_SUC] (state, res) {
    state.bookPagelist = res
    state.requesting = false
  },
  [types.GET_BOOK_LIST_FAIL] (state) {
    state.requesting = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
