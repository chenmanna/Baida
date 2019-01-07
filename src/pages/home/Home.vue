<template>
  <div class="home">
    <Header />
    <Banner />
    <ConBanner />
    <PosterImg />
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Banner from './Banner.vue';
import ConBanner from './ConBanner.vue';
import PosterImg from './PosterImg.vue'

export default {
  name: 'Home',
  components: { 
    Header,
    Banner,
    ConBanner,
    PosterImg
  },
}
</script>
<style lang="scss" scoped>
  .home{
      width: 100%;
      height: 100%;
  }
</style>
 