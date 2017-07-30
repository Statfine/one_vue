/**
 * Created by easub on 2017/7/3.
 */
import * as types from './Type'

const state = {
  welcome: false,
  music: {
    id: '',
    play: false,
    musicSrc: '',
    audioOpen: false
  }
}

const actions = {
  welcome ({ commit }, status) {
    commit(types.WELCOME, status)
  },
  changeMusic ({ commit }, status) {
    commit(types.CHANGE_MUSCI_PALY, status)
  }
}

const getters = {
  welcome: state => state.welcome
}

const mutations = {
  [types.WELCOME] (state, status) {
    state.welcome = status
  },
  [types.CHANGE_MUSCI_PALY] (state, status) {
    for (let obj in status) {
      state.music[obj] = status[obj]
    }
    // state.music.id = status.id
    // state.music.play = status.play
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
