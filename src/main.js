import Vue from 'vue'
import App from './App.vue'
// 注册路由
import router from './router/'
// 注册全局路由组件
import TypeNav from './components/TypeNav'
// 第一个参数：全局组件的名字;第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
