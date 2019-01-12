import Vue from 'vue'
import Router from 'vue-router' 
import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Cart from '../pages/cart/Cart.vue'
import Mine from '../pages/mine/Mine.vue'
// import GoodsDetails from '../pages/home/goodsDetails/Goodsdetails.vue'
import GoodsDetails from '../pages/home/goodsDetails/Goodsdetails .vue'
// import DetailsImg from '../pages/home/goodsDetails/DetailsImg.vue'
// import DetailsText from '../pages/home/goodsDetails/DetailsText.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
     {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/goodsDetails/:id',
      name: 'GoodsDetails',
      component: GoodsDetails,
      // children:[
      //   // {
      //   //   path:'',//默认子路由
      //   //   redirect:{name:'detailsImg'}
      //   // }, {
      //     {
      //     path:'detailsImg',
      //     name:'DetailsImg',
      //     component:DetailsImg
      //   }, {
      //     path:'detailsText',
      //     name:'DetailsText',
      //     component:DetailsText
      //   }]
    },
    // {
    //   path: '/detailsImg',
    //   name: 'DetailsImg',
    //   component: DetailsImg
    // },
    // {
    //   path: '/detailsText',
    //   name: 'DetailsText',
    //   component: DetailsText
    // },
    { path:'/',redirect:{name:'Home'}}
  ]
})
