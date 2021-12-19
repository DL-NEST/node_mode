// user请求
import axios from '@/request';
import qs from 'qs';

export default class User {
  /**
   * get方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  public static get = (url: string, params?: object) => {
    return new Promise((resolve, reject) => {
      axios.get(url, { params }).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  public static post = (url: string, params?: object) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}

