------1、search页面的三级联动控件的显示和隐藏的设置
        v-show="true/false"
        (1)注意点1：非home路由组件页面一挂载就将二三级控件全部隐藏起来；
        (2)注意点2：this.$route.path != '/home';
        (3)知识点回顾：v-show/v-if的区别；

------2、search页面的三级联动空间的动画效果的设置
        <transition name='sort'>
            <!-- 包裹的控件 -->
        </transition>
        <!-- 动画进入效果 -->
        .sort-enter{
            height: @px;
            transform:rotate(0deg);
        }
        <!-- 动画离开效果设置 -->
        .sort-enter-to{
            height: 461px;
            transform:rotate(360deg);
        }
        <!-- 定义动画时间和速率 -->
        .sort-enter-active{
            transition: all .5s linear;
        }

------3、路由跳转过程中涉及到路由的创建与销毁,每跳转到一个页面就涉及到页面挂载，页面一挂载就会向服务器发送数据请求
        这样就会形成从home-search页面的切换过程中一直向服务器发送请求，但其实每次获取的数据都是一样的，
        所以可以避免重复向服务器请求数据，基于这点可以对项目做性能优化；
        (1)keep-alive保存(没有尝试)
        (2)即使使用本地存储也是会发向本地发送请求(不适合)
        (3)解决办法:希望获取数据的请求只发一次 将发送请求放在APP.vue根组件中，因为APP.vue只会执行一次，那么意味着就只会像服务器发送一次请求，就会将数据存放到仓库里面，后面就可以直接从仓库里面获取数据，实现了项目性能优化.


------4、合并query参数和params参数
        (1)query参数和params参数的区别
        (2)合并参数存在两种情况
            1)query参数已经存在,携带params参数进行跳转的时候还需要合并query参数;
            if(this.$route.params){
                location.params = this.$route.params;
                location.query = query;
                this.$router.push(location);
            }
            2)params参数已经存在,携带query参数进行跳转的时候还需要合并params参数;
            if(this.$route.query){
                let location = {name:'search',params:{keyword:this.keyword}}
                location.query = this.$route.query;
                this.$router.push(location)
            }

-----5、布局:浮动和定位
    浮动（Float）：
        定义：浮动是一种布局技术，通过将元素从普通的文档流中移动，使其沿着父元素的左侧或右侧浮动，并允许其他元素围绕它。
        使用：通过 CSS 中的 float 属性来设置元素的浮动方向，可以设置为 left（左浮动）、right（右浮动）或不浮动。
        应用：常用于实现多列布局、图像与文字的混排等效果。
    定位（Positioning）：
        定义：定位是一种布局技术，通过设置元素的位置属性，使其相对于其包含块（通常是父元素）进行定位，可以实现精准的布局效果。
        使用：通过 CSS 中的 position 属性来设置元素的定位方式，常见的值包括 static（默认定位）、relative（相对定位）、absolute（绝对定位）、fixed（固定定位）和 sticky（粘性定位）。
    应用：可以用来实现层叠效果、固定位置的导航菜单、模态框等。

-----6\mock.js模拟数据的学习
    (1)使用步骤:
        1)在项目当中src文件夹中创建mock文件夹;
        2)第二步准备JSON数据(mock文件夹中创建相应的JSON文件)-格式化一下，别留有空格(跑不起来的)在打包的时候，会把相应的资源原封不动打包到dist文件夹;
        3)把mock数据需要的图片放置到public文件夹中[public文件夹];
        4)创建mockserer.js通过mockjs插件实现模拟数据;
        5)mockserver.js文件在入口文件中引入(至少需要执行一次，能模拟数据);
    (2)具体语法的详细学习

        
------5、search界面向服务器请求数据接口地址
        接口地址:http://gmall-h5-api.atguigu.cn/api/list
        请求方式:POST
