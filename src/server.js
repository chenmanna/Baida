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
app.listen("2999",()=>{
    console.log(2999);
})


// https://m.bd-ego.com/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1546839897752
// https://m.bd-ego.com/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=0&_t=1546859442537 goods