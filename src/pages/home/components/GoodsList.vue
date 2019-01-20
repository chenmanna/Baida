<template>
    <div class="goodslist">
        <div class="text">热门商品</div>
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-distance="10"
        >
            <li v-for="(item,index) in goodslist" :key="index" @click="goGoodslist(item.itemCode)">
                <img :src="item.itemLogoUrl" alt="">
                <p>{{item.itemTitle}}</p>
                <span class="floatleft">￥{{item.salePrice}}</span>
                <span class="floatright">{{item.country}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'GoodsList',
    data(){
        return {
            goodslist: [],
            qty: 0,
            

        }
    },
    methods:{
        // }  https://m.bd-ego.com/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=0&_t=1546948126220
         loadMore() {
            console.log("触发滚动");
            if(this.qty==150){
                return false;
            }
            var time = (new Date()).valueOf();
            console.log(this.qty);
            this.$axios.get(`http://localhost:2999/proxy/HomeImgList?activityId=1701031131360001&startNum=${this.qty}`)
            .then((res)=>{
                this.qty += 10;
                this.goodslist = this.goodslist.concat(res.data.data.list);
                console.log(this.goodslist);
                console.log(this.qty);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        goGoodslist(id){
            this.$router.push({path:'/goodsDetails/'+id})
        }
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
    .goodslist{
        width: 100%;
        // overflow-y:auto;
        // max-height: 100vh;
        margin-bottom : rem(84px);
        font-size: rem(14px);
        div{
            padding: rem(23px);
            border: 1px solid #f4f4f4;
        }
        .text{
            text-align: left;
        }
        ul{
            width: rem(750px);
            overflow-y:auto;
            max-height: 100vh;
            li{
                width: rem(370.5px);
                height: rem(550px);
                float: left;
                border: 1px solid #f4f4f4;
                img{
                    margin: rem(40px);
                    width: rem(272px);
                    height: rem(272px);
                    margin-bottom: rem(20px);
                }
                p{
                    margin: rem(35px);
                    width: rem(300px);
                    overflow: hidden;
                    font-size: rem(12px);
                    color: #666;
                    margin-bottom: rem(20px);
                }
                span{
                    margin-bottom: rem(40px);

                }
                .floatleft{
                    padding-left: rem(40px);
                    float: left;
                    color: #e72714;
                }
                .floatright{
                    padding-right: rem(40px);
                    float: right;
                    color: #666;
                }
            }
        }
    }
</style>


