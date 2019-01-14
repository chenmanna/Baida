<template>
  <div class="page">
     
			<div class="pinpai_list">
				 <div class="remen">热门品牌</div>
					<ul>
						<!-- <li><a href="#">
							<img src="https://img.allpyra.com/43f95591-2c07-4715-9eba-c0686f5f2750.png"></a>
							</li> -->
						<li v-for="item in recommend" :key="item.id"><a :href="item.h5Url">
							<img :src="item.brandLogo"></a>
							</li>

					</ul>
			</div>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
	name:'Pinpai',
  data() {
    return {
       recommend:[]
    };
	},
	created(){
			//	https://m.bd-ego.com/bd-product/api/brand/getAllShowBrand?pageSize=200&_t=1547263069075
			 var time = (new Date()).valueOf();
			this.$axios.get(`http://localhost:2999/proxy/Pinpai?pageSize=200&_t=${time}`).then((res)=>{

				let data = res.data.data;
				this.recommend = data.list;
				// console.log(this.recommend);
			})
			 .catch((err)=>{
      console.log(err);
    })
	}

};
</script>
<style lang="scss">
  .page{
		
			.pinpai_list{
				height: 100%;
				overflow: hidden;
				.remen{
				font-size: rem(28px);
				height: rem(60px);
				background: #d9d9d9;
				line-height: rem(60px);
				color:#999;
			}
				ul,li{
					padding: 0;
					margin: 0;
				}
				ul li{
					
					float: left;
					img{
						border-bottom:1px solid #f4f4f4;
						border-right:1px solid #f4f4f4;
						width: rem(270px);
						height: rem(270px);
				}
				
						
				}
			}
	}
  
</style>