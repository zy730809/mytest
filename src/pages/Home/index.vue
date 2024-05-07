<template>
    <div>
        <!-- 三级联动组件已经注册为全局组件，因此不需要 -->
        <TapeNav></TapeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rnak></Rnak>
        <Like></Like>
        <Floor></Floor> 
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
export default{
    name:'Home',
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
