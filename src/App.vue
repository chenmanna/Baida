<template>
  <div id="app">
    <!--shell-->
    <router-view/>
    <mt-tabbar v-model="selected" id="tabbar" v-if="$store.state.navShow">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <div :class="tab.icon" id="icon"></div>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import goodstest from './muying.json'
import axios from 'axios'
import { Indicator } from 'mint-ui';
// 请求拦截显示Indicator
axios.interceptors.request.use(config => {
    Indicator.open({
      spinnerType: 'fading-circle'
    });
  return config
}, error => {
  Indicator.close();
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  // 响应成功关闭loading
  Indicator.close();
  return data
}, error => {
  Indicator.close();
  return Promise.reject(error)
})

export default {
  name: 'App',
  data(){
    return {
      tabs:[
          {
            text:'首页',
            icon:'iconfont icon-home',
            path:'/home',
            name:'Home'
          },{
            text:'分类',
            icon:'iconfont icon-fenlei',
            path:'/classify',
            name:'Classify'
          },{
            text:'购物车',
            icon:'iconfont icon-cart',
            path:'/cart',
            name:'Cart'
          },{
            text:'我的',
            icon:'iconfont icon-mine',
            path:'/mine',
            name:'Mine'
          }
      ],
      selected:'Home',
    }
  },
  methods:{
    goto(path){
      this.$router.push({path});
    },
  },
  // beforeCreate(){
  //   if(!this.$store.state.navShow){
  //     this.$store.state.navShow = !this.$store.state.navShow;
  //   }
  // },
  // created(){
  //   this.$store.state.navShow = true;
  // }
}
</script>
<style>
  html,body{
    height: 100%;
    width: 100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  #app{
    height: 100%;
  }
  #tabbar{
    position: fixed;
  }
</style>
