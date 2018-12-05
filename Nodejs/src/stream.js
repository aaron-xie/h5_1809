const fs = require('fs');

/*
    stream流    
        * fs.createReadStream()
        * fs.createWriteStream()
*/

// 以流的方式读取input.txt中的内容
let readerStream = fs.createReadStream('about.txt');
console.log(readerStream);

let data = '';
readerStream.on('data',chunk=>{
    //chunk为数据块（不完整的数据）
    // console.log(chunk.toString());
    data += chunk;
});

readerStream.on('end',()=>{
    // 数据读取完毕，执行这里的代码
    console.log(data);
});


// 可写流
let writerStream = fs.createWriteStream('output.txt');
writerStream.write('我们不一样；');
writerStream.write('有啥不一样；');
writerStream.write('其实也一样；');

 // 标记文件末尾
 writerStream.end();
 writerStream.on('finish', function() {
    console.log("写入完成。");
});