const express = require('express');
const bodyParser = require('body-parser');

//创建一个http服务器
const app = express();

// 跨域支持
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 静态资源服务器
// 中间件：express.static
app.use(express.static('./'));

// 路由
app.get('/',(req,res)=>{
    res.send('首页')
})

app.get('/cart',(req,res)=>{
    let cartlist = [{id:1,name:'iphonXs',price:8998},{id:2,name:'node7',price:998}]
    res.send(cartlist)
});

// 商品列表
app.get('/list',(req,res)=>{
    // 获取商品类型
    let category = req.query.category;

    // mysql
    // let sql = `select * from goods where category=${category}`

    let goodslist;
    switch(category){
        case 'phone':
            goodslist = [{id:1,name:'iphonXs',price:8998},{id:2,name:'node7',price:998}]
            break;
        case 'computer':
            goodslist = [{id:3,name:'lenovo',price:1998},{id:4,name:'hp',price:5998}];
            break;
        default:
            goodslist = []
    }

    res.send(goodslist);
});

// 商品详情页
// 动态路由：地址为变量

app.get('/goods/:id',(req,res)=>{
    // 获取所有商品
    let goodslist = [{id:1,name:'iphonXs',price:8998},{id:2,name:'node7',price:998},{id:3,name:'lenovo',price:1998},{id:4,name:'hp',price:5998}]
    
    //获取id这个变量
    let {id} = req.params;//等效于let id = req.params.id

    // 获取对应商品
    let goods = goodslist.filter(item=>item.id==id);//[{id}]
    goods = goods[0] ? goods[0] : {};//避免返回undefined

    res.send(goods);

})


// 搜索功能
// 获取get请求参数：req.query
app.get('/search',(req,res)=>{
    console.log(req.query.keyword);
    // 1.获取到搜索关键字
    // 2.根据关键字查询数据库
    // 3.把结果返回给前端
    res.send('这是数据');
})


// POST请求
// 如何获取参数
app.post('/cart',(req,res)=>{
    res.send('shopping car post')
})
app.post('/login',bodyParser.urlencoded({ extended: false }),(req,res)=>{
    console.log(req.body)

    let user = [
        {username:'laoxie',password:123456},
        {username:'tiantian',password:888888}
    ]
    
    // 根据用户名和密码
    // 查询数据库，是否存在
    let {username,password} = req.body;
    let has = user.filter(item=>username==item.username&&password==item.password)
    if(has.length>0){
        res.send({code:1,msg:'success',data:[]});
    }else{
        res.send({code:0,msg:'fail',data:[]});
    }
    

    // let content = '';
    // req.on('data',(chunk)=>{
    //     content += chunk;
    //     console.log(chunk)
    // });

    // req.on('end',()=>{
    //     console.log(content);
    //     res.send(content)
    // })
})

// 监听端口
app.listen(3008,()=>{
    console.log('server is running on http://localhost:3008')
})