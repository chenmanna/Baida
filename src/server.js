var express = require("express");
var request = require("request");
// 代理
var app = express();

var apiProxy = '/proxy/';
var apiMap = {
    HomeBanner: "/bd-marketing/api/channel/getNewHeadPageData",
    Logo: "/bd-content/api/advertlocation/getAdvertLocal",//请求超时
    ConBanner: "/bd-marketing/api/activity/querySeckillActivity",
    HomeImgList: "/bd-marketing/api/activity/getProductList",
    Goodsdetails: "/bd-product/api/item/itemDetail",
    GoodsdetailsBanner: "/bd-product/api/recommend/productRecommend",//请求数据不符合
    Goodsdetailsimg: "/bd-product/api/item/itemGraphicDetail",
    Pinpai:"/bd-product/api/brand/getAllShowBrand",
    Fenlei:"/bd-product/api/categ/itemCategList",
    Liebiao:"/bd-product/api/categ/itemSecondCategList",
    // HomeSearch: "/bd-product/api/delivery/searchList",//https://m.bd-ego.com/bd-product/api/item/searchItemList
    // HomeSearch: "/bd-product/api/item/searchItemList"
}
app.get(apiProxy + "*",(req,res)=>{
        // cors
        res.append("Access-Control-Allow-Origin","*");
        var reqUrl = req.url.replace(apiProxy,'');
        var index = reqUrl.search(/\/|\?/);
        var api = reqUrl;
        var data = '';
        if(index){
            api = reqUrl.slice(0,index);
            data = reqUrl.slice(index);
        }
        var url = 'https://m.bd-ego.com/' + apiMap[api] + data;
        // console.log('11111111111111111',url)
        request.get(url,(err,response,body)=>{
            res.send(body);
            // console.log(1,url);
        })
    })

// post请求============================================
    // const bodyParser=require('body-parser')
    // app.use(bodyParser.urlencoded({ extended: false}));
    // var apiPost = '/proxyPost/';
    // var proxyApi = {
    //     HomeSearch: "/bd-product/api/item/searchItemList"
    // }
    // app.post(apiPost + "*",(req,res)=>{
    //     console.log(3333,req.url)
    //     // cors
    //     res.append("Access-Control-Allow-Origin","*");
    //     var reqUrl = req.url.replace(apiPost,'');
    //     console.log(reqUrl)
    //     var index = reqUrl.search(/\/|\?/);
    //     var api = reqUrl;
    //     var data = '';
    //     if(index){
    //         api = reqUrl.slice(0,index);
    //         data = reqUrl.slice(index);
    //     }
    //     // console.log(proxyApi[api],data)
    //     var url = 'https://m.bd-ego.com/' + proxyApi[api] + data;
    //     console.log(222222222222,proxyApi[api],data)
    //     // console.log('11111111111111111',url)
    //     request.post(url,(err,response,body)=>{                                       
    //         console.log(1111111111111,url);
    //         res.send(body);
    //         // console.log(1,url);
    //     })
    // })
// app.post('/post',function(req,res){
//     res.append("Access-Control-Allow-Origin", "*");
//     console.log(111111111111111,req);
//     var url = "https://m.bd-ego.com/bd-product/api/item/searchItemList";
//     request.post(url,(err,response,body)=>{
//         console.log(req.url);
//         res.send(body);
//     })
// })
// =====================================================================

//路由//连接数据库
const db = require('./mongo/mongoose.js')
const goods = require('./mongo/router/changeGoods')
// const search = require('./mongo/router/searchGoods')
// const uploadRouter=require('./src/router/upload.js')
// const goodsRouter=require('./src/router/goods.js')

//路由分发
app.use('/changeGoods',goods)
// app.use('/searchGoods',search)
// app.use('/upload',uploadRouter)
// app.use('/goods',goodsRouter)


app.listen("2999",()=>{
    console.log(2999);
})


// https://m.bd-ego.com/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1546839897752
// https://m.bd-ego.com/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=0&_t=1546859442537 goods