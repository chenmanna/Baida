<template>
    <div class="goodslist">
        <div>
            <div class="header"></div>
            <div class="iconfont icon-icon_left" @click="goHome"></div>
            <div class="iconfont icon-icon-more"></div>
            <GoodsBanner />
        </div>
    </div>    
</template>
<script>
import GoodsBanner from "./GoodsBanner.vue";
export default {
    name: 'GoodsDetails',
    components:{
        GoodsBanner
    },
    data(){
        return {}
    },
    methods: {
        goHome(){
            this.$router.push("/home")
        }
    },
    created(){
        console.log(this.$route);
        this.$store.state.navShow = false; 
    },
    // beforeRouteLeave(to,from,next){
    //      this.$store.commit('changeNavShow', true); 
    //      next();
    // },
    // beforeEach(to,from,next){
    //     this.$store.commit('changeNavShow', false);
    //     next();
    // }
    beforeDestroy(){
        this.$store.state.navShow = true;
        this.$store.dispatch('changeNavShow', true); 
    }
}
</script>
<style lang="scss" scoped>
    .goodslist{
        div{
            position: relative;
            .header{
                height: rem(88px);
                width: rem(750px);
            }
            .icon-icon_left{
                width: rem(60px);
                height: rem(60px);
                top: rem(10px);
                left: rem(10px);
                position: absolute;
                border-radius: 50%;
                line-height: rem(60px);
                border-radius: 50%;
                background: #000;
                color: #fff;
                text-align: center;
            }
            .icon-icon-more{
                width: rem(60px);
                height: rem(60px);
                right: rem(10px);
                top: rem(10px);
                position: absolute;
                border-radius: 50%;
                line-height: rem(60px);
                border-radius: 50%;
                background: #000;
                color: #fff;
                text-align: center;

            }
        }
    }
</style>


