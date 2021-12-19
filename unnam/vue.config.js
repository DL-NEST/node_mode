const path = require('path')

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions:{
        asar: true,
        npmRebuild: false,
      },
      preload: "src/preload.js",
      externals: ['serialport'],
      nodeModulesPath: ['../../node_modules', './node_modules','../node_modules']//这里是多个node_modules路径，按自己需要配置即可
    },
  },
  devServer: {
    port: 8088,
    proxy: {
      '/test': {
        target: process.env.VUE_APP_URL, // 后端接口地址
        changeOrigin: true, // 是否允许跨越
        secure: false,
        pathRewrite: {
          '^/test': ''
        }
      },
      '/user': {
        target: process.env.VUE_APP_USER_URL, // 后端接口地址
        ws: true,
        changeOrigin: true, // 是否允许跨越
        secure: false,
        pathRewrite: {
          '^/user': ''
        }
      }
    },
  },
  // 自定义默认路径
  chainWebpack: config => {
    config.resolve.alias
        .set('views', path.resolve(__dirname, 'src/views'));
  }
};
