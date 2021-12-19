import instance from '@/request';

// 3，后端数据标准{"code": 2000,"msg": "成功","data": {"test": "dd"}}

// 请求拦截器+装饰请求，添加token
instance.interceptors.request.use((config) => {
  // cont {token} from '@/store';
  config.headers = {Token: 'test'}; // 添加请求头的Token
  return config;
}, (error) => Promise.reject(() => {
  // 请求错误
  window.$message?.error('请求失败');   // 弹出错误信息
}));

// 响应拦截器
instance.interceptors.response.use((res) => {
  const { data } = res;
  if (data.code !== 2000) {
    window.$message?.error(data.code + '.' + data.msg);   // 弹出错误信息
  }
  return data;
}, (err) => { // 这里的error.response 和 res 格式一样，只是 status 不是200
  // 服务器未响应错误
  return Promise.reject(err.response);
});
