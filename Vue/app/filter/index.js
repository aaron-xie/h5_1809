import Vue from 'vue';

// 全局过滤器
// Vue.filter('formatDate',(value,fmt='YYYY-MM-DD')=>{
//     if(!value) return '';
    
//     let d = new Date(value);

//     // let year = d.getFullYear();
//     // let month = d.getMonth()+1;
//     // let date = d.getDate();

//     // return `${year}-${month}-${date}`

//     // let fmt = 'YYYY-MM-DD hh:mm:ss'

//     // 预订字符对应时间
// 	var o = {
//         "M+": d.getMonth() + 1, //月份 
//         "D+": d.getDate(), //日 
//         "h+": d.getHours(), //小时 
//         "m+": d.getMinutes(), //分 
//         "s+": d.getSeconds(), //秒 
//         "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
//         "S": d.getMilliseconds() //毫秒 
//     };

//     // 匹配年份
//     // 年份比较特殊，所以单独处理
//     // test方法如果返回true，RegExp.$1得到匹配的字符
//     if(/(Y+)/.test(fmt)){
//     	// 得到fmt字符串中Y字符对应的时间
//     	// YYYY => 2017
//     	// YY => 17
//     	var res = String(d.getFullYear()).substr(4 - RegExp.$1.length);

//     	// 替换年份
//     	fmt = fmt.replace(RegExp.$1,res);
//     }

//     for(var str in o){
//     	// 创建正则时设定分组，以便获取匹配到的字符
//     	// RegExp.$1
//     	var reg = new RegExp('(' + str + ')');

//     	// 如果有匹配则把fmt中匹配到的字符替换成o中对应的时间，根据fmt中的字符决定是否补0
//     	// YYYYDDMM => 20170813
//     	// YYYY-DD-MM hh:mm:ss => 2017-08-13 20:12:30
//     	if(reg.test(fmt)){
//     		// 得到匹配字符对应的时间
//     		var res = RegExp.$1.length>1 ? ('00' + o[str]).substr(String(o[str]).length) : o[str];
//     		fmt = fmt.replace(RegExp.$1,res);
//     	}
//     }

//     return fmt;
// });


export default (value,fmt='YYYY-MM-DD')=>{
    if(!value) return '';
    
    let d = new Date(value);

    // 预订字符对应时间
    var o = {
        "M+": d.getMonth() + 1, //月份 
        "D+": d.getDate(), //日 
        "h+": d.getHours(), //小时 
        "m+": d.getMinutes(), //分 
        "s+": d.getSeconds(), //秒 
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
        "S": d.getMilliseconds() //毫秒 
    };

    // 匹配年份
    // 年份比较特殊，所以单独处理
    // test方法如果返回true，RegExp.$1得到匹配的字符
    if(/(Y+)/.test(fmt)){
        // 得到fmt字符串中Y字符对应的时间
        // YYYY => 2017
        // YY => 17
        var res = String(d.getFullYear()).substr(4 - RegExp.$1.length);

        // 替换年份
        fmt = fmt.replace(RegExp.$1,res);
    }

    for(var str in o){
        // 创建正则时设定分组，以便获取匹配到的字符
        // RegExp.$1
        var reg = new RegExp('(' + str + ')');

        // 如果有匹配则把fmt中匹配到的字符替换成o中对应的时间，根据fmt中的字符决定是否补0
        // YYYYDDMM => 20170813
        // YYYY-DD-MM hh:mm:ss => 2017-08-13 20:12:30
        if(reg.test(fmt)){
            // 得到匹配字符对应的时间
            var res = RegExp.$1.length>1 ? ('00' + o[str]).substr(String(o[str]).length) : o[str];
            fmt = fmt.replace(RegExp.$1,res);
        }
    }

    return fmt;
}