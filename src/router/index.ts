/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
