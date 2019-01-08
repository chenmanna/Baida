<template>
    <div class="poster">
        <div class="content">
            <div class="everyShop">
                <img v-for="(item,index) in everyShop" :key="index" :src="item.bannerImg" alt="">
                <div class="imgs">
                    <img v-for="item in imgs" :key="item.bannerImg" :src="item.bannerImg" alt="">
                </div>
            </div>  
            <div class="category">
                <img v-for="(item,index) in category" :src="item.bannerImg" :key="index" alt="">
                <div class="posterImg">
                    <img :src="posterImg.beauty" alt="">
                    <Beauty />
                    <img :src="posterImg.infant" alt="">
                    <Infant />
                    <img :src="posterImg.food" alt="">
                    <Food />
                    <img :src="posterImg.dress" alt="">
                    <Dress />
                    <img :src="posterImg.appliance" alt="">
                    <Appliance />
                    <img :src="posterImg.medicine" alt="">
                    <Medicine />
                    <img :src="posterImg.phone" alt="">
                    <Phone />

                </div>
                <!-- <Beauty /> -->
            </div>  
        </div>    
    </div>    
</template>
<script>
import Beauty from './banner/Beauty.vue';
import Infant from './banner/Infant.vue';
import Food from './banner/Food.vue';
import Dress from './banner/Dress.vue';
import Appliance from './banner/Appliance.vue';
import Medicine from './banner/Medicine.vue';
import Phone from './banner/Phone.vue';

export default {
    name: 'PosterImg',
    components:{
        Beauty,
        Infant,
        Food,
        Dress,
        Appliance,
        Medicine,
        Phone
    },
    data(){
        return {
            everyShop: {},
            imgs: [],
            category: {},
            posterImg: {
                'beauty': 'https://img.allpyra.com/f18830e9-fdab-455b-b035-4a49f927e4f0.png',
                'infant': 'https://img.allpyra.com/826f628e-492a-4145-a1ab-797815b94f79.png',
                'food': 'https://img.allpyra.com/a2396545-e27b-4cad-9bbe-fd20431b4d14.png',
                'dress': 'https://img.allpyra.com/43265e82-9f70-4641-b5ec-b4b6693b1842.png',
                'appliance': 'https://img.allpyra.com/c40f6f4e-757e-4994-9bf3-b2c7694af5b0.png',
                'medicine': 'https://img.allpyra.com/f858eeff-ad46-4935-91a8-0001a7dcbf6a.png',
                'phone': 'https://img.allpyra.com/12d0715d-3441-4411-8f57-6e6cee4818a8.png'
            }
        }
    },
      created(){
        var time = (new Date()).valueOf();
        this.$axios.get(`http://localhost:2999/proxy/HomeBanner?_t=${time}`).then((res)=>{
            console.log(res.data.data)
            var data = res.data.data.list;
            this.everyShop = data[8].list;
            var imgs = data[9].list;
            var img = data[10].list;
            for(var i=0;i<img.length;i++){
                imgs.push(img[i]);
            }
            this.imgs = imgs;
            this.category = data[11].list;

        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>
<style lang="scss" scoped>
    .poster{
        width: 100%;
        .content{
            width: rem(750px);
            .everyShop{
                height: rem(436px);
                img{
                    width: rem(750px);
                    
                }
                .imgs{
                    width: 100%;
                    height: rem(168px);
                    img{
                        width: rem(375px);
                        height: rem(168px);
                        float: left;
                    }
                }   
            }   
            .category{
                width: 100%;
                // height: rem(60px);
                height: 100%;
                img{
                    width: 100%;
                }
                .posterImg{
                    
                    img{
                        width: 100%;
                        height: rem(280px);
                    }
                }
            }    
        }
    }
</style>


