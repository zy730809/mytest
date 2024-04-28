// 路由配置文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// 路由组件的配置
export default new VueRouter({
    routes:[
        {
           name:'' ,
           path:'/home',
           component:Home,
        //  路由元信息:meta,路由里面的属性是不可以瞎配置的
           meta:{
            show:true
           }
        },
        {
            name:'',
            path:'/login',
            component:Login,
            meta:{
                show:true
            }
        },
        {
            name:'',
            path:'/register',
            component:Register,
            meta:{
                show:true
            }
        },
        {
            name:'',
            path:'/search',
            component:Search,
            meta:{
                show:true
            }
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})