<template>
    <div class="goodslist">
        <div class="text">热门商品</div>
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li v-for="(item,index) in goodslist" :key="index">
                <img src="" alt="">
                <p>{{item.brandId}}</p>
                <span class="floatleft">price</span>
                <span class="floatright">dizi</span>
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
            loading: false,
            qty: 0

        }
    },
    methods:{
        // loadMore() {
        //     this.loading = true;
        //     setTimeout(() => {
        //         let last = this.list[this.list.length - 1];
        //         for (let i = 1; i <= 10; i++) {
        //         this.list.push(last + i);
        //         }
        //         this.loading = false;
        //     }, 2500);
        // }  https://m.bd-ego.com/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=0&_t=1546948126220
         loadMore() {
            this.loading = true;
            var time = (new Date()).valueOf();
            this.$axios.get(`http://localhost:2999/proxy/HomeImgList?activityId=1701031131360001&startNum=${this.qty}&_t=${time}`)
            .then((res)=>{
                // console.log(res);
                // var goodsdata = res.data.data.list;
                this.goodslist = this.goodslist.concat(res.data.data.list);
                // console.log(a);
                this.qty += 10;
                // console.log(goodsdata);
                this.loading = false;
            })
            .catch((err)=>{
                this.loading = false;
                console.log(err);
            })
            // setTimeout(() => {
            //     let last = this.list[this.list.length - 1];
            //     for (let i = 1; i <= 10; i++) {
            //     this.list.push(last + i);
            //     }
            //     this.loading = false;
            // }, 2500);
        }
    },
    created(){
        this.loadMore();
    }
}
</script>
<style lang="scss" scoped>
    .goodslist{
        width: 100%;
        // height: 100px;
        margin-bottom : rem(84px);
        // background: red;
        font-size: rem(14px);
        div{
            padding: rem(23px);
            border: 1px solid #ccc;
        }
        ul{
            width: rem(374px);
            height: rem(533px);
            li{
                padding: rem(40px);
                float: left;
                border: 1px solid #999;
                img{
                    width: rem(272px);
                    height: rem(272px);
                    margin-bottom: rem(20px);
                    p{
                        color: #666;
                        margin-bottom: rem(20px);
                        .floatleft{
                            float: left;
                            color: #e72714;
                        }
                        .floatright{
                            float: right;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
</style>


