<template>
    <div class="goodsbanner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in data.imageList" :key="index">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div>
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
            <div>
                <span>{{data.useCouponText}}</span>
                <span>{{data.freightFreeText}}</span>
            </div>
        </div>
        <div class="specification">
            <div>
                已选<span>{{data.specification}}</span><span></span>
            </div> 
        </div>
    </div>    
</template>
<script>
export default {
    name: 'GoodsDetails',
    data(){
        return {
            // imglist: [],
            data: {},
            specification: {}

        }
    },
    created(){
        var currentId = this.$route.params.id;
        console.log(currentId);
        var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/Goodsdetails?itemCode=${currentId}&_t=${time}`)
        .then((res)=>{
            console.log(res.data.data.itemTitle);
            this.data = res.data.data;
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
</style>

