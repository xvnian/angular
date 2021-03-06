import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import SwipeCell from '@/components/swipe-cell.vue'
import Rxjs from '@/components/rxjs-search.vue'
import Routerdemo from '@/components/router.vue'
import Ts from '@/components/ts.vue'
import TsClass from '@/components/ts-class.vue'
import jsx from '@/components/jsx-component.tsx'

Vue.use(Router)

// let a:any =9

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: jsx
    },
    {
      path: '/ts',
      component: Ts
    },
    {
      path: '/ts-class',
      component: TsClass
    },
    {
      path: '/cell',
      component: SwipeCell
    },
    {
      path: '/project/create',
      component: SwipeCell
    },
    {
      path: '/project/:projectId/detail',
      component: TsClass
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
