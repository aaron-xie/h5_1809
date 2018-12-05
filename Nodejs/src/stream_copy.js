const fs = require('fs');

// 创建一个可读流
let readStream = fs.createReadStream('./data/region.json');

readStream.on('data',chunk=>{
    console.log('chunk:',chunk.toString());
})


// 创建一个可写流
let writeStream = fs.createWriteStream('myregion.json');


 // 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readStream.pipe(writeStream);