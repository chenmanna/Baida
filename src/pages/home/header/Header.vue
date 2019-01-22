<template>
  <div>
    <div class="header">
      <div class="remind">
        <span class="iconfont icon-naoling"></span>
      </div>
      <div class="search">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="texts" @click.stop="search()">
        <span class="iconfont icon-shanchuguanbicha2"></span>
      </div>
      <div>
        <img src="https://img.allpyra.com/b39fb51b-1193-4142-8553-18eb0e63c818.png" alt=""  v-show="this.$store.state.isShowSearch">
        <div v-show="showSearchPage">搜索</div>
      </div>
    </div>
    <div v-show="showSearchPage">
       <div class="search_c">
        <p>大家都在搜</p>
        <!-- <ul @click.stop="searchGoods"> -->
        <ul>
          <li>
            <span>兰蔻</span>
            <span>白色恋人</span>
            <span>道吉草</span>
            <span>双立人</span>
            <span>Swisse</span>
          </li>
          <li>
            <span>瑞士莲</span>
            <span>雅诗兰黛</span>
            <span>爱他美</span>
            <span>狼爪</span>
            <span>芙拉</span>
            <span>雪花秀</span>
          </li>
          <li> 
            <span>Let's diet</span>
            <span>美可卓</span>
            <span>DW</span>
            <span>swisse</span>
            <span>科颜氏</span>
            <span>迪奥</span>
          </li>
          <li>
            <span>施华洛世奇</span>
            <span>MK</span>
            <span>a2</span>
            <span>澳爱</span>
            <span>德爱</span>
            <span>coach</span>
          </li>
          <li>
            <span>德运</span>
            <span>资生堂</span>
            <span>Sony</span>
          </li>
        </ul>
      </div>
      <div class="search_con">
        <p>搜索历史 <span>&Chi;</span></p>
        <ul>
          <li>111</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      data: {
        texts: "爱他美",
      },
      showSearchPage: false,
      // hidden: false, 
      // showCon: true
    };
  },
  methods: {
    search() {
      this.showSearchPage = true
      // this.hidden =! this.hidden;
      // this.hidden = true;
      // console.log(this.hidden);
      this.$store.commit('changeSearchShow',false);
      // this.$emit('isShowPage');
    },
    
    handleBodyClick: function(){
      this.showSearchPage = false;
      this.$store.commit('changeSearchShow',true);
    },
    // searchGoods(e){
    //   // decodeURI encodeURI
    //   console.log(e,e.target)
    //   var currentSearch = e.target.innerHTML;
    //   console.log(currentSearch)
    //     var time = (new Date()).valueOf();
    //     // post请求
    //     var querystring = require('querystring');  
    //     // this.$axios.post(`http://localhost:2999/proxyPost/HomeSearch?startNum=0&sortType=SALESVOLUME&scope=ALL&qryText=${currentSearch}&_t=${time}`)
    //     // .then((res)=>{
    //         // console.log(res.data.data.list);
    //     this.$axios.post('http://localhost:2999/post',querystring.stringify({
    //       startNum: 0,
    //       sortType: 'SALESVOLUME', 
    //       scope: 'ALL',
    //       qryText: currentSearch,
    //       _t: time
    //       }))
    //       .then((res)=>{
   
    //        console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    //   // https://m.bd-ego.com/bd-product/api/delivery/searchList?pageSize=13&startNum=0&qryText=%E5%8F%8C%E7%AB%8B%E4%BA%BA&categId=&secondCategId=&_t=1547712758284
    // }
  },
  created(){
    // this.search()
  },
  mounted () {
    document.addEventListener('click', this.handleBodyClick)
  },
  destroyed () {
      document.removeEventListener('click', this.handleBodyClick)
  },
  // methods:{
  //   carousel(){
  //     var  list = [{name: "爱他美"},{name: "MK"},{name: "Coach"},{name:  "成人奶粉"},{name:"护手霜"},{name: "娇韵诗"},{name: "巧克力"},{name:  "Sony"},{name:  "UCC"},{name: "瑞士莲"}];
  //     // for(var i=0;i<list.length;i++){
  //         setInterval(()=>{
  //           for(var i=0;i<list.length;i++){
  //           this.texts = list[i].name;
  //           console.log(this.texts)
  //           console.log(list[i].name)
  //           }
  //         },1000)
  //     // }
  //   }
  // },
};


// mounted () {
//     document.addEventListener('click', this.handleBodyClick)
// },
// destroyed () {
//     document.removeEventListener('click', this.handleBodyClick)
// },
// methods:{
//     handleBodyClick: function(){
//         if (this.show) {
//             this.show = false;
//         }
//     }
//     toggleShow: function(){
//         this.show = !this.show
//     }
// }

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: rem(88px);
  font-size: 0;
  z-index: 999;
  background: #fff;
  div {
    float: left;
    img {
      width: rem(156px);
      height: rem(68px);
      margin-left: rem(10px);
      margin-top: rem(6px);
    }
    div{
      font-size: rem(14px);
      line-height: rem(88px);
      width: rem(156px);
      text-align: center;
    }
  }
  .remind {
    padding: rem(24px);
  }
  .search {
    width: rem(496px);
    height: rem(64px);
    background: #e5e5e5;
    border-radius: 5%;
    line-height: rem(64px);
    margin-top: rem(10px);
    .icon-sousuo {
      width: rem(72px);
      padding-right: rem(30px);
      padding-left: rem(12px);
      border-right: 1px solid #a48b78;
    }
    input {
      border: 0 none;
      margin-right: rem(18px);
      background: #e5e5e5;
      outline: none;
    }
  }
}
.search_c {
  margin-top: rem(88px);
  font-size: rem(14px);
  padding: rem(30px);
  p {
    padding: rem(10px) 0 rem(50px) 0;
    color: #666;
  }
  ul {
    li {
      margin-bottom: rem(15px);
      span {
        display: inline-block;
        padding: rem(15px);
        border: 1px solid #ccc;
        margin-right: rem(6px);
        border-radius: 5%;
      }
    }
  }
}
.search_con {
  font-size: rem(14px);
  padding: rem(30px);
  p {
    padding: rem(10px) 0 rem(50px) 0;
    color: #666;
    span {
      float: right;
    }
  }
}
</style>

