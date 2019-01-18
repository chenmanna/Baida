<template>
  <div class="cart">
    <!-- <div class="content">
      <div>
        <div class="iconfont icon-shopping"></div>
        <p>您的购物车空空如也</p>
        <span>去逛逛</span>
      </div>
    </div> -->
    <!-- <Goodslist />
    <ToTop /> -->
    <div class="userCar">
      <div class="header">
        <div class="iconfont icon-icon_left"></div>
        <div>购物车</div>
      </div>
      <ul>
        <li class="cartGoods">
         <!-- <div> -->
            <div>
              <!-- <radio></radio> -->
            </div>
            <div>
              <img src="" alt="">
            </div>
            <div class="title">
              <p>title</p>
              <span>价格</span><span>将比</span>
            </div>
            <div class="goodsQty">
              <div>+</div>
              <div>1</div>
              <div>-</div>
            </div>
         <!-- </div> -->
         <!-- <div></div> -->
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
// import Goodslist from '../home/components/GoodsList.vue';
// import ToTop from '../home/components/ToTop.vue';

export default {
  name: 'Cart',
  components: {
    // Goodslist,
    // ToTop
  },
  data(){
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .cart{
    width: rem(750px);
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
    .userCar{
      // width: 100%;
      // height: rem(88px);
      text-align: center;
      line-height: rem(88px);
      font-size: rem(30px);
      .header{
        // height: rem(44px);
        height: rem(88px);
        border-bottom: 1px solid #ccc;
        div{
          float: left;
          margin-right: rem(88px);
          margin-left: rem(240px);
        }
        .iconfont{
          width: rem(88px);
          margin: 0;
          height: rem(88px);
        }
      }
      ul{
        width: rem(750px);
        height: 100%;
        .cartGoods{
          width: rem(750px);
          height: rem(180px);
          padding: rem(30px) rem(20px) rem(30px) rem(20px);
          div{
            padding-left: rem(20px);
            float: left;
            img{
              width: rem(120px);
              height: rem(120px);
            }
          }
          .title{
            width: rem(400px);
            background: #ccc;
          }
          .goodsQty{
            border: 1px solid #666;
            div{
              padding: rem(3px);
            }
          }
        }
      }
     
    }
  }
</style>
