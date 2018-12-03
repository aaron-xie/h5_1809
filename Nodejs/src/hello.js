//这里的js不能在浏览器端执行
// 只能在node环境（服务器端）下执行


// 利用require方法引入其他模块，是同步的
let person = require('./js/person.js');

// 对象解构
let {getName,setName} = require('./js/person.js');

console.log(person,getName(),setName);