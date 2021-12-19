import control from './control';
import serialport from './serialport';

// 注册主线程管道
export function signUp() {
  control();
  serialport();
}

