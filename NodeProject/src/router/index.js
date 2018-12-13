//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const userRouter = require('./user');
const goodsRouter = require('./goods')
const categoryRouter = require('./category')

let Router = express.Router();

// 关于用户的路由
Router.use('/user',userRouter);

// 关于商品的路由
Router.use('/goods',goodsRouter);

// 关于商品分类的路由
Router.use('/category',categoryRouter)

module.exports = Router;