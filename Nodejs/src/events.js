const events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


// 绑定事件及事件的处理程序
eventEmitter.on('connection', function(){
    console.log('连接成功。');
    // 触发 data_received 事件 
});

setTimeout(()=>{
    eventEmitter.emit('connection');
},5000);

console.log('end')