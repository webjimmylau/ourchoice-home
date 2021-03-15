import vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index'
import Login from '@/views/login/index'
import Register from '@/views/register/index'
import PasswordReset from '@/views/password-reset/index'
import Join from '@/views/join/index'
import About from '@/views/about/index'
import Empty from '@/views/empty/index'

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/password-reset',
    component: PasswordReset
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '*',
    component: Empty
  }
]

vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
