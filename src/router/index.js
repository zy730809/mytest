// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
console.log(VueRouter)

// 重写push|replace方法,直接从原型上改写，以便所有组件都可以同时解决问题
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolve,reject){
    // 如果成功与失败的参数已经传递，调用原始originPush方法，且实用call篡改上下文this
    if(resolve && reject){
        // call与apply区别：
        // 相同点：都可以调用函数一次，都可以篡改函数上下文this;
        // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location,resolve,reject){
    // 如果成功与失败的参数已经传递，调用原始originPush方法，且实用call篡改上下文this
    if(resolve && reject){
        // call与apply区别：
        // 相同点：都可以调用函数一次，都可以篡改函数上下文this;
        // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

// 配置路由,默认暴露VueRouter对象
export default new VueRouter({
    // 配置路由，可以为路由添加元信息（meta)
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:true}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:true}
        },
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:"search",
            // props:true
        },
        // 重定向：在项目跑起来的时候，访问/，立马让它定向到首页
        {
            path:'*',
            redirect:'/Home'
        }
    ]

})