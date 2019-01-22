const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../model/goods.js')


// 详情页添加商品数量========================
Router.get('/addGoods',(req,res)=>{
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin","*");
    // 1.接受数据
  let {userCode,userName,price,imgUrl,title,qty}=req.query;
Goods.find({userName: userName})
.then((data)=>{
    if(data.length>0){
        console.log('有用户购物车信息');
        Goods.find({userName: userName}).find({userCode: userCode})
        .then((data)=>{
            if(data.length>0){
                console.log('有相同的商品信息');
                // 相同商品的qty++
                    var currentQty;
                    for(var i=0;i<data.length;i++){
                        currentQty = data[i].qty;
                    }
                    console.log(currentQty);
                    Goods.updateOne({userCode: userCode},{qty: currentQty/1+qty*1})
                    .then((data)=>{
                        return res.send({err:0,msg:'插入成功',data:null}) 
                    })
                .catch((err)=>{
                    console.log(err);
                })
            }else{
                Goods.insertMany({userCode,userName,price,imgUrl,title,qty})
                return  res.send({err:0,msg:'插入成功',data:null}) 
            }
        })
    }else{
        // 没有用户购物车信息
        Goods.insertMany({userCode,userName,price,imgUrl,title,qty})
        return res.send({err:0,msg:'插入成功',data:null})
    }
})
.catch((err)=>{
    console.log(err)
    return res.send({err:-1,msg:'插入失败',data:null})
})
})


//页面初始渲染。查询用户购物车=============
Router.get('/getUserCart',(req,res)=>{
    res.append("Access-Control-Allow-Origin","*");
    let  {user}=req.query
    Goods.find({userName:user})
    .then((data)=>{
        console.log(data);
        return res.send({err:0,msg:'查询成功',data:data})
    })
    .catch((err)=>{
        console.log(err)
        return res.send({err:-1,msg:'查询错误',data:null})
    })
})


// 购物车添加商品数量1================
Router.get('/addOne',(req,res)=>{
    res.append("Access-Control-Allow-Origin","*");
    let  {currentId}=req.query
    // console.log(currentId,"当前11111111111111id");
    Goods.find({_id: currentId})
    .then((data)=>{
        // console.log(333333333333,data);
        var qty;
        for(var i=0;i<data.length;i++){
            qty = data[i].qty;
        }
        // console.log('444444444444qty',qty,qty*1+1)
        Goods.updateOne({_id: currentId},{qty: qty*1+1})
        .then((data)=>{
            Goods.find({_id: currentId})
            .then((data)=>{
                 return res.send({err:0,msg:'数量加1',data:data})
            })
        })
        .catch((err)=>{
            console.log(err);
            return res.send({err:-1,msg:'增加数量错误',data:null});
        })
    })
    .catch((err)=>{
        console.log(err)
        return res.send({err:-1,msg:'增加数量错误',data:null})
    })
})


//购物车减少商品数量1 ===============
Router.get('/reduceOne',(req,res)=>{
    res.append("Access-Control-Allow-Origin","*");
    let  {currentId}=req.query
    console.log(currentId)
    Goods.find({_id: currentId})
    .then((data)=>{
        var qty;
        // console.log(data,11111111111111,)
        for(var i=0;i<data.length;i++){
            qty = data[i].qty;
        }
        if(qty<=2){
           qty = 1;
        }else{
            qty = qty-1;
        }
        Goods.updateOne({_id: currentId},{qty: qty})
        .then((data)=>{
            Goods.find({_id: currentId})
            .then((data)=>{
                return res.send({err:0,msg:'数量减1',data:data})
            })
            .catch((err)=>{
                console.log(err);
                return res.send({err:-1,msg:'数量减少错误',data:null})
            })
        })
    })
    .catch((err)=>{
        console.log(err)
        return res.send({err:-1,msg:'数量减少错误',data:null})
    })
})


//删除商品==========================
Router.get('/delGood',(req,res)=>{
    res.append("Access-Control-Allow-Origin","*");
    console.log('cuowwwwwwwww')
    let {currentId} = req.query;
    console.log(currentId);
    Goods.remove({_id: currentId})
    .then((data)=>{
        Goods.find()
        .then((data)=>{
            console.log(data,'daata22')
            res.send({err:0,msg:'删除成功',data:data})
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'删除失败',data:null})
    })

})

module.exports=Router;