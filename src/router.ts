import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('@/views/axios.vue')
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('@/views/line.vue')
    }
  ]
})
