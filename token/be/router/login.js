const express = require('express');
const Router = express.Router();


const db = require('../db');
const formatData = require('../utils/formatData');
const {create} = require('../utils/token');

// 添加用户
Router.post('/',async(req,res)=>{console.log('login')
    let result;
    let {username:name,password} = req.body;
    try{
        let data = await db.find('user',{name,password});
        result = {data}
        if(data.length>0){
            result.token = create(name);
        }
        result = formatData(result);
    }catch(err){console.log('err:',err)
        result = formatData({data:err,code:500});
    }
    res.send(result);
});

module.exports = Router;