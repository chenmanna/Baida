<template>
  <div class="cart">
    <div v-show="noGoods">
      <div class="content">
        <div>
          <div class="iconfont icon-shopping"></div>
          <p>您的购物车空空如也</p>
          <span>去逛逛</span>
        </div>
      </div>
      <Goodslist />
      <ToTop />
    </div>
   
    <div class="userCar" v-show="userGoods">
      <div class="header">
        <div class="iconfont icon-icon_left"></div>
        <div>购物车</div>
      </div>
      <div class="goodslist">
        <ul>
          <li class="cartGoods" v-for="(item,index) in cartData" :key="index" >
          <!-- <div> -->
              <div>
                <!-- <radio></radio> -->
              </div>
              <div>
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="title">
                <p>{{item.title}}</p>
                <p>
                  <span class="price">￥{{item.price}}</span><span>将比</span>
                </p>
              
              </div>
              <div class="goodsQty">
                <span>+</span>
                <span>{{item.qty}}</span>
                <span>-</span>
              </div>
          <!-- </div> -->
          <!-- <div></div> -->
          </li>
        </ul>
      </div>
      <div class="totalText">
        <div class="floatL">
          <input type="radio">
          <span>全选</span>
          <span>总计：</span>
          <span>￥</span>
        </div>
        <div class="floatR">结算</div>
      </div>
    </div>
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
    return {
      noGoods : true,
      userGoods: false,
      cartData: [],
      total:''
    }
  },
  // computed:{
  //   getTotal(){
      
  //   }
  // },
  created(){
    var userName = sessionStorage.getItem('user');
    if(userName){
       // 获取购物车的数据如果为空则显示同未登录的购物车状态，有则显示购物车的数据
      this.$axios.get('http://localhost:2999/changeGoods/getUserCart',{params:{
        user: userName
      }})
      .then((res)=>{
        console.log(res)
        if(res.data.data.length==0){
          // 显示的数据
          console.log('没有数据')
          this.noGoods = true;
          this.userGoods = false;
        }else{
          this.cartData = res.data.data;
          console.log('有数据')
          this.noGoods = false;
          this.userGoods = true;
        }
      })
    }
   
  },
  beforeRouteLeave(to,from,next){
      // console.log(this.$store)
      this.$store.commit('changeNavShow', true); 
      next();
      
  },
  beforeRouteEnter(to,from,next){
      // this.$store.commit('changeNavShow', false);
      // next();
      next(vm => {
          vm.$store.commit('changeNavShow', false);
      })
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
        position: fixed;
        width: rem(750px);

        top: 0;
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
        margin-top: 44px;
        width: rem(750px);
        height: 100%;
        .cartGoods{
          // width: rem(750px);
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
            margin-right: rem(16px);
            // background: #ccc;
            p{
              padding: 0;
              font-size: rem(14px);
              height: rem(30px);
              line-height: rem(40px);
              // height: rem(40px);
              height: 100%;
              text-align: left;
              .price{
                color: #e72714;
              }
            }
          }
          .goodsQty{
            padding: 0;
            height: rem(120px);
            width: rem(80px);
            border: 1px solid #666;
            span{
              height: rem(40px);
              display: block;
              line-height: rem(40px);
              // padding: rem(3px);
            }
          }
        }
      }
      .totalText{
        text-align: left;
        padding-left: rem(20px);
        height: rem(88px);
        // background: #666;
        .floatR{
          float: right;
          width: rem(180px);
          text-align: center;
          background: #e72714;
          color: #fff;
        }
        .floatL{
          float: left;
          width: rem(530px);
        }
      }
    }
  }
</style>
