import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import(/* webpackChunkName: "rooms" */ './views/Rooms.vue')
    }
  ]
})
