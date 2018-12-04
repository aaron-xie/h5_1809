/**
 * 利用原生模块搭建静态资源服务器
 *  支持：css,html,js,image
 */

 const http = require('http');
 const fs = require('fs');
 const url = require('url');
 const path = require('path');

//  引入mime类型
const mime = require('./mime');


//  创建http服务器
http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;

    // 获取后缀名
    let ext = path.extname(pathname).slice(1);

    
    // switch(ext){
    //     case 'jpeg':
    //     case 'jpg':
    //         mime = 'image/jpeg';
    //         break;
    //     case 'css':
    //         mime = 'text/css';
    //         break;
    // }

    // 获取绝对路径，用于读取图片内容
    let realPath = path.join(__dirname,pathname);

    
    
    // 根据路径读取图片内容
    fs.readFile(realPath,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':`text/plain;charset=utf-8`});
            res.end(`你访问你的url:${pathname} 不存在`);
        }
        res.writeHead(200,{'Content-Type':`${mime[ext]};charset=utf-8`});
        res.end(data);
    });
}).listen(3005,()=>{
    console.log('server is running on port 3005')
})