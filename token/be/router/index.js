const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
// format applicatioin/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// format application/json
const jsonParse = bodyParser.json();


const userRouter = require('./user');
const goodsRouter = require('./goods');
const categoryRouter = require('./category');
const uploadRouter = require('./upload');
const loginRouter = require('./login');
const tokenRouter = require('./token');


// 允许跨域请求
Router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  // 跨域请求CORS中的预请求
  if (req.method == "OPTIONS") {
    res.sendStatus(200);/*让options请求快速返回*/
  } else {
    next();
  }
});

// 利用body-parser格式化前端传入的参数
Router.use(urlencodedParser, jsonParse);


Router.use('/user', userRouter);
Router.use('/goods', goodsRouter);
Router.use('/category', categoryRouter)
Router.use('/upload', uploadRouter);

// 登录接口（token生成接口）
Router.use('/login', loginRouter);

// token验证接口
Router.use('/verifytoken', tokenRouter);

module.exports = Router;