<template>
  <div class="cart">
    <div class="content">
      <!-- <img src="" alt=""> -->
      <div>
        <div class="iconfont icon-shopping"></div>
        <p>您的购物车空空如也</p>
        <span>去逛逛</span>
      </div>
    </div>
    <Goodslist />
    <ToTop />
  </div>
</template>

<script>
import Goodslist from '../home/components/GoodsList.vue';
import ToTop from '../home/components/ToTop.vue';

export default {
  name: 'Cart',
  components: {
    Goodslist,
    ToTop
  },
  data(){
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .cart{
    width: 100%;
    height: 100%;
    text-align: center;
    .content{
      padding-top: rem(126px);
      padding-bottom: rem(156px);
      border-bottom: rem(20px) solid #f4f4f4;;
      // border-bottom: 20px solid #f4f4f4;
      div{
        height: rem(305px);
        width: 100%;
          p{
          padding: rem(30px);
          font-size: rem(32px);
          color: #999;
        }
        .icon-shopping{
          padding: 0 none;
          width: 100%;
          height: rem(87px);
        }
        span{
          display: inline-block;
          // width: rem(150px);
          padding: rem(15px);
          // height: rem(66px);
          // line-height: rem(66px);
          text-align: center;
          border: 1px solid #000;
          font-size: rem(32px);
          // padding: rem()
        }
      }
      
    }
  }
</style>
