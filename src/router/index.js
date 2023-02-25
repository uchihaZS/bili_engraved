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
    path:'/personalpage',
    name:'personalpage',
    component:()=>import('../views/PersonPage/PersonalPage.vue')
  },
  {
    path:'/personalcol',
    name:'personalcol',
    component:()=>import('../views/PersonPage/PersonalCol.vue')
  },
  {
    path:'/personaldya',
    name:'personaldya',
    component:()=>import('../views/PersonPage/PersonalDya.vue')
  },
  {
    path:'/personalopt',
    name:'personalopt',
    component:()=>import('../views/PersonPage/PersonalOpt.vue')
  },
  {
    path:'/personalser',
    name:'personalser',
    component:()=>import('../views/PersonPage/PersonalSer.vue')
  },
  {
    path:'/personalsub',
    name:'personalsub',
    component:()=>import('../views/PersonPage/PersonalSub.vue')
  },
  {
    path:'/personalvid',
    name:'personalvid',
    component:()=>import('../views/PersonPage/PersonalVid.vue')
  },
  {
    path:'/answerme',
    name:'answerme',
    component:()=>import('../views/Message/AnswerMe.vue')
  },
  {
    path:'/msgopt',
    name:'msgopt',
    component:()=>import('../views/Message/MsgOpt.vue')
  },
  {
    path:'/msggoods',
    name:'msggoods',
    component:()=>import('../views/Message/Goods.vue')
  },
  {
    path:'/sysmsg',
    name:'sysmsg',
    component:()=>import('../views/Message/SysMsg.vue')
  },
  {
    path:'/mymsg',
    name:'mymsg',
    component:()=>import('../views/Message/MyMsg.vue')
  },
  {
    path:'/history',
    name:'history',
    component:()=>import('../views/History.vue')
  },
  {
    path:'/dynamic',
    name:'dynamic',
    component:()=>import('../views/Dynamic.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
