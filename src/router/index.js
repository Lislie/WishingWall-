import Vue from 'vue'
import Router from 'vue-router'
// import wish from '@/components/wish/wish'
// import App from '@/App'
import postWish from '../components/page4/page4.vue'
import already from '../components/page6/page6.vue'
import share from '../components/page5/page5.vue'
// import wrapper from '../wrapper.vue'
import pubWish from '../components/page7/page7.vue'
import index from '../components/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/postWish/:id',
      name: 'postWish',
      component: postWish
    },
    {
      path: '/already/:id',
      name: 'already',
      component: already
    },
    {
      path: '/share/:id',
      name: 'share',
      component: share
    },
    {
      path: '/pubWish',
      name: 'pubWish',
      component: pubWish
    }

  ]
})
