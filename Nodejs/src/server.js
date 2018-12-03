// 原生模块：nodejs自带的模块，不需要安装，直接引用
const http = require('http');
const url = require('url');


//服务器
// 请求request
// 响应response
// 端口：
let app = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    // url.parse() 把url格式化为对象
    let params = url.parse(request.url,true).query;
    console.log('params:',params)
    // 路由
    switch(request.url){
        case '/home':
            response.end('首页');
            break;
        case '/list':
            response.end('列表页');
            break;
        case '/cart':
            response.end('购物车');
            break;
        default:
            response.end(`你访问的页面 ${request.url} 不存在`);
    }
   
    // 设置响应头Content-Type，用于告诉浏览器相应内容的类型
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // response.write('hello server');
    // response.write('<p>hello laoxie</p>');
    // response.write('<p>hello tiantian</p>');

    // // 标记响应结束
    // response.end('<h4>hello 各位</h4>');
});

// 配置监听端口
// listen()
app.listen(3004,function(){
    //服务器启动成功后执行这里的代码
    console.log('服务器启动成功，端口为3004')
})
