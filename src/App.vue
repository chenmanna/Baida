<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" id="tabbar">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <div :class="tab.icon" id="icon"></div>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
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
      selected:'Home'
    }
  },
  methods:{
    goto(path){
      this.$router.push({path});
    }
  } 
 
}
</script>
<style>
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  #app{
    height: 100%;
  }
</style>
