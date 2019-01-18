/*
    购物车Reducer
        * 指定修改规则
*/

import {
    CLEAR_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATA_QTY
} from '../actions/cartAction'

// state默认值
let defaultState = {
    goodslist:[],
    step:0
}

let reducer = function(state=defaultState,action){
    let {type,payload} = action;
    switch(type){
        // 删除购物车商品
        case REMOVE_FROM_CART:
            // action{type:'xx',palyload:{id}}
            return {...state,goodslist:state.goodslist.filter(item=>item.id!=payload.id)}
        
        //添加商品到购物车
        case ADD_TO_CART:
            // action{type:'xx',palyload:{id,name,qty,price}}
            return {
                ...state,
                goodslist:[...state.goodslist,payload]
            }

        //更新商品数量
        case UPDATA_QTY:
            // action{type:'xxx',payload:{id,qty}}
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.id == payload.id){
                        item.qty = payload.qty
                    }
                    return item;
                })
            }
        //清空购物车
        case CLEAR_CART:
            // action{type:'xxx'}
            return {
                ...state,
                goodslist:[]
            }     
        default:
            return state;
    }
}

export default reducer;