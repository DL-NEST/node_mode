/** 装填路由 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouterGuide } from '@/router/guard';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/index.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export async function setupRouter(app: App) {
  // 装载路由
  app.use(router);
  // 装载路由守卫
  createRouterGuide(router);
  // 等待装载结束
  await router.isReady();
}
