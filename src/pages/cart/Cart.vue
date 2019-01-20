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
        <div class="iconfont icon-icon_left" @click="goHome"></div>
        <!-- <div></div> -->
        <div>购物车</div>
      </div>
      <div class="goodslist">
        <ul @click="getCheck">
          <li class="cartGoods" v-for="(item,index) in cartData" :key="index" :id="item.userCode">
          <!-- <div> -->
              <div>
                <!-- <radio></radio> -->
                <input type="checkbox" ref="check">
              </div>
              <div>
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="title">
                <p>{{item.title}}</p>
                <p>
                  <span class="price">￥{{item.price}}</span><span></span>
                </p>
              
              </div>
              <div class="goodsQty">
                <span @click="add">+</span>
                <span ref="number">{{item.qty}}</span>
                <span @click="reduce">-</span>
              </div>
          <!-- </div> -->
          <!-- <div></div> -->
          </li>
        </ul>
      </div>
      <div class="box"></div>
      <div class="totalText">
        <div class="floatL">
          <input type="checkbox">
          <span>全选</span>
          <span>总计：</span>
          <span>￥{{total}}</span>
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
      total:'',
      // qty: ''
    }
  },
  methods:{
    add(){
      this.$axios.get('/getResult')
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    // add(){
    //   this.$axios.get('http://localhost:2999/changeGoods/addOne',
    //     {params: {
    //       currentId: 1
    //     }}
    //   )
    //   // console.log(this.$refs.number.innerHTML,this.$refs.number)
    //   // console.log(this.$refs.check)
    // },
    // reduce(){
    //   this.$refs.number--;
    // }
    goHome(){
      this.$router.push('/home');
    },
    getCheck(e){
      console.log(e.target);
      if(e.target.checked){
        // console.log(111);
        // this.
        console.log(e.target.parentNode.parentNode.id)
        var currentId = e.target.parentNode.parentNode.id;
        for(var i=0;i<this.cartData.length;i++){
          if(this.cartData[i].userCode==currentId){
            this.total = this.cartData[i].qty*this.cartData[i].price;
          }
        }
      }
      console.log(this.total);
    }
  },
  computed:{
    getTotal(){
      // if(this.$refs.check.checked){
        // return 11;
      // }
      // var total;
      // for(var i=0;i<this.cartData.length;i++){
      //   return this.cartData[i].price*this.cartData[i].qty;
      // }
    }
  },
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
          // var qty = '';
          // for(var i=0;i<res.data.data.length;i++){
          //   var qty = res.data.data[i].qty;
          // }
          // this.qty = qty;
          console.log('有数据')
          this.noGoods = false;
          this.userGoods = true;
        }
      })
    }
   
  },
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
      overflow: auto;
      // width: 100%;
      // height: rem(88px);
      text-align: center;
      line-height: rem(88px);
      font-size: rem(30px);
      .header{
        position: fixed;
        width: rem(750px);
        background: #fff;
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
        position: fixed;
        bottom: rem(83px);
        background: #fff;
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
      .box{
        width: rem(750px);
        height: rem(200px);
      }
    }
  }
</style>
