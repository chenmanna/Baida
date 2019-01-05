<template>
  <div class="home">
    <div>首页</div>
    <Header />
  </div>
</template>

<script>
import Header from '../../components/header.vue';
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
  .box{
      width: 100%;
      height: rem(88px);
      background: #ccc;
  }
</style>
