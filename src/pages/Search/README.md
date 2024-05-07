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
