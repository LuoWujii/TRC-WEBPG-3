import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import MpScrim from '@/views/MpScrim.vue'
import BattleRoyaleScrim from '@/views/BattleRoyaleScrim.vue'
import AllScrim from '@/views/AllScrim.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/mpScrim',
    name: 'mpScrim',
    component: MpScrim
  },
  {
    path: '/brScrim',
    name: 'brScrim',
    component: BattleRoyaleScrim
  },
  {
    path: '/scrims',
    name: 'scrims',
    component: AllScrim
  },
  {
    path: '/:catchAll(.*)',
    name: 'pageNotFound',
    component: PageNotFound
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
