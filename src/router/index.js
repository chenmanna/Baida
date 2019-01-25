import Vue from 'vue'
import Router from 'vue-router' 
Vue.use(Router)
// import router from './router'
import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Cart from '../pages/cart/Cart.vue'
import Mine from '../pages/mine/Mine.vue'
import Login from '../pages/mine/Login.vue'
import GoodsDetails from '../pages/home/goodsDetails/Goodsdetails .vue'
import Fenlei from '../pages/classify/fenlei/Fenlei.vue'
import Pinpai from '../pages/classify/fenlei/Pinpai.vue'



// let VueRouter = new Router();
// VueRouter.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//       if (sessionStorage.getItem('user')) {  // 通过vuex state获取当前的token是否存在
//           next();
//       }
//       else {
//           next({
//               path: '/login',
//               query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           })
//       }
//   }
//   else {
//       next();
//   }
// })            
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
      component: Classify,
      children:[
        {
          path:'',//默认子路由
          redirect:{name:'Fenlei'}
        },
        {
          path:'Fenlei',//当url为匹配这个子路由
          name:'Fenlei',
          component:Fenlei,
          meta:{
              requireAuth:true
          }
        },
        {
          path:'Pinpai',
          name:'Pinpai',
          component:Pinpai
        }
      ]
    },
     {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    // 登陆注册路由
     {
      path: '/mine',
      name: 'Mine',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Mine
       
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/goodsDetails/:id',
      name: 'GoodsDetails',
      component: GoodsDetails,
    },
    { path:'/',redirect:{name:'Home'}}
  ],
  
})

