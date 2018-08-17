import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import SwipeCell from '@/components/swipe-cell.vue'
import Rxjs from '@/components/rxjs-search.vue'
import Routerdemo from '@/components/router.vue'

Vue.use(Router)

let a:any =9

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cell',
      component: SwipeCell
    },
    {
      path: '/rxjs',
      component: Rxjs
    },
    {
      path: '/router',
      component: Routerdemo,
      children: [
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'member',
          component: Routerdemo
        }
      ]
    }
  ]
})
