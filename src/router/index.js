import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helpView from '../views/helpView.vue'
import ConsulServer from '../views/ConsulServer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/help',
    name: 'help',
    component: helpView
  },
  {
    path: '/ConsulServer',
    name: 'Consul',
    component: ConsulServer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
