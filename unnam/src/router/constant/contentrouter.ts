/** 路由表 */
import {RouteConst} from '@/interface/router';


export type RouteKey = 'console' | 'query' | 'attendance' | 'infoInput' | 'permission' | 'setup';

export const mainRouter: RouteKey[] = ['console', 'query', 'attendance', 'infoInput', 'permission', 'setup'];
/** 路由map */
const routeConstMap = new Map<RouteKey, RouteConst>([
  [
    'console',
    {
      name: 'console',
      path: '/console',
      title: 'console',
    },
  ],
  [
    'query',
    {
      name: 'query',
      path: '/query',
      title: 'query',
    },
  ],
  [
    'attendance',
    {
      name: 'attendance',
      path: '/attendance',
      title: 'attendance',
    },
  ],
  [
    'infoInput',
    {
      name: 'infoInput',
      path: '/infoInput',
      title: 'infoInput',
    },
  ],
  [
    'permission',
    {
      name: 'permission',
      path: '/permission',
      title: 'permission',
    },
  ],
  [
    'setup',
    {
      name: 'setup',
      path: '/setup',
      title: 'setup',
    },
  ],
]);

/** 获取路由的结构声明(name、path、title) */
export function getRouteConst(key: RouteKey) {
  return routeConstMap.get(key)!;
}
/** 路由名称 */
export function routeName(key: RouteKey) {
  return routeConstMap.get(key)!.name;
}
/** 路由路径 */
export function routePath(key: RouteKey) {
  return routeConstMap.get(key)!.path;
}
/** 路由标题 */
export function routeTitle(key: RouteKey) {
  return routeConstMap.get(key)!.title;
}

