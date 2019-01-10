// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// 引入axios  
import  axios from 'axios';
Vue.prototype.$axios=axios;

// mint-ui
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";
// 无限滚动,数据加载
import { InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);
// import { Indicator } from 'mint-ui';

// // 请求拦截显示Indicator
// axios.interceptors.request.use(config => {
//   Indicator.open();
//   console.log('config:',config);
//   // config.params.token = '10086';
//   return config
// }, error => {
//   Indicator.close();
//   return Promise.reject(error)
// })
// // http响应拦截器
// axios.interceptors.response.use(data => {
//   // 响应成功关闭loading
//   Indicator.close();
//   return data
// }, error => {
//   Indicator.close();
//   return Promise.reject(error)
// })


// 字体图标
import "./font/iconfont.css"
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }, 
  template: '<App/>'
})
