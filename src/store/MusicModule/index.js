/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'
import api from '../../Api/api'

const state = {
  musicPagelist: [],
  requesting: false
}

const actions = {
  getMusic ({ commit }) {
    commit(types.GET_MUSIC_LIST)
    api.getMusicList()
      .then(res => {
        commit(types.GET_MUSIC_LIST_SUC, res)
      })
      .catch(() => {
        commit(types.GET_MUSIC_LIST_FAIL)
      })
  }
}

const getters = {
  musicPagelist: state => state.musicPagelist
}

const mutations = {
  [types.GET_MUSIC_LIST] (state) {
    state.requesting = true
  },
  [types.GET_MUSIC_LIST_SUC] (state, res) {
    state.musicPagelist = res
    state.requesting = false
  },
  [types.GET_MUSIC_LIST_FAIL] (state) {
    state.requesting = false
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
