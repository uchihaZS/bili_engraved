import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/HomePage.vue')
  },
  {
    path: '/playpage',
    name: 'playpage',
    component: () => import('../views/PlayPage.vue')
  },
  {
    path:'/searchpage',
    name:'searchpage',
    component:()=>import('../views/SearchPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
