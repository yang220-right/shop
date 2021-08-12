import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('components/login/Login')
const Home = () => import('views/home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问登录页，直接放行
  if (to.path === '/login') return next()
  // 从session获取token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转登录页
  if (!tokenStr) return next('/login')
  // 有token,直接放行
  next()
})

export default router
