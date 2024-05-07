 0-最新接口地址:
 http://gmall-h5-api.atguigu.cn

 1、三级联动接口测试
 http://gmall-h5-api.atguigu.cn
 /api/product/getBaseCategoryList 
 {
    "code": 200,
    "message": "成功",
    "data": []
 }

 2、axios二次封装-----request.js
 3、API接口统一管理------index.js

 4、解决跨域问题
 什么是跨域：协议、域名、端口号不同请求、称之为跨域
 ---JSONP CORS 代理服务器（webpack提供了这个功能webpack.config.js === vue.config.js）
 ----前台项目本地服务器:http://localhost:8080
 ----后台服务器
 devServer:{
    proxy:{
      // 如果请求路径中包含'/api'则通过代理服务器向真实服务器获取相应数据
      '/api':{
        // 提供数据的服务器
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }
  }

5、vuex状态管理库
---vuex是官方提供的一个插件，状态管理库，集中管理项目组件中共用的数据
标记：并不是所有项目都需要vuex,如果项目很小，完全不需要vuex,如果项目很大，则需要vuex维护共用数据；
-----安装vuex@4.1.0版本