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
  },
  {
    path:'/www',
    name:'personalpage',
    component:()=>import('../views/PersonalPage.vue')
  },
  {
    path:'/personalcol',
    name:'personalcol',
    component:()=>import('../views/PersonalCol.vue')
  },
  {
    path:'/personaldya',
    name:'personaldya',
    component:()=>import('../views/PersonalDya.vue')
  },
  {
    path:'/personalopt',
    name:'personalopt',
    component:()=>import('../views/PersonalOpt.vue')
  },
  {
    path:'/personalser',
    name:'personalser',
    component:()=>import('../views/PersonalSer.vue')
  },
  {
    path:'/personalsub',
    name:'personalsub',
    component:()=>import('../views/PersonalSub.vue')
  },
  {
    path:'/personalvid',
    name:'personalvid',
    component:()=>import('../views/PersonalVid.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
