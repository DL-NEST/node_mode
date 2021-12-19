/** 模块路由 */
import type { RouteRecordRaw } from 'vue-router';
import {getRouteConst, routeName, routePath, routeTitle} from '@/router/constant';

/**
 * 模块化可添加的路由
 * @description !
 */
const modulesRoutes: RouteRecordRaw[] = [
  {
    path: '/main',
    redirect: routePath('console'),
  },
  {
    path: routePath('console'),
    name: routeName('console'),
    component: () => import('views/main_page/console/index.vue'),
  },
  {
    path: routePath('query'),
    name: routeName('query'),
    component: () => import('views/main_page/query/index.vue'),
  },
  {
    path: routePath('attendance'),
    name: routeName('attendance'),
    component: () => import('views/main_page/attendance/index.vue'),
  },
  {
    path: routePath('infoInput'),
    name: routeName('infoInput'),
    component: () => import('views/main_page/infoInput/index.vue'),
  },  {
    path: routePath('permission'),
    name: routeName('permission'),
    component: () => import('views/main_page/permission/index.vue'),
  },
  {
    path: routePath('setup'),
    name: routeName('setup'),
    component: () => import('views/main_page/setup/index.vue'),
  },
];

export {modulesRoutes};
