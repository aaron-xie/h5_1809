const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');


// 爬取这里的图片
// http://www.netbian.com/youxi/

request({
    url:'http://www.netbian.com/youxi/'
}, (error, response, body) => {
    let $ = cheerio.load(body);

    let res = $('#main .list a').each((idx,ele)=>{
        let src = $(ele).attr('href');
        if(src.startsWith('/')){
            src = 'http://www.netbian.com'+src;
            console.log(src);
            try{
                request(src,(err,res,body)=>{
                    try{
                        let $ = cheerio.load(body);
        
                        //获取大图地址
                        $('.pic img').each((i,e)=>{
                            let url = $(e).attr('src');
                            console.log('url:',url);
                            let filename = path.basename(url)
                            request(url).pipe(fs.createWriteStream('./img/'+filename));
                        })
                        
                    }catch(e){

                    }
                })
            }catch(err){

            }
            
        }

        // 截取文件名
        //let filename = path.basename(src);//xxx.jpg
        

        //request(src).pipe(fs.createWriteStream('./img/'+filename));
    });
});