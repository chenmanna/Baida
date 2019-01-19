<template>
<div class="box">
    <div class="drawer">
        <!-- 数据内容 -->
        <div class="goodsbox">
            <div>
                <div class="goodsbanner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(item,index) in data.imageList" :key="index">
                            <img :src="item" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                <div />
            </div>
                 <p class="title">{{data.itemTitle}}</p>
                <div>
                    <span class="offprice">￥{{data.salePrice}}</span>
                    <span class="price">{{data.marketPrice}}</span><span></span>
                </div>
                <p class="text">
                    <span>{{data.country}}</span>
                    <span>{{data.warehouseName}}</span>
                    <span>{{data.deliveryTime}}</span>
                </p>
                <p>时间</p>
                <div class="commitment">
                    <span>精品正品</span>
                    <span>海外采购</span>
                    <span>快速清关</span>
                    <span>超时赔付</span>
                </div>
                <div class="stateText">
                    <span>{{data.useCouponText}}</span>
                    <span>{{data.freightFreeText}}</span>
                </div>
                <div class="specification">
                    <div>
                        <p>小编寄语</p>
                        <span>{{data.recommend}}</span><p class="color">{{data.taxdesc}}</p>
                    </div> 
                </div> 
                <div class="goodsTab">
                    <!-- ======================================= -->
                    <div @click="detailsImg()">图片详情</div>
                    <div @click="detailsText()">商品参数</div>
                    <!-- <div v-for="(item,index) in tab" :key="index" @click="details(index)">{{item.text}}</div>
                     -->
                    <div class="imgs" v-show="Img">
                        <img v-for="(item,index) in bannerData" :src="item.imageUrl" alt="" :key="index">
                    </div>
                    <div class="goodsText" v-show="text">
                        <p>商品参数</p>
                        <p>颜色<span></span></p>
                    </div>
                    <!-- ============================================= -->
                    <!-- <mt-navbar v-model="selected">
                        <mt-tab-item id="1">图片详情</mt-tab-item>
                        <mt-tab-item id="2">商品参数</mt-tab-item>
                    </mt-navbar>
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1">
                            <div class="imgs">
                                <img v-for="(item,index) in bannerData" :src="item.imageUrl" alt="" :key="index">
                            </div>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">
                             <div class="goodsText">
                                <p>商品参数</p>
                                <p>颜色<span></span></p>
                            </div> 
                        </mt-tab-container-item>
                    </mt-tab-container> -->
                    <!-- ================================================= -->
                </div>
        </div>
        <!-- 遮罩层 -->
        <div :class="open?'mask':''" @click="close"></div>
        <!-- 商品信息 -->
        <div :class="open?'open':'close'">
            <div class="header">
                <div>
                    <div>
                        <!-- <img :src="img" alt="" id="smallImg" />11
                         -->
                        <p>
                            价格<span>{{data.salePrice}}</span></p>
                        <p>{{data.itemTitle}}</p>
                    </div>
                </div>
                <div class="buyQty">
                    <div>购买数量</div>
                    <div class="num"> 
                        <span @click="reduce">-</span>
                        <span ref="qty">{{buynum}}</span>
                        <span @click="add">+</span>
                    </div>
                </div>
                <div class="confirm" @click="addCar">确定</div>
                <div class="quxiao" @click="close">&times;</div>
            </div>
        </div>
        <div class="footer">
            <div>
                <div class="car iconfont icon-cart">
                </div>
                <div class="add" @click="showCar">加入购物车</div>
                <div class="buy" @click="showBuy">立即购买</div>
                <div class="like iconfont icon-like">
                </div>
            </div>
        </div>
    </div>
    </div>   
</div>
 
