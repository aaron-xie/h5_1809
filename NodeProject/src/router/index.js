//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const userRouter = require('./user');
const goodsRouter = require('./goods')
const categoryRouter = require('./category')
const uploadRouter = require('./upload')

let Router = express.Router();

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 关于用户的路由
Router.use('/user',userRouter);

// 关于商品的路由
Router.use('/goods',goodsRouter);

// 关于商品分类的路由
Router.use('/category',categoryRouter);

// 上传
Router.use('/upload',uploadRouter)

module.exports = Router;