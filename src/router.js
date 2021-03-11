import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home.vue'),
      meta: {
        title: '首页 - 纵购商城'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
      meta: {
        title: '卖家注册 - 纵购商城'
      }
    }
  ]
})

export default router
