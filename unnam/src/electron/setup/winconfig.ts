import {join} from 'path';

const loginOptions = {
  width: 430,
  height: 370,
  center: true,
  icon: '',
  frame: false,
  autoHideMenuBar: true,
  transparent: true,
  title: '考勤系统',
  webPreferences: {
    // 使用pluginOptions。nodeIntegration，别管它
    // 查看layman.github.io/vue-cli-plugin- electronic -builder/guide/security.html#node-integration获取更多信息
    nodeIntegration: (process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    enableRemoteModule: true, // 使用remote模块
    preload: join(__dirname, 'preload.js'),
  },
};

const mainOptions = {
  width: 1250,
  height: 789,
  center: true,
  icon: '',
  frame: false,
  autoHideMenuBar: true,
  transparent: true,
  webPreferences: {
    // 使用pluginOptions。nodeIntegration，别管它
    // 查看layman.github.io/vue-cli-plugin- electronic -builder/guide/security.html#node-integration获取更多信息
    nodeIntegration: (process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    enableRemoteModule: true, // 使用remote模块
    preload: join(__dirname, 'preload.js'),
  },
};

export {mainOptions, loginOptions};
