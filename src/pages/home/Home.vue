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
      showCon: true
    }
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
  // created(){
  //   window.addEventListener('scroll',this.showHight);
  // }
}
</script>
<style lang="scss" scoped>
  .home{
      width: 100%;
      height: 100%;
  }
</style>
 