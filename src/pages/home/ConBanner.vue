<template>
    <div class="conBanner">
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item,index) in imgList" :key="index">
                <!-- <div class="div">
                    <div>1</div>
                    <div>3</div>
                    <div>2</div> -->
                    <img :src="item.pLogo" alt="">
                    <!-- <div>{{item.pName}}</div>
                    <p>{{item.actPrice}}</p>
                    <p>{{item.referPrice}}</p> -->
                <!-- </div> -->
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    name: 'ConBanner',
    data(){
        return {
            imgList: []
        }
    },
    created(){
        // https://m.bd-ego.com/bd-marketing/api/channel/getNewHeadPageData?_t=1546839897557
         var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/ConBanner?activityId=1706230925400028&_t=${time}`).then((res)=>{
            console.log(res.data.data.list);
            this.imgList = res.data.data.list
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>
<style lang="scss" scoped>
    .conBanner{
        width: 100%;
        height: rem(397px);
        .div{
            width: 100%;
            div{
                float: left;
                width: rem(220px);
                height: rem(200px);
            }
        }
        .imgBox{
            width: rem(230px);
            height: rem(357px);
             img{
                width: rem(190px);
                height: rem(190px);
             }
        }
      
    }
</style>


