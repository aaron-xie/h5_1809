//nodejs模块化开发
// 基于配置的开发环境

const express = require('express');

// 引入配置文件
const {port,host,root} = require('./config');

// 引入路由文件
const Router = require('./router');

let app = express();

// 利用中间件实现静态资源服务器
app.use(express.static(root));

// 路由
app.use(Router);

app.listen(port,()=>{
    console.log(`server is running on http://${host}:${port}`);
})
