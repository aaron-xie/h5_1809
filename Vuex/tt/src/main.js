// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import Vuex from 'vuex';

// Vue.use(Vuex);

// // vuex的使用
// // 1.创建一个store
// const store = new Vuex.Store({
//   // 2. 创建state数据交由store来管理
//   state:{
//     cartlist:[{
//       id:1,
//       title:'iphoneXs',
//       price:12998,
//       color:'土豪金',
//       qty:1,
//       kucun:10
//     },{
//       id:2,
//       title:'Honor V20',
//       price:2999,
//       color:'渐变蓝',
//       qty:1,
//       kucun:20
//     }
//   ]
//   },
//   getters:{
//     salelist(state){
//       return state.cartlist.map(item=>({...item,price:item.price*0.5}));
//     }
//   },

//   // 通过mutations修改state中的数据
//   mutations:{
//     changeQty(state,payload){
//       //state：store中的state数据
//       // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
//       // console.log('payload:',payload)
//       state.cartlist.forEach(item=>{
//         if(item.id === payload.id){
//           item.qty = payload.qty;
//         }
//       })
//     },

//     // 修改库存
//     changeKucun(state,payload){
//       state.cartlist.forEach(item=>{
//         if(item.id === payload.id){
//           item.kucun = payload.kucun;
//         }
//       })
//     }
//   },

//   // 负责操作mutations
//   actions:{
//     getKuncun(context,payload){
//       // 请求服务器，获取库存信息
//       setTimeout(()=>{
//         // kucun是从服务器获取的信息
//         let kucun = parseInt(Math.random()*100);
//         context.commit('changeKucun',{...payload,kucun})
//       },2000);
//     }
//   }
// });


new Vue({
  el: '#app',
  router,

  // 3将创建好的store注入到根实例里
  store,

  components: { App },
  template: '<App/>'
})
