<template>
  <div class="home">
    
    <Header />
    <!-- <Banner /> 
    <ConBanner />
    <PosterImg />
    <GoodsList />  
    <ToTop /> -->
    <HomeContent v-show="this.$store.state.isShowSearch"/> 
    <ToTop />
  </div> 
</template>

<script>
import Header from './header/Header.vue';
import HomeContent from './HomeContent.vue';
// import Banner from './Banner.vue';
// import ConBanner from './ConBanner.vue';
// import PosterImg from './poster/PosterImg.vue';
// import GoodsList from './components/GoodsList.vue';
import ToTop from './components/ToTop.vue';

// 中间桥梁，
import Vue from 'Vue';
let bus = new Vue();


export default {
  name: 'Home',
  components: { 
    Header,
    HomeContent,
    // Banner,
    // ConBanner,
    // PosterImg,
    // GoodsList,
    ToTop
  },
  data(){
    return {
      // showSearchPage: false, 
      showCon: true,
      scrollTop: 0,
      height: 0,
      scroll: 0 
      //==================================================
    }
  },
  //  handleScroll () {
  //      this.scroll  = document.documentElement &&  document.documentElement.scrollTop

  //      console.log(this.scroll)
  //    },
     created(){
      //  window.addEventListener('scroll', this.handleScroll);
      console.log('home创建')
     },

  // methods:{
  //   isShowPage() {
  //     // this.hidden =! this.hidden;
  //     // this.showSearchPage = true;
  //     this.showCon = false;
  //     console.log(this.hidden);
  //   },
  // },
  // mounted(){
  //   bus.$on('search',item=>{
  //       this.isShowPage();
  //   });
  // }
  // data(){
  //   return {
  //     isShow: false
  //   }
  // },
  // methods: {
  //   showHight(){
  //     if(window.scrollY>=260){
  //       this.isShow = true;
  //     }else{
  //       this.isShow = false
  //     }
  //   },
  //   toTop(){
  //     window.scrollTo(0,0);
  //   }
  // },
//   methods:{
//     handelscroll() {
//  　　　this.scrollTop = document.body.scrollTop|| document.documentElement.scrollTop || window.pageYOffset
// 　　},
//   },
// ============================deactivated(存储不到不了scrollTop)
//   deactivated(){
// 　　sessionStorage.setItem('scrollTop',document.documentElement.scrollTop)     
//     console.log(document.documentElement.scrollTop,sessionStorage.getItem('scrollTop'),'home存储')//0??
// 　},
//   beforeRouteEnter(to, from, next) {
//     console.log('组件进入前')
//     if (from.name == "GoodsDetails") {  
//       next(vm=>{
//         window.scrollTo(0,sessionStorage.getItem('scrollTop'))
//          console.log(sessionStorage.getItem('scrollTop'))
//       })
//     } else {
//       window.scrollTo(0,0);
//     }
//    next();

//   },
}
</script>
<style lang="scss" scoped>
  .home{
      width: 100%;
      height: 100%;
  }
</style>
 