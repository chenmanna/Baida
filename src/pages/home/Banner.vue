<template>
    <div class="data">
        <div class="banner">
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.bannerImg" />
            </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="content">
            <img :src="textImg" alt="" class="textImg">
            <ul>
                <li v-for="(item,index) in listimg" :key="index"><img :src="item.bannerImg" alt=""></li>
            </ul>
            <img :src="gifImg" alt="" class="gifImg">
            <div>
                <span class="float_L">{{saleTime.title}}</span>
                <span></span>
                <span class="float_R">{{saleTime.linkName}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    data(){
        return {
            banner: {},
            textImg: {},
            listimg: {},
            gifImg: {},
            saleTime: {},
            datalist: []
        }
    },
    created(){
        var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/HomeBanner?_t=${time}`).then((res)=>{
            var data =  res.data.data;
            this.datalist = data;
            this.banner = data.list[0].list;

            var t_img = data.list[1].list;
            for(var i=0;i<t_img.length;i++){
                this.textImg = t_img[i].bannerImg    
            }
            var img_t = data.list[2].list;
            var img_b = data.list[3].list;
            for(var i=0;i<img_b.length;i++){
                img_t.push(img_b[i]);
            }
            this.listimg = img_t;
            
            var g_img = data.list[6].list;
            for(var i=0;i<g_img.length;i++){
                this.gifImg = g_img[i].bannerImg;
            }

            this.saleTime = data.list[7];
            // console.log(this.saleTime);
            // console.log(this.gifImg);
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
}
</script>
<style lang="scss" scoped>
    .data{
         margin-top: rem(88px);
        // height: 100%;
        .banner{
            width: 100%;
            height: rem(376px);
            img{
                height: 100%;
                width: 100%;
            }
        }
        .content{
            width: 100%;
            height: 100%;
            .textImg{
                width: 100%;
                height: rem(86px);
            }
            ul{
                width: 100%;
                height: rem(330px);
                padding: 0;
                margin: 0;
                li{
                    width: rem(150px);
                    height: rem(148px);
                    float: left;
                    img{
                        width: 100%;
                    }
                }
            }
            .gifImg{
                height: rem(197px);
                width: 100%;
            }
            div{
                height: rem(40px);
                padding: rem(13px);
                border-bottom: 1px solid #ccc;
                font-size: rem(14px);
                .float_L{
                    float: left;
                    color: red;
                }
                .float_R{
                    float: right;
                    color: #ccc;
                }
            }
        }
    }
   
</style>


