import Vue from 'vue'
import App from './App.vue'
// 三级联动组件注册为全局组件
import TapeNav from './components/TapeNav'

// 第一个参数：全局组件的名字;第二个参数：哪一个组件
Vue.component(TapeNav.name,TapeNav)

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

// 引入mockServe.js-----mock数据
import '@/mock/mockServe';

// 引入轮播图样式
import 'swiper/css/swiper.css'; 

Vue.config.productionTip = false
const vc = new Vue({
  render: h => h(App),
  // k-v一致可以进行缩写
  // 这里注册完路由，不管路由组件还是非路由组件，其身上都绑定了 $route 及 $router 属性
  router,
  // 注册仓库
  store,
}).$mount('#app')
console.log(vc)