var express = require("express");
var request = require("request");
// 代理
var app = express();

var apiProxy = '/proxy/';
var apiMap = {
    HomeBanner:"/bd-marketing/api/channel/getNewHeadPageData",
    Logo:"/bd-content/api/advertlocation/getAdvertLocal"
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
        })
    })
app.listen("2999",()=>{
    console.log(2999);
})
