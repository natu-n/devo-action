import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/devo-action/',
      name: 'home',
      component: Home
    },
    {
      path: '/devo-action/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/devo-action/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/devo-action/axios',
      name: 'axios',
      component: () => import('@/views/axios.vue')
    },
    {
      path: '/devo-action/line',
      name: 'line',
      component: () => import('@/views/line.vue')
    }
  ]
})
