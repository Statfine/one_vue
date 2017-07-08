/**
 * Created by easub on 2017/7/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppModule'
import HomeList from './ListModule'
import BookPage from './BookModule'
import MusicPage from './MusicModule'
import MovePage from './MoveModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: App,
    homeList: HomeList,
    bookPage: BookPage,
    musicPage: MusicPage,
    movePage: MovePage
  }
})

