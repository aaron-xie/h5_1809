const fs = require('fs');



// 读取文件：fs.readFile(path,callback)
// 异步方法
fs.readFile('about.txt',(err,data)=>{
    if(err){
        console.log('读取文件失败')
    }
    console.log('data:',data.toString());
});


// 写入文件：fs.writeFile()
// fs.writeFile('about.txt','我已经承受不来',err=>{
fs.appendFile('about.txt','你快回来\ntiantian',err=>{
    if(err){
        throw Error('写入文件失败');
    }
    console.log('写入成功')
});

