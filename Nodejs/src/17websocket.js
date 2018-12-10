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
let server = http.Server(app);
let SocketServer = ws.Server;
let wss = new SocketServer({
    server,
    port:1001
});


// 监听客户端连接
wss.on('connection',(client)=>{
    // 接收消息
    client.on('message', function (msg) {console.log('客户端消息：',msg)
    	// msg = JSON.parse(msg);

        //把客户端的消息广播给所有在线的用户
        wss.broadcast(msg);
    });
});


//自定义方法，用于服务器发送消息
wss.broadcast = function broadcast(msg) {  
    wss.clients.forEach(function(client) { 
        client.send(msg)
    });  
}; 