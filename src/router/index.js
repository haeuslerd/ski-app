import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import AboutView from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: AboutView 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
