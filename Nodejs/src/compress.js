var fs = require("fs");

//压缩和解压的模块
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
// 以流的方式读取文本
fs.createReadStream('myregion.json')
  .pipe(zlib.createGzip()) //把读取出来的文本调用压缩模块进行压缩

  .pipe(fs.createWriteStream('all.json.zip'));//把压缩好的流进行保存