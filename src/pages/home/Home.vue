<template>
  <div class="home">
    <Header />
    <Banner />
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Banner from './Banner.vue';

export default {
  name: 'Home',
  components: { 
    Header,
    Banner
  },
}
</script>
<style lang="scss" scoped>
  .home{
      width: 100%;
      height: 100%;
  }
</style>
 