import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/week1', component: () => import('../views/Week1View.vue') },
    { path: '/week3', component: () => import('../views/Week3View.vue') },
    { path: '/Day12', component: () => import('../views/Day12View.vue') },
    { path: '/Day13', component: () => import('../views/Day13View.vue') },
    { path: '/Day14', component: () => import('../views/Day14View.vue') },
    { path: '/Day15', component: () => import('../views/Day15View.vue') },
    { path: '/Day16', component: () => import('../views/Day16View.vue') },
    { path: '/Day17', component: () => import('../views/Day17View.vue') },
    { path: '/Day17Signup', component: () => import('../views/SignupView.vue') },
    { path: '/Day18', component: () => import('../views/Day18View.vue') },
    { path: '/Day19', component: () => import('../views/Day19View.vue') },
    { path: '/todolist', component: () => import('../views/TodoList.vue') }
  ]
})

export default router
