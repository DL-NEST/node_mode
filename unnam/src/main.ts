// import './plugins/axios';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { createPinia } from 'pinia';

// 添加全局样式
import './style/index.scss';
// 通用字体
import 'vfonts/FiraCode.css';
// 创建实列
const app = createApp(App);

(function setupApp() {
  // 装载全局store/pinia
  app.use(createPinia());
  // 装载路由
  setupRouter(app);
  // 挂载实列
  app.mount('#app');
})();
