<template>
  <div class="classify">
      <div>
      <mt-search 
        id="search1"
        cancel-text="x"
        placeholder="搜索">
      </mt-search>
    </div>
   
      <mt-navbar v-model="selected" class="fenlei">
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>
          </mt-navbar>
         <router-view/>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
         tabs: [
        {
          title: "分类",
          name: "Fenlei"
        },
        {
          title: "品牌",
          name: "Pinpai"
        }
       
      ],
      selected:'Fenlei'
        };
    },
    methods: {
      goto(name){
          this.$router.push({path:'/classify/'+name})
      }
    },
  name: 'Classify',
 
  //  watch:{
  //   //   selected(newValue,oldValue){
  //   //       console.log(newValue,oldValue)
  //   //   },
  //     $route(newValue,oldValue){
  //         console.log(newValue,oldValue)
  //     }
  // },
   method:{
     goto(){
        this.$router.push({path:'/calssify/'+name})
     }
  },
  mounted(){
      console.log(this.$route.params.type)
  }
};

</script>


<style lang="scss" scoped>
// .classify{
//   background: #fff;
// }
// .sousuoout{
//   text-align: center;
//   width: 100%;
// }
//搜索框


.classify{
    padding-top: 0px;
    div .mint-search{
    text-align: center;
    height: 100%;
    width:100%;
         #search1 .mint-searchbar{
            background-color: #fff;
  }
                  }
     .mint-searchbar .mint-tab-item{
        color:#999;
 }
    .mint-navbar .mint-tab-item.is-selected{
    color:red;
    border-bottom: 3px solid red;
  }

  .fenlei{
    border-bottom:1px solid #999;
  }
}








//  .classify div .mint-search{
   
    
//     text-align: center;
//     height: 60px;
//     width:100%;
//   }
 
 



  //分类/品牌
//   .mint-navbar .mint-tab-item.is-selected{
//     color:red;
//     border-bottom: 3px solid red;
//   }
//  .mint-searchbar .mint-tab-item{
//    color:#999;
//  }
// .mint-searchbar-inner{
//   background: #f9f9f9;
// }


 

  // .fenlei{
  //   border-bottom:1px solid #999;
  // }
</style>
