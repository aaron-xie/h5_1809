/*
    Vue插件的编写
        * 对象
            * install方法
        * 函数
*/

// 对象：
// let myPlugin = {
//     install(){

//     }
// }

// 使用插件
// Vue.use(ElementUI)

// 函数：
// let myPlugin = (Vue)=>{
    // 插件一般有哪些类型

    // 1.全局方法：Vue.xx()
    // 2. 全局资源
    // Vue.directive()
    // Vue.filter()
    // Vue.component()
    // 4. 原型方法
    // Vue.prototype.xx
    // 调用：this.xx
   
// }

import octicons from 'octicons';console.log(octicons)

export default {
    install(Vue,options){//console.log('options:',options)
        // 创建全局组件
        Vue.component('myicons',{
            props:{
                type:{
                    type:String,
                    required:true
                }
            },
            computed:{
                svg(){
                    return octicons[this.type].toSVG();
                }
            },
            template:'<div v-html="svg"></div>'
        })
    }
}


