/**
 * Token操作
 * 创建create
 * 验证verify
 */

 const jwt = require('jsonwebtoken');
 const config = require('../config.json');
 
 //密钥：用于加密的key
 let {secret} = config;

 exports.create = (username,expiresIn=60)=>{
    // username: 用于加密的用户名
    // expires: token有效期(单位: s)，默认2小时


    //生成 Token：根据传入用户名和key进行加密，并设置有效期
    let token = jwt.sign({username}, secret, {
        expiresIn
    });
    return token;
 }

 exports.verify = (token)=>{
    let res = false;
    try{
        res = jwt.verify(token, secret);//得出解密后的结果Object:{username:xxx...}
    }catch(err){
        res = false;
    }

    return res;
 }