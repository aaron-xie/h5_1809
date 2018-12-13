const express = require('express');
let Router = express.Router();


Router.get('/',(req,res)=>{
    res.send('分类列表')
});

Router.get('/:type',(req,res)=>{
    res.send({
        path:'某个分类',
        username:req.params.type
    })
});


module.exports = Router;