export default {
    state:{
        cartlist:[{
            id:1,
            title:'iphoneXs',
            price:12998,
            color:'土豪金',
            qty:1,
            kucun:10
        },{
            id:2,
            title:'Honor V20',
            price:2999,
            color:'渐变蓝',
            qty:1,
            kucun:20
        }
    ],
    step:2,
    total:2000
  },
  getters:{
    salelist(state){
      return state.cartlist.map(item=>({...item,price:item.price*0.5}));
    }
  },

  // 通过mutations修改state中的数据
  mutations:{
    changeQty(state,payload){
      //state：store中的state数据
      // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
      // console.log('payload:',payload)
      state.cartlist.forEach(item=>{
        if(item.id === payload.id){
          item.qty = payload.qty;
        }
      })
    },

    // 添加到购物车列表
    add(state,payload){
        state.cartlist.push(payload);
    },

    remove(state,payload){//{id:xxx}
      let index;
      state.cartlist.forEach((item,idx)=>{
        if(item.id===payload.id){
          index = idx;
        }
      })
      state.cartlist.split(index,1)
    },

    // 清空
    clear(state){
      state.cartlist = [];
    },

    // 修改库存
    changeKucun(state,payload){
      state.cartlist.forEach(item=>{
        if(item.id === payload.id){
          item.kucun = payload.kucun;
        }
      })
    }
  },

  // 负责操作mutations
  actions:{
    getKuncun(context,payload){
      // 请求服务器，获取库存信息
      setTimeout(()=>{
        // kucun是从服务器获取的信息
        let kucun = parseInt(Math.random()*100);
        context.commit('changeKucun',{...payload,kucun})
      },2000);
    }
  }
}