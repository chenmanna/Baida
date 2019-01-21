const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../model/goods.js')
//增加商品
//添加商品信息
// 详情页添加商品数量========================
Router.get('/addGoods',(req,res)=>{
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin","*");
// 1.接受数据
  let {userCode,userName,price,imgUrl,title,qty}=req.query;
//   Goods.find({userName:user})
//   .then((res)=>{
//       console.log(res);
//   })
//   .catch((err)=>{    
//     console.log(err);
//   })
Goods.find({userName: userName})
.then((data)=>{
    if(data.length>0){
        console.log('有用户购物车信息');
        Goods.find({userName: userName}).find({userCode: userCode})
        .then((data)=>{
            if(data.length>0){
                console.log('有相同的商品信息');
                // 相同商品的qty++
                // Goods.find({userCode: userCode}).
                // console.log(data.qty,111111111111);
                // console.log(data,999999)
                // console.log(qty,22222222222);
                // console.log(data.qty/1+qty*1);
                // Goods.find({userCode: userCode})
                // .then((data)=>{
                    // console.log(data,55555,data.qty);
                    // res.send('哈哈哈哈');
                    var currentQty;
                    for(var i=0;i<data.length;i++){
                        currentQty = data[i].qty;
                    }
                    console.log(currentQty);
                    Goods.updateOne({userCode: userCode},{qty: currentQty/1+qty*1})
                    .then((data)=>{
                        // console.log('qty++')
                        return res.send({err:0,msg:'插入成功',data:null}) 
                    })
                // })
                // Goods.updateOne({userCode: userCode},{qty: data.qty/1+qty*1})
                
                // .then((data)=>{
                //     console.log('qty++')
                //     res.send({err:0,msg:'插入成功',data:null}) 
                // })
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
// =====
//  Goods.insertMany({userCode,userName,price,imgUrl,title,qty})
//  .then((data)=>{
//  	res.send({err:0,msg:'插入成功',data:null})
//  })
//  .catch((err)=>{

//  	console.log(err)
//     res.send({err:-1,msg:'插入失败',data:null})
//  })

})

//查询商品
// Router.post('/getGoods',(req,res)=>{
//   console.log(req);
// 	//返回总条数
//   // Goods.find()查询所有
//   // Goods.find({tyle:‘音乐’})//分类查询
//   // Goods.find().limit(5).skip(5)//分页查询
//   // 1页2条
//   // 2   0
//   // 2   2
//   // 2   4
//   // let pagesize=2//每页的条数
//   // let page=1//页数o
//   let  {pagesize,page}=req.body
//   let obj={}
//   Goods.find()
//   .then((data)=>{
//   	// 获取总条数
//   	obj.total=data.length
//   	  return Goods.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
//   })
//   .then((data)=>{
//   	//处理的是第几页的几条数据
//   	obj.goodslist=data
//   	res.send({err:0,msg:'查询成功',data:obj})
//   })
//   .catch((err)=>{
//   	console.log(err)
//   	res.send({err:-1,msg:'查询错误',data:null})
//   })

// })


//查询单个商品==========================
Router.get('/getUserCart',(req,res)=>{
    //返回总条数
    // Goods.find({tyle:‘音乐’})//分类查询
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


// 购物车添加商品数量1================***************
Router.get('/addOne',(req,res)=>{
    //返回总条数
    // Goods.find({tyle:‘音乐’})//分类查询
    res.append("Access-Control-Allow-Origin","*");
    let  {currentId}=req.query
    console.log(currentId,"当前11111111111111id");
    Goods.find({_id: currentId})
    .then((data)=>{
        console.log(333333333333,data);
        var qty;
        for(var i=0;i<data.length;i++){
            qty = data[i].qty;
        }
        console.log('444444444444qty',qty,qty*1+1)
        Goods.updateOne({_id: currentId},{qty: qty*1+1})
        .then((data)=>{
            console.log(data,"添加数量+1111111");
            Goods.find({_id: currentId})
            .then((data)=>{
                 return res.send({err:0,msg:'添加成功',data:data})
            })
          
        })
        .catch((err)=>{
            console.log(err);
            return res.send({err:-1,msg:'添加错误',data:null});
        })
        console.log(111111111111,qty*1+1,qty)
        // return res.send({err:0,msg:'1查询成功',data:data})

    })
    .catch((err)=>{
        console.log(err)
        return res.send({err:-1,msg:'添加错误',data:null})
    })
})


//购物车减少商品数量1 ==========================************
Router.get('/reduceOne',(req,res)=>{
    //返回总条数
    // Goods.find({tyle:‘音乐’})//分类查询
    res.append("Access-Control-Allow-Origin","*");
    let  {currentId}=req.query
    Goods.find({userCode:currentId})
    .then((data)=>{
        Goods.updateOne({qty: qty--})
        res.send({err:0,msg:'查询成功',data:data})

    })
    .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'查询错误',data:null})
    })
})

// //修改商品
//  // 
// Router.post('/updateGoods',(req,res)=>{
//   //获取商品的唯一索引 主键（_id）
//   // 获取修改的值
//   // 执行修改

//   let id=req.body.id;
//   let {name,type,desc,price,imgpath,stock}=req.body
//   Goods.update({_id:id},{name,type,desc,price,imgpath,stock})
//   .then((data)=>{
//   	res.send({err:0,msg:'修改成功',data:null})
//   })
//   .catch((err)=>{
//   	console.log(err)
//   	res.send({err:-1,msg:'修改no成功',data:null})
//   })

// })


// //删除商品
// Router.post('/delGood',(req,res)=>{
//   //获取商品的唯一索引 主键（_id）
//   // 获取修改的值
//   // 执行修改

//   let id=req.body['id[]'];
//   // Goods.remove({_id:id})//正常的删除
//   //let array=['5bdfe8b6b907c6a31b5aac37','5bdfe10748ecfa1380d368f0']
//   Goods.remove({_id:{$in:id}})//批量删除
//   // Goods.remove({_id:id})
//   .then((data)=>{
//   	res.send({err:0,msg:'删除成功',data:null})
//   })
//   .catch((err)=>{
//   	console.log(err)
//   	res.send({err:-1,msg:'删除no成功',data:null})
//   })

// })


// // m模糊查询 关键字查询
// Router.post('/findGoodsByKw',(req,res)=>{
//   let  {pagesize,page,val}=req.body
//   let obj={}
//   console.log(val)
//   Goods.find({name:{$regex:val}})
//   .then((data)=>{
//         obj.total=data.length
//       return Goods.find({name:{$regex:val}}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
//   })
//    // Goods.find({$or:[{name:{$regex:'肉'}},{desc:{$regex:'肉'}}]})
//   .then((data)=>{
    

//     obj.goodslist=data;
//   	res.send({err:0,msg:'成功',data:obj})
//   })
//   .catch((err)=>{
//   	console.log(err)
//   	res.send({err:-1,msg:'失败',data:null})
//   })

// })


//排序=============
// Router.post('/findGoodSort',(req,res)=>{
//     console.log(req.body)
//     let  {pagesize,page,paixu,sort}=req.body
//     let obj={}
//     console.log([paixu],[sort])
//     Goods.find()
//     .then((data)=>{
//     // 获取总条数
//         obj.total=data.length
//         return Goods.find().sort({[paixu]:sort}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
//     })
//     .then((data)=>{
//       obj.goodslist=data;
//       res.send({err:0,msg:'成功',data:obj})
//     })
//     .catch((err)=>{
//       console.log(err)
//       res.send({err:-1,msg:'失败',data:null})
//     })

// })




module.exports=Router;