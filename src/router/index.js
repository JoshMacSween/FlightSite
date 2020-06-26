import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../components/FlightList.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
