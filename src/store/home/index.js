// home模块小仓库
// 引入对应接口
import {reqCateGoryList} from '@/api'
// state:仓库存储数据的地方（对象）
const state = {
    cateGoryList:[]
};
// mutation:修改state的唯一手段（对象）
const mutations = {
    CATEGORYLIST(state,cateGoryList){
        state.cateGoryList = cateGoryList
    }
};
// action:处理action,可以书写自己的业务逻辑，也可以处理异步（对象）
const actions = {
    async CateGoryList({commit}){
        // 通过调用API接口函数，像服务器端请求数据存放到对应仓库
        // 返回的是一个promise对象,且需要获取成功的返回结果
        let result = await reqCateGoryList();
        console.log(result);
        // commit('CATEGORYLIST',result.data)
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    }
};
// getters:理解为计算属性，可以用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
}