// 1、引入mock插件
import Mock from 'mockjs';

//把JSON数据格式引入进来JSON数据格式根本没有对外暴露，但是可以引入
//webpack默认对外暴露的:图片、JSON数据格式
import banner from './Banner.json';
import floor from './Floor.json';

//3、mock数据:第一个参数请求地址;第二个参数:请求数据
Mock.mock('/mock/Banner',{code:200,data:banner});
Mock.mock('/mock/Floor',{code:200,data:floor});



