<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// 引入非路由组件[Header、Footer]
import Header from './components/Header'
import Footer from './components/Footer'
// 暴露组件
export default {
  name:'App',
  // 注册子组件
  components:{
    Header,
    Footer
  }
}

</script>
<style scoped>
</style>
