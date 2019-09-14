import Vue from 'vue'
import Router from 'vue-router'
import CardLayout from './layouts/CardLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: CardLayout,
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue')
        }
      ]
    },
    {
      path: '/rooms',
      component: CardLayout,
      children: [
        {
          path: '/rooms',
          name: 'rooms',
          component: () => import(/* webpackChunkName: "rooms" */ './pages/Rooms.vue')
        }
      ]
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './pages/Game.vue')
    }

  ]
})
