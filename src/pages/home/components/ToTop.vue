<template>
     <div class="toTop" v-show="isShow">
      <div @click="toTop">toTop</div>
    </div>
</template>
<script>
export default {
    name: 'ToTop',
    data(){
    return {
      isShow: false
    }
    },
    methods: {
        showHight(){
        if(window.scrollY>=260){
            this.isShow = true;
        }else{
            this.isShow = false
        }
        },
        toTop(){
        window.scrollTo(0,0);
        }
    },
    created(){
        window.addEventListener('scroll',this.showHight);
    }
    }
</script>
<style lang="scss" scoped>
    .toTop{
        width: rem(88px);
        height: rem(88px);
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: rem(88px);
        position: fixed;
        right: rem(15px);
        bottom: rem(130px);
        background: #fff;
        font-size: rem(14px);
    }
</style>

