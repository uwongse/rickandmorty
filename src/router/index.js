import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unknown',
    name: 'unknown',
    component: () => import( '../views/UnknownView.vue')
  },
  {
    path: '/female',
    name: 'female',
    component: () => import( '../views/FemaleView.vue')
  },
  {
    path: '/male',
    name: 'male',
    component: () => import( '../views/MaleView.vue')
  },
  {
    path: '/genderless',
    name: 'genderless',
    component: () => import( '../views/GenderlessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
