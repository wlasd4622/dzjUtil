import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'index'
      }
    },
    {
      name: 'index',
      path: '/index',
      meta: {
        title: 'index',
      },
      component: () => import('@/components/Index')
    }
  ]
})
