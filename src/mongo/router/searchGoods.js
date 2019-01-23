const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../model/goods.js')
Router.post('/addGoods',(req,res)=>{
    res.append("Access-Control-Allow-Origin","*");
    // 1.接受数据
    console.log(req.body);
    var url = "https://m.bd-ego.com/bd-product/api/item/searchItemList";
    request.post(url,(err,response,body)=>{
        console.log(req.url);
        res.send(body);
    })

})
    