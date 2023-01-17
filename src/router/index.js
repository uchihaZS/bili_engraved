import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: '/222',
    name: 'home',
    component: ()=>import('../views/HomePage.vue')
  },
  {
    path: '/',
    name: 'playpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
