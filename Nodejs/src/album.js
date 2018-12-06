/**
 * 利用fs模块与http模块制作本地相册
 */

 const http = require('http');
 const fs = require('fs');
 const url = require('url');
 const path = require('path');


//  创建http服务器
http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;

    // 获取绝对路径，用于读取图片内容
    let realPath = path.join(__dirname,pathname);//f:xx/xxx/xxx/img/tiantian.jpg

    console.log('path：',pathname);
    console.log('realpath：',realPath);
    
    // 根据路径读取图片内容
    fs.readFile(realPath,(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/jpeg'})
        res.end(data);
    });
}).listen(3005,()=>{
    console.log('server is running on port 3005')
})