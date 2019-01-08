<template>
    <div class="food">
        <div class="imgBox">
            <ul>
                <li v-for="(item,index) in imgList" :key="index">
                    <img :src="item.itemLogoUrl" alt="">
                    <p class="title">{{item.itemTitle}}</p>
                    <p class="actPrice">￥{{item.salePrice}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Food',
    data(){
        return {
            imgList: []
        }
    },
    created(){
// https://m.bd-ego.com/bd-marketing/api/activity/getProductList?startNum=0&activityId=1809050926590073&_t=1546935022328         
        var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/HomeImgList?startNum=0&activityId=1809050926590073&_t=${time}`).then((res)=>{
            this.imgList = res.data.data.list
            console.log(res.data.data.list);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>
<style lang="scss" scoped>
    .food{
        height: rem(356px);
        .imgBox{
            width: rem(750px);
            height: rem(356px);
            overflow-x:scroll;
            ul{
                height: rem(356px);
                overflow-x:scroll; 
                margin: 0;
                width: rem(2100px);
                overflow-y: hidden;
                padding: 0;
                white-space: nowrap;
                text-align: center;
                li{
                    float: left;
                    width: rem(230px);
                    height: rem(337px);
                    margin-left: rem(25px);
                    img{
                        width: rem(190px);
                        height: rem(190px);
                    }
                    .title{
                        text-align: left; 
                        overflow: hidden;
                    }
                    p{
                        padding: rem(10px);
                        font-size: rem(12px);
                        color: #999;
                    }
                    .actPrice{
                        color: #ef2b2f;
                    }
                }
            }
        }
      
    }
</style>


