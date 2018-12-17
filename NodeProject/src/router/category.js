const express = require('express');
let Router = express.Router();

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../db');


Router.get('/',async (req,res)=>{
    //获取所有分类

    let data
    try{
        data = await db.find('category',{});
    }catch(err){
        data = err;
    }

    res.send(data);
});

Router.get('/:type',(req,res)=>{
    res.send({
        path:'某个分类',
        username:req.params.type
    })

    // db.insert([{},{}])
});

Router.put('/',urlencodedParser,async(req,res)=>{console.log(req.body)
    let data
    try{
        data = await db.insert('category',{...req.body,add_time:Date.now()});
    }catch(err){
        data = err;
    }

    res.send(data);
})

Router.delete('/',urlencodedParser,async(req,res)=>{
    let data
    try{
        data = await db.delete('category',{...req.body});
    }catch(err){
        data = err;
    }

    res.send(data);
})


Router.post('/',urlencodedParser,async(req,res)=>{
    let data
    try{
        data = await db.update('category',{name:req.body.name},{...req.body});
    }catch(err){
        data = err;
    }

    res.send(data);
})


module.exports = Router;