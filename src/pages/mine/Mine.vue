<template>
  <div class="mine">
    <div class="mine-top">
          <div class="mine-set"><span class="iconfont icon-shezhi"> </span></div><div class="mine-info"><span @click="tuichu" class="iconfont icon-naoling"></span></div>
          <div class="mine-tx"><div></div><span class="mine-name">用户名:{{userinfo}}</span></div>
          <div class="mine-laba">
            <!-- <span class="iconfont icon-laba"> -->
              <!-- </span> -->
              小喇叭</div>

         
    </div>
     <div class="mine-order">
       我的订单
    </div>
    <div class="mine-myorder">
        <ul>
          <li><div class="mine-tb"><span class="iconfont icon-daichuli"></span></div><div class="mine-wz">待处理</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-weibiaoti20101"></span></div><div class="mine-wz">待收货</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-zhayan"></span></div><div class="mine-wz">已完成</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-tuihuoshouhou"></span></div><div class="mine-wz">退款/售后</div></li>


        </ul>
    </div>
    <div class="mine-menu"> 
          <ul>
          <li><div class="mine-tb"><span class="iconfont icon-vip"></span></div><div class="mine-wz">百大积分卡</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-qianbao"></span></div><div class="mine-wz">百大预付卡</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-daichuli"></span></div><div class="mine-wz">我的优惠券</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-hongbao"></span></div><div class="mine-wz">我的红包</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-wodedizhi"></span></div><div class="mine-wz">我的地址</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-wodeshoucang"></span></div><div class="mine-wz">我的收藏</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-iconfontbaby"></span></div><div class="mine-wz">售后服务</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-qizhi"></span></div><div class="mine-wz">我的团购</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-wode"></span></div><div class="mine-wz">邀请有奖</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-qian"></span></div><div class="mine-wz">分享赚钱</div></li>
          <li><div class="mine-tb"><span class="iconfont icon-shangdian"></span></div><div class="mine-wz">易购门店</div></li>


          </ul>
    </div>
    <div class="del" @click="delUserinfo">退出登录</div>
    <div class="mine-foryou">
        为你推荐
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data(){
    return {
      userinfo: '',

    }
  },
  components: {

  },
  methods: {
    delUserinfo(){
      // sessionStorage.setItem('')
      sessionStorage.clear();
      console.log( sessionStorage.getItem('user'));
      this.$router.push('/home')
    },
    tuichu(){
      // let dianjituichu =
      
    }
  },
  created(){
    window.scrollTo(0,0);
    this.userinfo = sessionStorage.getItem('user')
  }
}

</script>
<style lang="scss" scoped>
  .mine{
    .iconfont{
      font-size: rem(60px);
    }
    height: rem(1800px);
    background: #f4f4f4;
    .mine-top{
      position: relative;
      height: rem(450px);
      width: 100%;
      background-image:url(../../img/bg_mine.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      // background:url(../../img/bg_mine.png);
      font-size:rem(28px);
        .mine-set{
          color:#fff;
          float: left;
        }
        .mine-info{
          color:#fff;
          float:right;
        }
        .mine-tx{
          text-align: center;
          position: absolute;
          top:45%;
          
          
          // background: #d8d8d8;
          width: 100%;
          height: rem(140px);
          line-height: rem(140px);
          div{
            background-image:url(../../img/allpyra_headimg.png);
            background-repeat:no-repeat;

            background-size:100% 100%;
            height: rem(140px);
            width: rem(140px);
            border-radius: 50%;
            // background: pink;
            margin-left: rem(60px);
            float: left;
          }
          .mine-name{
            display: block;
            float: left;
            margin-left: rem(40px);

          }
          
        }
        .mine-laba{
           position: absolute;
            bottom:0px;
            background-color: rgba(0,0,0,0.1);
            color:#fff;
            // opacity:0.1;
            height: rem(40px);
            width: 100%;
            // overflow: hidden;
            // animation: marquee 6s linear infinite;
          }
    }
      .mine-order{
          font-size:rem(36px);
          background: #fff;
          color:#999;
          height: rem(80px);
          width: 100%;
          line-height: rem(80px);
          box-sizing: border-box;
          border-bottom: 1px solid #999;
    }
    .mine-myorder{
        width: 100%;
        height: rem(160px);
        background: #fff;
        font-size: rem(30px);
        ul{
          text-align: center;
        }
        ul li{
          background:#fff;
          float: left;
          display: block;
          height: rem(160px);
          
          width: 25%;
          
          .mine-tb{
            font-size: rem(60px);
            margin-top: rem(20px);
          }
          .mine-wz{
            font-size: rem(26px);
            margin-top: rem(10px);
          }
        }
    }
    .mine-menu{
        margin-top:rem(30px) ;
         width: 100%;
        height: rem(560px);
        background:#fff;
        font-size: rem(30px);
        ul{
          text-align: center;
        }
        ul li{
          // margin-top: 1%;
          background:#fff;
          float: left;
          display: block;
          height: rem(160px);
          // line-height: rem(160px) ;
          width: 25%;
          // margin-left: 1%;
           .mine-tb{
            font-size: rem(60px);
            margin-top: rem(20px);
          }
          .mine-wz{
            font-size: rem(26px);
            margin-top: rem(10px);
          }
        }
    }
    .mine-foryou{
      background: #fff;
      margin-top: rem(20px);
      width: 100%;
      height: rem(60px);
      font-size: rem(36px);
    }
    .del{
      font-size: rem(26px);
      color: #e72714;
      height: rem(80px);
      line-height: rem(80px);
      padding-left: rem(16px);
    }
  }

</style>
