<template>
    <div class="conBanner">
        <div class="imgBox">
            <ul>
                <li v-for="(item,index) in imgList" :key="index">
                    <img :src="item.pLogo" alt="">
                    <p class="title">{{item.pName}}</p>
                    <p class="actPrice">￥{{item.actPrice}}</p>
                    <p class="referPrice">￥{{item.referPrice}}</p>
                </li>
            </ul>
        </div>
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
            // console.log(res.data.data.list);
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
        height: rem(438px);
        .imgBox{
            width: rem(750px);
            height: rem(438px);
            overflow-x:scroll;
            ul{
                height: rem(438px);
                overflow-x:scroll; 
                margin: 0;
                width: rem(9850px);
                overflow-y: hidden;
                padding: 0;
                white-space: nowrap;
                text-align: center;
                li{
                    float: left;
                    width: rem(230px);
                    height: rem(357px);
                    margin: rem(25px);
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
                    }
                    .referPrice{
                        text-decoration: line-through;
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


