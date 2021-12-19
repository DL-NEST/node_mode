import type { RouteRecordRaw } from 'vue-router';
import {modulesRoutes} from '@/router/modules';
/**
 * 固定不变的路由
 * @description !最后一项重定向未找到的路由须放置路由的最后一项
 */
const constantRoutes: RouteRecordRaw[] = [
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
    children: modulesRoutes,
  },
];

export default constantRoutes;
