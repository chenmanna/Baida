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
        <ul>
          <li class="cartGoods" v-for="(item,index) in cartData" :key="index" :id="item._id">
          <!-- <div> -->
              <div>
                <!-- <radio></radio> -->
                                                                  <!-- :checked="isChecked" -->
                <input name="test" type="checkbox" ref="check" @click="checkedState(item)" :checked="item.active">
              </div>
              <div>
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="title">
                <p>{{item.title}}</p>
                <p>
                  <span class="price">￥{{item.price}}</span><span class="delOne" @click="delGoods">&Chi;</span>
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
          <input type="checkbox"  @click="allChecked" v-model="checkAll">
          <span>全选</span>
          <span>总计：</span>
          <span>￥{{allPrice}}</span>
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
      isChecked: false
    }
  },
  methods:{
    // 商品数量+1===
    add(e){
      var currentId = e.target.parentNode.parentNode.id;
      this.$axios.get('http://localhost:2999/changeGoods/addOne',
        {params: {
          currentId: currentId
        }}
      )
      .then((res)=>{
          console.log(res);
          console.log(currentId)
          var data = res.data.data;
          var currentQty;
          for(var i=0;i<data.length;i++){
            currentQty = data[i].qty;
          }
          for(var i=0;i<this.cartData.length;i++){
            if(this.cartData[i]._id==currentId){
              this.cartData[i].qty = currentQty;
            }
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    },
    // 商品数量-1===
    reduce(e){
      var currentId = e.target.parentNode.parentNode.id;
      this.$axios.get('http://localhost:2999/changeGoods/reduceOne',
        {params: {
          currentId: currentId
        }}
      )
      .then((res)=>{
          console.log(res);
          console.log(currentId)
          var data = res.data.data;
          var currentQty;
          for(var i=0;i<data.length;i++){
            currentQty = data[i].qty;
          }
          console.log(this.cartData.length,111111111111111)
          for(var i=0;i<this.cartData.length;i++){
            if(this.cartData[i]._id==currentId){
              this.cartData[i].qty = currentQty;
            }
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    },
    // 删除当前商品===
    delGoods(e){
      console.log(e.target)
      var currentId = e.target.parentNode.parentNode.parentNode.id;
      console.log(currentId);
      this.$axios.get('http://localhost:2999/changeGoods/delGood',
        {params: {    
          currentId: currentId
        }}
      )
      .then((res)=>{
        console.log(res);
        this.cartData = res.data.data;
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    // 返回首页按钮===
    goHome(){
      this.$router.push('/home');
    },
    // 点击勾选按钮设置勾选按钮的状态===
    checkedState(item){
      // 设置选中状态
      if (item.active) {
          this.$set(item, 'active', false);
      } else {
          this.$set(item, 'active', true);
      }
      console.log(item);
    },
    // 全选状态===（不能实现页面按钮勾选，绑定不到model）
    allChecked(e){
      for(var i=0;i<this.cartData.length;i++){
        if(this.cartData[i].active){
           this.$set(this.cartData[i], 'active', false);
           this.isChecked = this.cartData[i].active;
        }else{
          this.$set(this.cartData[i], 'active', true);
          this.isChecked = this.cartData[i].active;
        }
      } 
      console.log(this.cartData)
    },
    // ====================================================================
  },
  // 计算当前勾选商品价格==========================================================================================
  computed:{
    checkAll(){
        // get(){
          return this.cartData.every(item=>item.active) 
        // },
    },
    allPrice() {
      var result = 0;
      for (var i in this.cartData) {
          if (this.cartData[i].active) {
              result += this.cartData[i].price * this.cartData[i].qty;
          }
      }
      return result;
    }
  },
  // 初始渲染请求===
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
          // console.log('没有数据')
          this.noGoods = true;
          this.userGoods = false;
        }else{
          this.cartData = res.data.data;
          // console.log('有数据')
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
          padding: rem(15px);
          text-align: center;
          border: 1px solid #000;
          font-size: rem(32px);
        }
      }     
    }
    .userCar{
      overflow: auto;
      text-align: center;
      line-height: rem(88px);
      font-size: rem(30px);
      .header{
        position: fixed;
        width: rem(750px);
        background: #fff;
        top: 0;
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
            p{
              padding: 0;
              font-size: rem(14px);
              height: rem(30px);
              line-height: rem(40px);
              height: 100%;
              text-align: left;
              .price{
                color: #e72714;
                float: left;
              }
              .delOne{
                float: right;
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
