/**
 * 关于数据库的所有操作
 * 增
 * 删
 * 改
 * 查
 */

const mongodb = require('mongodb');
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient

// 连接数据库
function connect(collectionName){
    return new Promise((resolve,reject)=>{

        MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
            if(err){
                reject(err);
                return;
            }

            // 使用数据库
            let db = client.db('mytest');

            // 使用集合
            let col = db.collection(collectionName);

            resolve({col,client});
        });
    })
}

// 查
exports.find = (collectionName,query)=>{
    return new Promise(async(resolve,reject)=>{

        let {col,client} = await connect(collectionName);

        // 查询所有分类
        col.find(query).toArray((err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:'查询失败',
                    data:err
                });
            }else{

                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }


            // 关闭数据库，避免资源浪费
            client.close();
        });
    
    });
}

// 增
exports.insert = (collectionName,data)=>{
    return new Promise(async(resolve,reject)=>{

        let {col,client} = await connect(collectionName);


        // 查询所有分类
        col[Array.isArray(data) ? 'insertMany':'insertOne'](data,(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:'插入失败',
                    data:err
                });
            }else{

                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }


            // 关闭数据库，避免资源浪费
            client.close();
        });
    
    });
}

// 删
exports.delete = (collectionName,query)=>{
    return new Promise(async(resolve,reject)=>{

        let {col,client} = await connect(collectionName);


        // 查询所有分类
        col[Array.isArray(query) ? 'deleteMany':'deleteOne'](query,(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:'删除失败',
                    data:err
                });
            }else{

                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }


            // 关闭数据库，避免资源浪费
            client.close();
        });
    
    });
}

// 改
exports.update = (collectionName,query,data)=>{
    return new Promise(async(resolve,reject)=>{

        let {col,client} = await connect(collectionName);

        // if(query._id){
        //     query = {_id:query._id}
        // }

        // 查询所有分类
        col[Array.isArray(query) ? 'updateMany':'updateOne'](query,{$set:data},(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:'更新失败',
                    data:err
                });
            }else{

                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }


            // 关闭数据库，避免资源浪费
            client.close();
        });
    
    });
}