</template>
<script>
  export default {
      name: "GoodsDetails",
    data() {
      return {
        selected: 1,
        open: false,
        data: {},
        specification: {},
        bannerData: {},
        Img: true,
        text: false,
        img: '',
        buynum: 1
      }
    },
    methods:{
        close() {
            this.open = false
        },
        showCar(){
            this.open = true;
            // var user = sessionStorage.getItem('user');
            // if (user) {
            //     //自定义代码
            //     console.log("用户已登录");
            // }else{
            //     console.log("用户未登录");
            // }
        },
        showBuy(){
            this.open = true;
            // 登录的用户名test=====
            // sessionStorage.setItem('user', '用户名');
            // var user = sessionStorage.getItem('user');//获取到的用户信息
            // var user = 'testuser';
            // if (user) {
            //     //自定义代码
            //     console.log("用户已登录");
            //      this.$axios.get('http://localhost:2999/changeGoods/addGoods',{params: {
            //         //  定义假数据
            //         id: 111,
            //         userName: user,
            //         price: 666,
            //         imgUrl: '..img..',
            //         title: "测试数据"
            //      }})
            //      .then((res)=>{
            //          console.log(res);
            //      })
            // }else{
            //     // 显示未登录信息
            //     console.log("用户未登录");
            // }
        }, 
        addCar(){
            // var user = 'testuser';
            // var user = false;
            // var user = 'aaa';
            // console.log(this.$refs.qty.innerHTML)
            var buyNum = this.$refs.qty.innerHTML;
            var img = this.data.imageList[0];
            var username = sessionStorage.getItem('user');
            if (username) { 
                //自定义代码
                console.log("用户已登录");
                // ?_id=1&userName=hhh&price=666&imgUrl=img&title=lll'
                this.$axios.get('http://localhost:2999/changeGoods/addGoods'
                ,{params: {
                    //  定义假数据
                    _id: this.data.itemCode,
                    userName: username,
                    price: this.data.salePrice,
                    imgUrl: img,
                    title: this.data.itemTitle,
                    qty: buyNum
                 }}
                 )
                 .then((res)=>{
                     console.log(res);
                     console.log(this.data,this);
                 })
                 .catch((err)=>{
                     console.log(err);
                 })
            }else{
                // 显示未登录信息
                console.log("用户未登录");
                 this.open = false;
            }
        },
        getDetails(){
            var currentId = this.$route.params.id;
            var time = (new Date()).valueOf();
            this.$axios.get(`http://localhost:2999/proxy/Goodsdetails?itemCode=${currentId}&_t=${time}`)
            .then((res)=>{
                console.log(res.data.data.itemTitle);
                this.data = res.data.data;
                var imgs = res.data.data.imageList;
                for(var i=0;i<imgs.length;i++){
                    if(i==0){
                        this.img = imgs[i];
                    }
                }
                // this.specification =  res.data.data;
                var text =  res.data.data.attrList;
                for(var i=0;i<text.length;i++){
                    this.specification = text[i].proAttrValue;
                }
                console.log(this.data); 
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        getBanerimg(){
            var currentId = this.$route.params.id;
             var time = (new Date()).valueOf();
            //魅力惠链接 http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1547293474396&summary=a2f19d7e2810181d7ad85a5428a3f91d&platform_code=H5
            //  this.$axios.get(`http://localhost:2999/proxy/GoodsdetailsBanner?startNum=0&pageSize=10&itemCode=${currentId}&_t=${time}`)
            // .then((res)=>{
             this.$axios.get(`http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1547293474396&summary=a2f19d7e2810181d7ad85a5428a3f91d&platform_code=H5`)
            .then((res)=>{
               console.log(res);
               var mlhData = res.data.lists;
               var mlhImg = []
               for(var i=0;i<mlhData.length;i++){
                   mlhImg = mlhData[1].events
               }
               this.bannerData = mlhImg;
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        // 测试==
        getImg(){
              var currentId = this.$route.params.id;
             var time = (new Date()).valueOf();
             this.$axios.get(`http://localhost:2999/proxy/Goodsdetailsimg?_t=${time}`)
            .then((res)=>{
               console.log(111111111111111111111111,res);
            //    this.bannerData = res.data.data;
            //    console.log(this.bannerData)
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        detailsImg(){
            this.Img = true;
            this.text = false;
            console.log(this.Img,this.text);
        },
        detailsText(){
            this.Img = false;
            this.text = true;
            console.log(this.Img,this.text);
        },
        reduce(){
           
            if(this.buynum<=1){
                return false;
            }
             this.buynum--
        },
        add(){
            this.buynum++

        }
    },
    created(){
      this.getDetails();
      this.getBanerimg();
    //   this.getImg();
    }
  }
</script>
<style lang="scss" scoped>
.box{
 .drawer {
        margin-bottom: rem(120px);

      height: 100%;
    .mask {
      position: fixed;
      z-index: 10;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .4);
    }
    .close {
      position: absolute;
      z-index: 10;
      left: rem(-750px);
      top: 0;
      width: rem(750px);
      height: 100%;
      background: #fff;
      transition: bottom linear 1s;
    }
    .open {
      position: absolute;
      z-index: 10;
      bottom: 0;
      left: 0;
      width: rem(750px);
      background: #fff;
      transition: bottom linear 1s;
      .header {
        height: rem(400px);
        border-bottom: 1px solid #dddddd;
        position: fixed;
        bottom: 0;
        background: #fff;
        width: rem(750px);
        font-size: rem(16px);
        div{
            height: rem(150px);
            width: rem(750px);
            padding-left: rem(20px);
            padding-right: rem(20px);
            div{
                p{
                    padding: 0;
                }
            }
            
        }
        .confirm{
            height: rem(100px);
            line-height: rem(100px);
            text-align: center;
            background: #e72714;
            color: #fff;
        }
        .buyQty{
            // float: left;
            width: 100%;
            line-height: rem(150px);
            div{
                width: rem(200px);
                float: left;
            }
            .num{
                float: right;
                line-height: rem(150px);
                span{
                    display: inline-block;
                    width: rem(50px);
                    height: rem(50px);
                    border: 1px solid #ccc;
                    line-height: rem(50px);
                    text-align: center;
                }
            }
        }
        p {
          margin-top: rem(18px);
        }
        .quxiao{
            width: rem(20px);
            height: rem(20px);
            position: absolute;
            right: 0;
            top: 0;
        }
      }
    }
    .goodsbox{
        height: 100%;
        color: #666;
        .goodsbanner{
            width: rem(750px);
            height: rem(750px);
            font-size: rem(16px);
            img{
                width: rem(750px);
            }
        }
        .offprice{
            font-size: rem(36px);
            color: #e72714;
        }
        .price{
            color: #666;
            padding: rem(20px);
            font-size: rem(16px);
        }
        p{
            padding: rem(40px);
            font-size: rem(16px);
        }
        .text{
            color: #666;
            padding: rem(20px);
            font-size: rem(16px);
            span{
                padding-right: rem(10px);
            }
        }
        .commitment{
            margin-left: rem(20px);
            margin-right: rem(20px); 
            padding: rem(20px);
            height: rem(60px);
            background: #dbdbdb;
            font-size: rem(12px);
            span{
                line-height: rem(60px);
                padding-left: rem(15px);
                border-left: 2px solid #fff;
                padding-right: rem(35px);
                color: #fff;
            }
        } 
        .title{
            padding: rem(20px);
            color: #000;
            font-weight: bold;
            font-size: rem(20px);
        }
        .stateText{
            font-size: rem(16px);
            padding: rem(20px);
        }   
    }
    .specification{
        font-size: rem(16px);
        // padding: 0;
        margin-left: rem(20px);
        margin-right: rem(20px);
        padding-top: rem(20px);
        height: rem(90px);
        background: #dbdbdb;
        height: 100%;
        div{
            padding: 0;
            // height: rem(77px);
            background: #fff;
            margin-bottom: rem(20px);
            line-height: rem(70px);
            p{
                // height: rem(30px);
                // line-height: rem(30px);
                padding: 0;
                padding-top: rem(10px);
            }
            .color{
                color: #af1c40;
            }
        }
 
    }
    .goodsTab{
        margin-bottom: rem(120px);
        height: rem(98px);
        border-bottom: 1px solid #ccc;
        width: 100%;
        div{
            font-size: rem(36px);
            width: 50%;
            height: rem(98px);
            line-height: rem(98px);
            text-align: center;
            float: left;
            
        }
        .imgs{
            margin-bottom: rem(120px);
            width: rem(750px);
            height: 100%;
            img{
                width: rem(750px);
            }
        }
        .goodsText{
            text-align: left;
            margin-bottom: rem(120px);
            height: rem(184px);
            width: rem(750px);
            padding-left: rem(20px);
            p{
                // height: rem(50px);
                // line-height: rem(50px);
                padding: 0;
                padding-top: rem(6px);
                // padding-left: rem(200px)
                // padding: rem(10px);
            }
        }
        .mt-tab-container{
            height: 100%;
        }
    }
    .footer{
        background: #fff;
        height: 100%;
        width: rem(750px);
        height: rem(120px);
        position: fixed;
        bottom: 0;
        div{
            div{
                padding: rem(20px);
                float: left;
                width: rem(70px);
                line-height: rem(96px);
                text-align: center;
                // height: rem(100px);
            }
           .buy{
                width: rem(220px);
                padding: 0;
                line-height: rem(80px);
                text-align: center;
            }
            .buy{
                padding: 0;
                margin: rem(20px);
                width: rem(220px);
                line-height: rem(80px);
                text-align: center;
                background: #e72714;
                color: #fff;
                font-size: rem(28px);
            }
            .add{
                font-size: rem(28px);
                color: #fff;
                padding: 0;
                margin: rem(20px);
                width: rem(220px);
                line-height: rem(80px);
                text-align: center;
                background: #ff911d;
            }
           .icon-cart,.icon-like{
               font-size: rem(30px);
           }
        }
    }
    .margin{
        width: rem(750px);
        height: rem(120px);
    }
  }
}
// .box .drawer .goodsbox[data-v-19ccd34a]{
//     width: rem(170px);
//     height: rem(170px);
//     border: 1px solid #ccc;
// }
</style>
