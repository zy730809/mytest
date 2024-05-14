<template>
    <div>
        <!-- 三级联动组件已经注册为全局组件，因此不需要 -->
        <TapeNav></TapeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rnak></Rnak>
        <Like></Like>
        <!--v-for在组件身上进行遍历 + 使用props实现父组件向子组件通信  -->
        <!-- <Floor></Floor>  -->
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
        <Brand></Brand>
    </div>
</template>

<script>
// 引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rnak from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default{
    name:'Home',
    mounted(){
        // 获取floor组件的mock数据
        // floor组件是home组件的子组件
        this.$store.dispatch('getFloorList');
    },
    computed:{
        ...mapState({
            floorList:(state)=>state.home.floorList
        })
    },
    components:{
        ListContainer,
        Recommend,
        Rnak,
        Like,
        Floor,
        Brand
    }
}
</script>
<style scoped>

</style>
