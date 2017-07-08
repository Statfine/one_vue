import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Welcome from '@/views/Welcome'
import NotFound from '@/views/NotFound'
import Dashboard from '@/views/Dashboard'
import ListPage from '@/views/ListPage'
import BookPage from '@/views/BookPage'
import MusicPage from '@/views/MusicPage'
import MovePage from '@/views/MovePage'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 改方法删除url上的 #
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/list',
          name: 'list',
          component: ListPage
        },
        {
          path: '/book',
          name: 'book',
          component: BookPage
        },
        {
          path: '/music',
          name: 'music',
          component: MusicPage
        },
        {
          path: '/move',
          name: 'move',
          component: MovePage
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 权限判断 初次登录跳转welcome页面，避免死循环添加meta字段
router.beforeEach((to, from, next) => {
  // console.log('==>' + store.getters.welcome)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires welcome, check if welcome
    // if not, redirect to welcome page.
    if (store.getters.welcome) next()
    else next({ path: '/' })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
