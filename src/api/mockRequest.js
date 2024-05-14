// 实现对axios的二次封装
import axios from 'axios';
// 引入进度条以及进度条的样式
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// start:进度条开始  done:进度条结束

const mockRequests = axios.create({
    baseURL:'/mock',
    timeout:5000
})

// 设置请求拦截器
mockRequests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;

},error=>{

})
// 设置响应拦截器
mockRequests.interceptors.response.use(response=>{
    // 进度条的设计
    // 当数据返回的时候可以执行进度条操作
    nprogress.done();
    return response.data;

},error=>{

})
export default mockRequests