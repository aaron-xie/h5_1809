const express = require('express');

const mysql = require('mysql');
const _sql = require('./sql');

//创建连接池
// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     port: 3306,
//     database: 'edusys',
//     multipleStatements: true
// });

// 创建express应用
let app = express();


// 路由
app.get('/city',async (req,res)=>{console.log(666)
    // 编写mysql语句
    let sql = `select * from city`;

    // pool.query(sql, function(error, rows){
            
    //     res.send(rows);
    // });

    // 利用回调函数来获取数据
    // sql.query(sql,(data)=>{
    //     // 在回调函数中获取数据，并响应到前端
    //     res.send(data)
    // })

    


    // 利用Promise对象获取数据
    // _sql.query(sql)
    
    // // 成功获取数据
    // .then(data=>{
    //     res.send(data);
    // })
    

    // // 失败
    // .catch(error=>{
    //     res.send(error);
    // });


    // 利用async, await实现数据获取
    let data = await _sql.query(sql);
    res.send(data);

})
app.get('/city/:city',async (req,res)=>{console.log(666)
    // 编写mysql语句
    let sql = `select * from city where name='${req.params.city}'`;

    // pool.query(sql, function(error, rows){
        
    //     res.send(rows[0]);
    // });

    let data = await _sql.query(sql);
    res.send(data);
})

app.get('/student',async (req,res)=>{console.log(666)
    // 编写mysql语句
    let sql = `select * from student`;

    // pool.query(sql, function(error, rows){
        
    //     res.send(rows);
    // });

    let data = await _sql.query(sql);
    res.send(data);

})

app.get('/student/:className',async (req,res)=>{console.log(666)
    // 获取className对应的id
    let className = req.params.className;
    // pool.query(`select id from class where name='${className}'`, function(error, rows){
    //     let classID = rows[0].id

    //     // 编写mysql语句
    //     let sql = `select * from student where class_id=${classID}`;

    //     pool.query(sql, function(error, rows){
            
    //         res.send(rows);
    //     });
    // });

    // 编写mysql语句
    let sql = `select * from student where class_id in (select id from class where name=${className})`;

    
    // pool.query(sql, function(error, rows){
    //     if(error){
    //         res.send({
    //             status:0,
    //             total:0,
    //             data:[]
    //         });
    //         return;
    //     }
    //     rows = JSON.parse(JSON.stringify(rows));
    //     let result = {
    //         status:1000,
    //         total:rows.length,
    //         data:rows
    //     }
    //     res.send(result);
    // });

    let data = await _sql.query(sql);
    res.send(data);
})

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
})

