import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/login',
    children: [
      { path: '/login', name: 'Login', component: () => import('@/components/Login') },
      { path: '/register', name: 'Register', component: () => import('@/components/Register') },
      { path: '/email', name: 'Email', component: () => import('@/components/Email') }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/components/admin/AdminIndex'),
    children: [
      { path: '/adminHome',name: 'AdminHome', component: () => import('@/components/admin/AdminHome') },
      { path: '/admin/dashboard', name: 'Dashboard', component: () => import('@/components/admin/dashboard/admin/Index') },
      { path: '/admin/log', name: 'Log', component: () => import('@/components/admin/user/Log') },
      { path: '/admin/userProfile', name: 'UserProfile', component: () => import('@/components/admin/user/UserProfile') },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
