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
  },
}
</script>
<style lang="scss" scoped>
  .Homecon{
      width: 100%;
      height: 100%;
  }
</style>
 