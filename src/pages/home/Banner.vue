<template>
    <div class="banner">
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in banner" :key="index">
            <img :src="item.bannerImg" />
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    data(){
        return {
            banner:{}
        }
    },
    created(){
        var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/HomeBanner?_t=${time}`).then((res)=>{
            // console.log(res.data.data.list[0].list);
            this.banner = res.data.data.list[0].list;
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
}
</script>
<style lang="scss" scoped>
    .banner{
        width: 100%;
        height: rem(376px);
    }
</style>


