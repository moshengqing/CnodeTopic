import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Editor from '@/components/Editor'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/edit',
      name: 'edit',
      component: Editor
    },
    {
      path: '/detail',
      name: 'detail:id',
      component: Detail,
      meta: {
        keepAlive: false // 不需要缓存
      }
    }
  ]
})
