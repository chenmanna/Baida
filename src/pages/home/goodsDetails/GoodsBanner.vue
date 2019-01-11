<template>
  <div class="GoodsDetails">
    <div class="page-title">
        <div class="goodsbanner">
         <mt-swipe :auto="4000">
             <mt-swipe-item v-for="(item,index) in goodsdata.imageList" :key="index">
                 <img :src="item" alt="">
             </mt-swipe-item>
         </mt-swipe>
         <div>
             <p class="title">{{goodsdata.itemTitle}}</p>
             <div>
                 <span class="offprice">￥{{goodsdata.salePrice}}</span>
                 <span class="price">{{goodsdata.marketPrice}}</span><span></span>
             </div>
             <p class="text">
                 <span>{{goodsdata.country}}</span>
                 <span>{{goodsdata.warehouseName}}</span>
                 <span>{{goodsdata.deliveryTime}}</span>
             </p>
             <p>时间</p>
             <div class="commitment">
                 <span>精品正品</span>
                 <span>海外采购</span>
                 <span>快速清关</span>
                 <span>超时赔付</span>
             </div>
             <div>
                 <span>{{goodsdata.useCouponText}}</span>
                 <span>{{goodsdata.freightFreeText}}</span>
             </div>
         </div>
         <div class="specification">
             <div>
                 已选<span>{{goodsdata.specification}}</span><span></span>
             </div> 
         </div> 
        <div/> 
    </div>
    <div class="page-actionsheet-wrapper">
      <button class="mint-button mint-button--default mint-button--large" @click="actionSheet">
        <label class="mint-button-text">点击上拉 action sheet</label>
      </button>  
    </div>
    <!-- <mt-actionsheet
    :actions="data"
    v-model="sheetVisible"
    cancelText=""
    >
        <div id="div">111111</div>
    </mt-actionsheet> -->
    <!-- ======= -->
    <!-- <div v-show="sheetVisible" class="details">
        <div>
                  <input
    v-model="sheetVisible"
     />
        <div id="div">111111</div>
        </div>
    </div>
    <div v-show="sheetVisible" class="box"></div> -->
         <!-- <mt-actionsheet
    :actions="data"
    v-model="sheetVisible"
    cancelText=""
    >
      
    </mt-actionsheet> -->
    <mt-actionsheet class="mint-actionsheet" cancelText="" v-model="sheetVisible" actionsheet
    :actions="data"><div>111111111111</div></mt-actionsheet>
    <!-- <div class="v-modal"></div> -->
    </div>
  </div>
</template> 
<script>
export default {
  name: 'GoodsDetails',
  data () {
    return {
      // action sheet 选项内容
      data: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
//       }, {
//         name: '从相册中选择', 
//         method : this.getLibrary	// 调用methods中的函数
//       }],
        }],   
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false,
        goodsdata: {},
        specification: {}
    }
  },
  methods: {
    actionSheet: function(){
    	// 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function(){
      console.log("打开照相机")
    },
    getLibrary: function(){
      console.log("打开相册")
    }
  },
 created(){
         var currentId = this.$route.params.id;
         console.log(currentId);
         var time = (new Date()).valueOf();
         this.$axios.get(`http://localhost:2999/proxy/Goodsdetails?itemCode=${currentId}&_t=${time}`)
       .then((res)=>{
           console.log(res.data.data.itemTitle);
           this.goodsdata = res.data.data;
           // this.specification =  res.data.data;
             var text =  res.data.data.attrList;
             for(var i=0;i<text.length;i++){
                 this.specification = text[i].proAttrValue;
             }
             console.log(this.data); 
             // var imglist = res.data.data.imageList
         })
         .catch((err)=>{
             console.log(err);
         })
     }
}
</script>
<style lang="scss" scoped>
    .GoodsDetails{
         .page-title{
            .goodsbanner{
                width: rem(750px);
                height: rem(750px);
                font-size: rem(16px);
                img{
                    width: rem(750px);
                }
                div{
                    color: #666;
                    padding: rem(20px);
                    .offprice{
                        font-size: rem(36px);
                        color: #e72714;
                    }
                    .price{
                        color: #666;
                    }
                    p{
                        padding: rem(20px);
                    }
                    .text{
                        color: #666;
                        span{
                            padding-right: rem(10px);
                        }
                    }
                    .commitment{
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
                        color: #000;
                        font-weight: bold;
                        font-size: rem(20px);
                    }
                }
                .specification{
                    padding: 0;
                    padding-top: rem(20px);
                    height: rem(90px);
                    background: #dbdbdb;
                    div{
                        padding: 0;
                        // height: rem(77px);
                        background: #fff;
                        margin-bottom: rem(20px);
                        line-height: rem(70px);
                    }
                } 
            
            } 
            div{
                .mint-button--large{
                    position: fixed;
                    bottom: 0;
                }
            }
            .mint-actionsheet{
                z-index: 3000;
                height:rem(500px);
                .mint-actionsheet-button{
                    position: absolute;
                    width: 50px;
                    top: 0;
                    right: 0;
                    z-index: 3009;
                }
                .mint-actionsheet-list{
                    z-index: 3000;
                    // height:rem(500px);
                }
            }
        }
        .details{
            width: rem(750px);
            height: rem(1000px);
            background: #ccc;
            z-index: 9999;
        }
        .box{
            position: absolute;
            bottom: 0;
            height: rem(300px);
            width: rem(750px);
            background: red;
        }
    }
   

//    #div{
    //    z-index: 50000;
    //    color: red;
//    }
    
</style>

