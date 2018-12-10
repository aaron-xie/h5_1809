// const socketServer = require('ws').Server;

// let wss = new socketServer({
//     port: 1001
// });

// console.log(wss);

const express = require('express');
const http = require('http');
const ws = require('ws');

// 创建express应用
let app = express();

// 静态资源服务器
app.use(express.static('./'));


let server = http.Server(app);

// WebSocket服务器
let SocketServer = ws.Server;
let wss = new SocketServer({
    server,
    port:1001
});


/*
    ws
        * clients(Array) : 所有客户端对象
            * client : 客户端对象
                * send() 发送消息给客户端
        * 事件
            * connection  用户连接成功时触发
            * message     接收到用户消息时触发
            * close       用户断开连接时触发
 */

// 监听客户端连接
wss.on('connection',(client)=>{
    // 接收消息
    client.on('message', function (msg) {console.log(msg)
    	// msg = JSON.parse(msg);

        //把客户端的消息广播给所有在线的用户
        wss.broadcast(msg);
    });
});


//自定义方法，用于广播消息
// 遍历所有用户对象，分别发送消息
wss.broadcast = function broadcast(msg) {  
    wss.clients.forEach(function(client) { 
        client.send(msg)
    });  
}; 