<template>
  <div class="Fenlei">
      <div class="fenlei_left">
          <ul>
              <li>
              <a class="active">母婴儿童</a>
              
              </li>
               <li>
              <a>美容彩妆</a>
              </li>
               <li>
              <a>环球美食</a>
              </li>
              <li>
              <a>营养保健</a>
              </li>
              <li>
              <a>家居个护</a>
              </li>
              <li>
              <a>3C数码</a>
              </li>
              <li>
              <a>礼品配饰</a>
              </li>
              <li>
              <a>鞋包服饰</a>
              </li>
              <li>
              <a>百大电器</a>
              </li>
              <li>
              <a>百大优选</a>
              </li>
          </ul>
      </div>
      <div class="fenlei_right">
          <ul>
            <li v-for="item in muying" :key="item.scid"><img :src="item.logourl" alt="">
            <div>{{item.categName}}</div></li>
            
          </ul>
      </div>
  </div>
</template>
<script>
import goodstest from '../../../muying.json';
export default { 
  name:'Fenlei',
  data() {
    return {
      muying:[],
      // recommend:[]
    };
  },
 
  created(){
    // https://m.bd-ego.com/bd-product/api/categ/itemCategList?_t=
    //
    this.muying =goodstest.data;
    console.log(this.muying);

    window.scrollTo(0,0);
    // var time = (new Date()).valueOf();
		// 	this.$axios.get(`http://localhost:2999/proxy/Liebiao?categId=1&_t=${time}`).then((res)=>{

		// 		let data = res.data;
		// 		// this.recommend = data.list;
		// 		console.log(data);
		// 	})
		// 	 .catch((err)=>{
    //   console.log(err);
    // })
  }
};
</script>
<style lang="scss">
  .active{
    border-bottom:2px solid #f00;
    color:#f00;
  }
  .Fenlei{
     background: #f4f4f4;
     overflow: auto;
     ul{
      
     }
    ul,li{
      font-size:rem(28px);
      padding: 0;
      margin: 0;
    }
      .fenlei_left{
        
        float: left;
         width: rem(140px);
         height: rem(1300px);
          background: #f4f4f4;
          ul li{
            display: block;
            width:rem(140px);
             height: rem(100px);
             text-align: center;
            float: left;
              a{
                box-sizing:border-box;
                display: block;
                height:rem(100px);
                line-height: rem(100px);
              }
          }
      }
      .fenlei_right{
        background:#fff;
        text-align: center;
        width: rem(610px);
        height: rem(1300px);
        float: left;
        ul{
          margin-top: rem(40px);
          margin-left: rem(30px);
        }
        ul li{
          height: rem(180px);
          width: rem(160px);
          margin-bottom: rem(36px);
          float: left;
          img{
            width:rem(100px) ;
            height: rem(100px);
            margin-bottom: rem(20px);
          }
          div{
            color:#999;
            height: rem(40px);
          }
        }
      }
  }

</style>