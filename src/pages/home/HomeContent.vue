<template>
  <div class="Homecon">
    <Banner />
    <ConBanner />
    <PosterImg />
    <GoodsList /> 
    <!-- <ToTop /> -->
  </div>
</template>

<script>
import Banner from './Banner.vue';
import ConBanner from './ConBanner.vue';
import PosterImg from './poster/PosterImg.vue';
import GoodsList from './components/GoodsList.vue';
// import ToTop from './components/ToTop.vue';


export default {
  name: 'Home',
  components: { 
    Banner,
    ConBanner,
    PosterImg,
    GoodsList,
    // ToTop
  },
//   data(){
//     return {
//       isShow: false
//     }
//   },
//   methods: {
//     showHight(){
//       if(window.scrollY>=260){
//         this.isShow = true;
//       }else{
//         this.isShow = false
//       }
//     },
//     toTop(){
//       window.scrollTo(0,0);
//     }
//   },
//   created(){
//     window.addEventListener('scroll',this.showHight);
//   }
}
</script>
<style lang="scss" scoped>
  .Homecon{
    // overflow-y:auto;
        // max-height: 100vh;
      width: 100%;
      height: 100%;
  }
</style>
 