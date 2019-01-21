const express = require('express');
const Router = express.Router();

const formatData = require('../utils/formatData');
const {verify} = require('../utils/token');

// 处理token验证
Router.use((req, res, next) => {
    // 获取请求头中的token
    let token = req.header('token');
    if (verify(token)) {
        // next();
        res.send(formatData());//{data:[],code:200}
    } else {
        res.send(formatData({ code: 302 }));//{data:[],code:302}
    }
});

module.exports = Router;