// 当前这个模块，API进行统一管理
import requests from './request'

// 三级联动模块
// url:/api/product/getBaseCategoryList   method:get   无参数
// axios发请求返回的是Promise对象,需要将请求数据进行返回
export const reqCateGoryList = ()=>requests({url:'/product/getBaseCategoryList',method:"get"})
