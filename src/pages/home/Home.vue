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
  },
  created(){
    this.$axios.get('/baida/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1546676639816',{})
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
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
