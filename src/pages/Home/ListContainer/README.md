-------1、首页轮播图动态实现
        （1）基于swiper技术进行撰写，不仅适用于PC端也适用于移动端；
        
        （2）swiper官网学习文档：https://www.swiper.com.cn/usage/index.html；
         
         (3) 在该目录下编写了一个相应的demo;
                引包;
                轮播图结构;
                new Swiper实例;
        
        (4)ListContainer组件中轮播图的设计;
                安装swiper插件:npm install --save swiper@5
        
        (5)存在问题:按照事件发生的先后顺序,如果轮播图的实例化放在mounted里面实现
           会出现组件身上的数据还未绑定,就进行了实例化,故而此时组件结构还不完整
           虽然说mounted(){}里面是组件挂载完毕才会执行的,但这里数据的获取是通过v-for动态实现的
           所以如果放在mounted(){}实例化是不可以的
        
        (6)
        解决办法1:setTimeout(){
                <!-- 使用计时器函数解决问题 -->
        }
        解决办法2:
        最终解决办法:watch + $nextTick
                `  watch:{
                                bannerList:{
                                        <!-- 执行handler方法,说明组件身上bannerList属性已经存在 -->
                                        <!-- 当前只能保证bannerList数据已经存在,但是v-for是否成功执行无法确定,轮播图效果还是无法执行,说明new Swiper执行之前结构还是不完整的 -->
                                        handler(newValue,oldValue){
                                                <!-- vue获取dom元素的方法:使用ref -->
                                                <!-- this.$refs.xxx:即可获取到对应的Dom元素 -->
                                                var mySwiper = new Swiper (document.querySelector(".swiper-container"), {
                                                        loop: true, // 循环模式选项
                                                        // 如果需要分页器
                                                        pagination: {
                                                                el: '.swiper-pagination',
                                                        },
                                                        // 如果需要前进后退按钮
                                                        navigation: {
                                                                nextEl: '.swiper-button-next',
                                                                prevEl: '.swiper-button-prev',
                                                        },
                                                }) 
                                        }
                                }
                        }
                        $nextTick :-----[该知识点需要重点学习]
                                (1)Vue.js 中的一个重要方法，用于在[下次 DOM 更新 {循环结束(v-for)之后} 执行延迟回调]。
                                (2)在 {修改数据之后} 立即使用这个方法,它主要用于获取更新后的 DOM。
                                (3)nextTick 方法接受一个回调函数作为参数，并在 DOM 更新循环结束之后执行该回调。
                                (4)这样做可以确保在更新后立即对 DOM 进行操作或获取更新后的 DOM 元素。
                                (5)$nextTick可以保证页面中的解构一定是有的,经常和很多插件一起使用[都需要DOM结构存在]
                        `
        知识点回顾:vue的ref属性用于获取Dom元素:this.$refs.xxx === document.querySelector(".swiper-container") 
