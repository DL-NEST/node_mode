import {RouteKey} from '@/router/constant';

export interface RouteConst {
  /** 路由名称 */
  name: RouteKey;
  /** 路由路径 */
  path: string;
  /** 路由标题 */
  title: string;
}
