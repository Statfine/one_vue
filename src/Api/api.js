import { fetch } from './http'

export default {
  /**
   * 首页数据
   */
  getList (params) {
    return fetch('/onelist/4145/%E6%B7%B1%E5%9C%B3%E5%B8%82?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2', params)
  },

  getBookList () {
    return fetch('/channel/reading/more/0?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2')
  },

  getMusicList () {
    return fetch('/channel/music/more/0?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2')
  },

  getMoveList () {
    return fetch('/channel/movie/more/0?platform=ios&uuid=2A3DF059-902A-4CB7-87F1-F35F351BBB23&user_id=&version=v4.2.2')
  }
}
