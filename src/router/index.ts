import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

import HomeView from '@/views/HomeView.vue';

import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [{ path: '/', name: 'Home', component: HomeView }],
    },
    {
      path: '/',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [{ path: '/login', name: 'Login', component: LoginView }],
    },
  ],
});

export default router;
