<template>
  <div class="header">
    <div class="remind">
      <span class="iconfont icon-naoling"></span>
    </div>
    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <input type="text">
      <span class="iconfont icon-shanchuguanbicha2"></span>
    </div>
    <div>
      <img src="https://img.allpyra.com/b39fb51b-1193-4142-8553-18eb0e63c818.png" alt="">
    </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return {
      data: {}
    }
  },
  // created(){
  //   var time = (new Date()).valueOf();
  //   this.$axios.get(`http://localhost:2999/proxy/Logo?showType=4&_t=${time}`).then((res)=>{
  //       this.data = res.data.data;
  //       console.log(this.data);
  //       console.log(res);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: rem(88px);
  font-size: 0;
  z-index: 999;
  background: #fff;
  div{
    float: left;
    img{
      width: rem(156px);
      height: rem(68px);
      margin-left: rem(10px);
      margin-top: rem(6px);
    }
  }
  .remind{
    padding: rem(24px);
  }
  .search {
    width: rem(496px);
    height: rem(64px);
    background: #e5e5e5;
    border-radius: 5%;
    line-height: rem(64px);
    margin-top: rem(10px);
    .icon-sousuo{
      // display: inline-block;
      width: rem(72px);
      padding-right: rem(30px);
      padding-left: rem(12px);
      border-right: 1px solid #a48b78;;
    }
    input{
      border: 0 none;
      margin-right: rem(18px);
      background: #e5e5e5;
    }
  }
}
</style>
