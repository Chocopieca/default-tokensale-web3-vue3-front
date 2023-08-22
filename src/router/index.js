import { createRouter, createWebHistory } from 'vue-router'
import {defineAsyncComponent} from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ComponentsPage',
      component: () => import('../views/ComponentsPage.vue')
    },
  ]
})

export default router
