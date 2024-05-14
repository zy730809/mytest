------1-获取floor组件的mock数据
        (1)基本步骤类似与ListContainer组件;
        (2)注意这里不可以直接在floor组件身上派发请求,需要从父组件开始派发请求;
        (3)
        <!--v-for 也可以在自定义标签(组件)身上进行遍历 -->
        <Floor v-for='(floor,index) in floorList' :key="floor.id"></Floor> 
        (4)当前数据在父组件身上,需要将数据传送给子组件,实现父子组件通信:props
            * 组件通信方式:1)props:父组件---子组件
                          2)自定义事件
                          3)全局事件总线
                          4)pubsub-js:vue中几乎不用,全能

------2-插槽知识点的学习
