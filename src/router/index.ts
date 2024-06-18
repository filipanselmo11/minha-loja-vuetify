/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Aves from '../pages/Frios/Aves.vue';
import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/frios',
    children: [
      {
        path:'aves',
        component: Aves
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cadastro',
    component: Cadastro
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
