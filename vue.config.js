const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{
        // 提供数据的服务器
        target:'http://gmall-h5-api.atguigu.cn',
      }
    }
  },
})
// //打包配置文件,vue 脚手架内部已经配置好了 webpack
// module.exports = {
//   assetsDir: 'static',
//   parallel: false,
//   publicPath: './',
// };

