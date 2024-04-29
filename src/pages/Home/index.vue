<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>
<script>
// @表示的是文件夹src
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default{
    name:'Home',
    components:{
        ListContainer,
        Brand,
        Floor,
        Like,
        Rank,
        Recommend
    }
}
</script>
<style lang="less">
</style>