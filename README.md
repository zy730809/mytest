## HTML+CSS复习巩固
<link rel="icion" href="<%= BASE_URL %>reset.css">
    （1）<link> 标签：这是 HTML 中用于引入外部资源的标签，可以引入样式表、图标等外部资源。
    （2）rel="icon"。这表示该 link 标签指向的资源是一个图标文件，通常是用于设置网站的 favicon（浏览器标签页上显示的小图标）。
    （3）href="<%= BASE_URL %>reset.css"：这里使用了模板引擎（如 Vue.js 中的模板语法）。
    （4）<%= BASE_URL %> 是一个变量或表达式，会被替换为实际的基础 URL 地址。
    （5）link 标签的 href 属性指向了 reset.css 文件，这意味着要从基础 URL 地址加载名为 reset.css 的样式表文件。

## 路由传递参数相关面试题
* （1）路由传递参数（对象写法）path是否可以结合params参数一起使用？
    答：不可以！一般需要为路由命名，然后使用name结合params参数一起使用
    this.router.push({
        name:'search',
        params:{keyword:this.keyword},
        query:{k:this.keyword.toUpperCase}
    })

* （2）如何指定params参数可传可不传？
    答：配置路由的时候，已经占位（params参数），但是路由传递时就是不传递param参数，此时会出现路由路径存在问题。
        但在占位符后面加上一个问号【params参数就是可传可不传的】

* （3）params参数可以传递也可以不传递，但是如果传递是空串，该如何解决路径问题？
    答：使用undefined解决。
     this.router.push({
         name:'search',
        params:{keyword:''||undefined},
        query:{k:this.keyword.toUpperCase}
    })
* (4)路由组件可不可以传递props参数
    答：可以的.
    --布尔值写法：但只能传递params参数
    {
        path:'/search/:keyword',
        component:Search,
        meta:{show:true},
        name:"search",
        props:true
    },
    props:['keyword']
    --对象式写法：额外给路由组件传递一些参数
    {
        path:'/search/:keyword',
        component:Search,
        meta:{show:true},
        name:"search",
        props:{a:1,b:2}
    },
    props:['keyword','a','b']
    --函数式写法：可以params参数、querry参数传递给路由组件(常用)
    {
        path:'/search/:keyword',
        component:Search,
        meta:{show:true},
        name:"search",
        props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.querry.k}
        }
    },
    props:['keyword','k']
* (5)编程式路由跳转到当前路由(参数不变),多次执行会抛出NavigationDuplicated的警告错误,如何解决？
--路由跳转有两种方式：声明式导航  编程式导航
--声明式导航就没有这类问题，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种错误警告？
"vue-router":最新的vue-router引入了Promise
    function push(){
        return Promise((resolve,reject)=>{
        })
    }
    解决方案1：治标不治本
     this.$router.push({
        name:'search',
        params:{keyword:this.keyword},
        query:{k:this.keyword.toUpperCase()}
        },()=>{},()=>{}
    )
    解决方案2：其他组件也还会出现这样错误-----解决办法直接修改VueRouter原型上的方法
              this.$router.push()----理解push()方法的源头

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

* axios的二次封装
XMLHttpRequest、fetch、JQ、axios
axios二次封装？
请求拦截器：
响应拦截器：

* 接口统一管理
项目很小:完全可以在组件的生命周期函数中发送请求;
项目很大:axios.get('xxx')
index.js
三级联动模块：requests({url:'/product/getBaseCategoryList',method:"get"})

* 跨域问题
协议\域名\端口号  ----- 存在跨域问题
http://localhost:8080/#/home
http://39.98.123.211
module.export = {
// 代理跨域
    devServer:{
        proxy:{
            '/api':{
                // 提供数据的服务器
                target:'http://39.98.123.211',
            }
        }
    }
}
  
* nprogress 进度条的使用
nprogress.start():进度条开始
nprogress.done():进度条结束

* vuex状态管理库
vuex是官方提供的一个插件,用于集中式管理项目中数组
切记:并不是所有项目都需要vuex,如果项目很小,就不需要使用vuex

* 函数的防抖和节流
