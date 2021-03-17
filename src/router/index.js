import vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/index')
const Login = () => import('@/views/login/index')
const Register = () => import('@/views/register/index')
const PasswordReset = () => import('@/views/password-reset/index')
const Join = () => import('@/views/join/index')
const About = () => import('@/views/about/index')
const Empty = () => import('@/views/empty/index')

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
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
