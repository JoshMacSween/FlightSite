import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/list',
    name: 'flight-list',
    props: true,
    component: () => import('../components/FlightList.vue')
  },
  {
    path: '/flights/:id',
    name: 'flight-show',
    props: true,
    component: () => import('../components/FlightShow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
