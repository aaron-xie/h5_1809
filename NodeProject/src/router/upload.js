const path = require('path');
const express = require('express');
let Router = express.Router();

const multer = require('multer');


// 定义上传临时路径
// 如果无文件夹，则会自动创建

// 定义磁盘存储
var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        console.log('file:',file)
        let ext = path.extname(file.originalname);//.jpg,.png,.xx
      cb(null, file.fieldname + '-' + Date.now()+ext);
    }
})

let upload = multer({ dest: 'temp/',storage });

// 多文件上传接口
Router.post('/',upload.array('goodspic',5),(req,res)=>{// upload/
    // 通过req.files获取多文件信息
    console.log('files:',req.files)
    console.log('body:',req.body);

    // 写入数据库

    // 相应给前端的信息
    res.send({
        code:1,
        msg:'文件上传成功',
        data:req.files
    })
});


// api路径：/upload/goods
// upload的方法：
//  * single(name)
//  * array(name,qty)
Router.post('/goods',upload.single('goodspic'), (req,res)=>{
    // 通过req.file获取到上传文件的内容
    console.log(req.file,req.body);
    // 存储到数据库

    res.send({
        code:1,
        msg:'文件上传成功',
        data:req.file
    })
});

module.exports = Router;