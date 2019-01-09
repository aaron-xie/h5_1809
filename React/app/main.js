import React from 'react';
import {render} from 'react-dom';



// function format(d){
//     return d.toLocaleDateString() + d.toLocaleTimeString().replace(/上午|下午/,' ');
// }

// setInterval(()=>{
//     let now = new Date();
//     let dom = <div>
//         <h2>走动的时钟：</h2>
//         <time>{format(now)}</time>
//     </div>
//     ReactDOM.render(
//         dom
//         ,
//         document.querySelector('#app')
//     )
// },1000)




// 创建一个类
// class App{
//     // 构造函数
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     // 这里的方法会写入App的原型对象
//     // 可枚举性为false
//     say(){
//         console.log('say')
//     }

//     getName(){
//         return this.name;
//     }

//     getAge(){
//         return this.age;
//     }
// }

// // 等效于以下写法
// // App.prototype.get = function(){}

// // 类继承：extends
// class MyApp extends App{

// }
// window.App = App;
// window.MyApp = MyApp;



/*
    React组件定义（标签）
        * 函数式组件（无状态组件、受控组件、UI组件）
            * 必须有返回值
        * 类组件（有状态组件、非受控组件、容器组件）
            * 利用ES6的类继承实现的组件
            * 必须有render方法，且render方法必须有返回值
*/

// function App(){
//     // 函数式组件必须有返回值
//     return <div><h2>函数式组件</h2><p>xxx</p></div>
// }

// class App extends React.Component{
//     // render其实就是实现了函数式组件
//     render(){
//         return <div><h2>类组件</h2><p>利用ES6的类继承实现的组件</p></div>
//     }
// }


import App from './App';

render(
    //组件
    <App/>
    ,
    document.querySelector('#app')
)