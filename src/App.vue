<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件的引入 -->
    <router-view></router-view>
    <!-- 使用v-show显示和隐藏底部路由信息,但这种方式对于后续任务的开发不是很便利,需要继续迭代 -->
    <!-- <Footer v-show="$route.path=='/home' || $router.path == '/search' "></Footer> -->
    <!-- 基于路由元信息meta实现路由组件的显示与隐藏-->
    <Footer v-show="$route.meta.show"></Footer>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
