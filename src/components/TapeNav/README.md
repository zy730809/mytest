-----1、实现三级联动的动态数据展示
[
    {
        id:'001',
        chaildId:[
            {
                id:'002',
                childId:[
                    {
                        name:'xxx'
                    },
                    {}
                ],
                childName:'xxx'
            },
            {}
        ],
        childName:'xxx'
    },
    {},
    {}
]
总结：数据格式(数组里面嵌套对象，一层层)
1、向服务器获取数据的时候一定要考虑代理跨域问题，解决代理跨域的方式有三种：JSONP、CORES、代理服务器
2、mapState()知识点分析
    mapState()返回的是一个对象，一般利用对象扩展符...，数组扩展符...

----

------2、实现三级联动背景颜色的设置 + 基于JS完成二三级控件的显示和隐藏
    基于JS语法进行编写【@mousemove @mouseleave 事件委派：将@mouseleave事件委派给两者的父组件】
    动态绑定class::class="{cur:currentIndex==index}----设置背景颜色

    css样式：display:none
            display:block
    动态绑定style：:style="{display:currentIndex==index?'block':'none'}"---设置二三级控件的显示和隐藏


-----3、防抖和节流
     lodash插件，里面封装了防抖和节流的业务【闭包+延迟器】
     lodash插件对外暴露一个_函数，用于防抖的函数_debounce(防抖函数，延迟时间)，用于节流的函数_.throttle(节流函数，节流时间)

     防抖：前面所有的触发都会被取消，只有最后一次执行在规定时间之后才会被触发，也就是说如果快速触发，只会执行一次。【防抖代码需要手写】
     input.oninput = _debounce(function (){
        console.log("发送ajax请求")
     }，1000)
     场景：

     节流：在规定的时间间隔内不会重复的触发回调，只有大于这个时间间隔才会触发回调，把频繁触发（可能会出现卡顿现象）变为少量触发（防止出现卡顿现象）。【节流代码需要手写】
     button.onclick=_.throttle(function(){
        count++;
     },1000) 
     场景：滚动条事件

     总结：
     防抖:用户操作很频繁，但是只是执行一次
     节流:用户操作很频繁，但是把频繁的操作变为少量操作【可以给浏览器有充裕的时间解析代码】//节流:闭包+延迟器


     滚动条事件
     三级联动的节流操作，插件的引入使用按需引入（项目优化手段之一）
     import throttle from 'lodash/throttle'
     methods:{
        // 改写成ES5格式，调用_.throttle()函数实现节流操作
        changeIndex:_.throttle(function(index){
            this.currentIndex = index
        },50)
    },

-----4、三级联动页面跳转及传参
    声明式导航：<router-link to='跳转地址' ></router-link>
    编程式导航：this.$router.push/replace(name:'xxx',querry:{a1:'xxx',a2:'xxx'})
    
    （1）对于三级联动页面跳转而言，不适合采用声明式导航，因为每一个router-link都是一个组件，绑定过后页面解析会一次性形成很多个组件，然后造成内存消耗过多，页面卡顿现象；
    （2）编程式导航也存在一个问题，不适合在每个子组件后面绑定跳转，最好利用事件委派，将跳转任务转交给父组件；
    （3）总结：三级联动页面跳转：编程式跳转+事件委派（事件委派也存在一些问题，后续传参如何确认是哪一级）
    
    知识点复盘：
        let {categoryname,categoryid} = element.dataset;
        基于JavaScript的结构赋值语句，它将对象 element.dataset = {v-19f21838: '', categoryname: '图书、音像、电子书刊', category1id: '1'} 中的 categoryname 和 categoryid 属性的值分别赋给变量 categoryname 和 categoryid。
    
    知识点点复盘：
        path:'/search/:keyword?',当前页面接受传过来的参数

    页面跳转及相应判断的具体代码：
        goSearch(event){
            let element = event.target;
            let {categoryname,category1id,category2id,category3id} = element.dataset;
            // 首先判断是不是a组件
            if(categoryname){
                //  整理传入参数
                let location = {name:'search'}
                let query = {categoryname:'categoryname'};
                // 其次判断是a组件的哪一级
                if(category1id){
                    query.category1id = category1id;
                }else if(category2id){
                    query.category2id = category2id;
                }else{
                    query.category3id = category3id;
                }
                location.query = querry;
                this.$router.push(location);
            }
        }
    注意点：（1）传参过程中，参数名query绝对不可以写错，路由配置 path:'/search/:keyword?'；
            (2) 路由配置表示一个路径为 /search/:keyword? 的路由。其中:keyword相当于一个占位符；
                `/search 是路由的基本路径。
                :keyword? 表示 keyword 是一个参数，而 ? 表示这个参数是可选的。这意味着你可以有以下几种情况：
                    如果你访问 /search，keyword 参数将被视为未提供。
                    如果你访问 /search/apple，keyword 参数将被视为提供了，其值为 "apple"。
                    如果你访问 /search 之外的其他路径，则这个路由规则不会匹配。
            `





