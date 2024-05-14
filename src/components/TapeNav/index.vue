<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
            <div class="container">
                <div @mouseleave="leaveShow" @mouseenter="enterShow"> 
                    <h2 class="all">全部商品分类</h2>
                    <!-- 为二三级组件添加动画效果 -->
                    <Transition name="sort">
                        <div class="sort" v-show="show">
                        <!-- 使用事件委派方式需要考虑两个问题：（1）如何确定点击的是a组件；（2）如何确定是哪一级组件（a1、a2、a3） -->
                        <div class="all-sort-list2" @click="goSearch">
                            <!-- :
                                class="{cur:currentIndex==index}": 
                                这是 Vue.js 中的动态绑定:class 指令。
                                它的作用是根据条件动态地添加或移除类。
                                在这里，{cur:currentIndex==index} 是一个对象语法，
                                表示如果 currentIndex 等于当前循环的索引 index，
                                就会给这个 div 元素添加名为 "cur" 的类，否则不添加。
                            -->
                            <!-- 一级分类 -->
                            <div class="item bo" v-for="(c1,index) in cateGoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}" @mousemove="changeIndex(index)">
                                <h3>
                                    <!-- 为a标签绑定一个自定义属性 -->
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                                    <!-- 一级跳转：声明式导航---由于router-link是组件，会消耗大量内存 -->
                                    <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                                    <!-- 一级跳转：编程式导航---直接这里写会为每个组件都绑定一个回调函数 -->
                                    <!-- <a @click="goSearch">{{c1.categoryName}}</a> -->
                                </h3>
                                <!-- 二、三级分类 -->
                                <!-- 
                                    :style="{display:currentIndex==index?'block':'none'}": 
                                    这是 Vue.js 中的动态绑定:style 指令，用于根据条件动态地设置元素的 CSS 样式。
                                    它的值是一个对象，对象中的键是 CSS 属性名，值是相应的 CSS 属性值。 
                                -->
                                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                    <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId" >
                                        <dl class="fore" >
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                                <!-- 二级页面跳转 -->
                                                <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                            </dt>
                                            <dd >
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                                    <!-- 三级页面跳转 -->
                                                    <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Transition>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
// 把lodash全部功能函数全部引入，可以按需引入实现对项目代码的优化
import _ from 'lodash'
// 按需引入的方式，下面就可以直接写throttle(),不需要再写._throttle()
// import throttle from 'lodash/throttle'
export default{
    name:'TapeNav',
    data(){
        return{
            currentIndex:-1,
            show:true
        }
    },
    methods:{
        // changeIndex(index){
        //     this.currentIndex = index
        // }
        // 改写成ES5格式，调用_.throttle()函数实现节流操作
        changeIndex:_.throttle(function(index){
            this.currentIndex = index;
        },50),
        // 页面跳转及传参
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
                if(this.$route.params){
                    location.params = this.$route.params;
                    location.query = query;
                    this.$router.push(location);
                }
            }
            console.log(this)
            console.log(event);
            console.log(event.target);
            console.log(element.dataset);
            console.log(location);
        },
        enterShow(){
            this.show = true
        },
        leaveShow(){
            this.currentIndex = -1;
            // 需要判断当前页面是否是home页面,其他组件最开始默认的是三级联动控件是隐藏的
            if(this.$route.path != '/home'){
                this.show = false;
            }
        }
    },
    /**
     * 组件挂载完毕，可以向服务器发送请求;
     * 通知vuex发送请求，获取数据，将其存储到仓库中;
    */ 
    mounted(){
        // 组件一挂载完毕就将show设置为false(但是前提是当前页面不是home页面)
        if(this.$route.path != '/home'){
            this.show = false;
        }
    },
    /**
     * 通过computed将该属性映射到组件本身;
     * 需要能根据页面初步掌握传过来的数据是什么样的类型;
     * 然后使用cateGoryList数据对其组件静态数据进行替换;
     *  mapState()函数返回的是一个对象，需要使用ES6的...;
     * */
    computed:{
        ...mapState({
            cateGoryList:(state)=>{
                return state.home.cateGoryList
            }
        })
    }

}
</script>
<style scoped lang="less">
.type-nav {
        border-bottom: 2px solid #e1251b;
        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }
                        // 通过css样式设置二三级分类的显示与隐藏
                        // &:hover {
                        //      .item-list {
                        //          display: block;
                        //      }
                        // }
                    }
                    .cur{
                        background: skyblue
                    }
                }
            }
             // 定义动画进入效果
            .sort-enter{
                height: 0px;
                // transform:rotate(0deg);
            }
            // 定义动画离开效果
            .sort-enter-to{
                height: 461px;
                // transform:rotate(360deg);
            }
            // 定义动画时间和速率
            .sort-enter-active{
                transition: all .5s linear;
            }
        }
    }
</style>
