import React from 'react';
import {render} from 'react-dom';

// 引入组件类型
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';

import store from './store';
store.subscribe(()=>{
    console.log(123)
})
store.subscribe(()=>{
    console.log(456)
})

// console.log('initial:',store.getState());
// store.subscribe(function(){
//     console.log('data:',store.getState())
// });

// store.dispatch({
//     type:'ADD_TO_CART',
//     payload:{
//         id:1,
//         name:'iphone Xs',
//         price:9998,
//         qty:1
//     }
// });

// import {createStore} from 'redux';

// let defaultState = {goodslist:[],step:0}
// let reducer = function(state=defaultState,action){
//     // action的格式：{type:xxx,payload}
//     // 实现设定的修改逻辑
//     switch(action.type){
//         case 'REMOVE_FROM_CART':
//             return {...state,goodslist:state.goodslist.filter(item=>item.id!=payload.id)}
        
//         //添加商品到购物车
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 goodslist:[...state.goodslist,action.payload]
//             }
//         default:
//             return state;
//     }
// }

// // 生成store
// // store对象的方法
// //  * getState() 获取仓库最新状态（数据）
// //  * dispatch(action) 操作数据
// //  * subscribe(fn)
// // reducer：是一个函数，作用是规定state的修改逻辑，返回新的state
// // state: 为数据状态（快照，即数据在某个时间点的状态），State改变则View改变
// // aciton: 用于定义如何改变state，格式：{type:xxx,payload}
// let store = createStore(reducer);
// console.log('store',store);

// // 监听修改
// store.subscribe(function(){
//     // 当state有修改时，自定执行这个回调函数
//     let data = store.getState();
//     console.log('subscribe:',data);
// })

// // 获取最新状态
// let data = store.getState();
// console.log('inital data',data);

// // 修改state：唯一修改方式dispatch
// store.dispatch({type:'ADD_TO_CART',payload:{id:1,name:'iphoneX',price:8998,qty:1}})
// store.dispatch({type:'ADD_TO_CART',payload:{id:2,name:'Mate20 pro',price:7998,qty:2}})


// redux的的原理
let createStore = (reducer)=>{
    // 初始化
    let state = reducer();

    let listeners = [];

    // 获取状态
    let getState = ()=>{
        return state;
    }

    // 修改状态
    let dispatch = (action)=>{
        state = reducer(state,action);

        listeners.forEach(listener=>listener());
    }

    // 监听状态修改
    // 订阅者/发布者模式
    let subscribe = (callback)=>{
        listeners.push(callback);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

// let store = createStore(reducer)
// store.subscribe(()=>{
    //console.log(666)
//})
// store.subscribe(()=>{
    //console.log(777)
//})
// store.dispatch({type:'xx',payload:xxx})


render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
    ,
    document.querySelector('#app')
)