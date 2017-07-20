import Vue from 'vue'
import Router from 'vue-router'
// import wish from '@/components/wish/wish'
// import App from '@/App'
import postWish from '../components/page4/page4.vue'
import already from '../components/page6/page6.vue'
import share from '../components/page5/page5.vue'
import wrapper from '../wrapper.vue'
import pubWish from '../components/page7/page7.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wrapper',
      component: wrapper
    },
    {
      path: '/postWish',
      name: 'postWish',
      component: postWish
    },
    {
      path: '/already',
      name: 'already',
      component: already
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/pubwish',
      name: 'pubwish',
      component: pubWish
    }

  ]
})
