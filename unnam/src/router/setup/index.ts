/** 装填路由 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouterGuide } from '@/router/guard';
// 固定路由,错误重定向
import {constantRoutes} from '@/router/loadRouter';

const routes: RouteRecordRaw[] = [...constantRoutes];

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
