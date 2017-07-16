import Vue from 'vue'
import Router from 'vue-router'
import wish from '@/components/wish/wish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wish',
      component: wish
    }
  ]
})
