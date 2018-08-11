import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import SwipeCell from '@/components/swipe-cell.vue'
import Rxjs from '@/components/rxjs.vue'

Vue.use(Router)

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
    }
  ]
})
