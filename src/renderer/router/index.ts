import { createRouter, createWebHistory } from 'vue-router'
import MainWindow from '@/views/MainWindow.vue'
import Help from '@/views/HelpCenter.vue'

const routes = [
  {
    path: '/',
    name: 'MainWindow',
    component: MainWindow,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
